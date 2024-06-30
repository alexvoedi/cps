import { MessageType } from '@/enums/MessageType'
import { QuizState } from '@/enums/QuizState'
import type { useBaseStore } from '@/store/base'
import type { usePeerStore } from '@/store/peer'
import type { useQuizStore } from '@/store/quiz'
import type { HostMessage } from '@/types/HostMessage'
import type { PlayerMessage } from '@/types/PlayerMessage'

export function onData(
  host: boolean,
  stores: {
    quiz: ReturnType<typeof useQuizStore>
    peer: ReturnType<typeof usePeerStore>
    base: ReturnType<typeof useBaseStore>
  },
) {
  if (host) {
    return {
      onData: onHostData(stores),
      onOpen: onHostOpen(stores),
    }
  }
  else {
    return {
      onData: onPlayerData(stores),
      onOpen: onPlayerOpen(stores),
    }
  }
}

function onHostOpen(_: {
  quiz: ReturnType<typeof useQuizStore>
  peer: ReturnType<typeof usePeerStore>
  base: ReturnType<typeof useBaseStore>
}) {
  return (_: string) => {
  }
}

function onHostData({ quiz, peer }: {
  quiz: ReturnType<typeof useQuizStore>
  peer: ReturnType<typeof usePeerStore>
  base: ReturnType<typeof useBaseStore>
}) {
  return ({ id, data }: PlayerMessage) => {
    switch (data.type) {
      case MessageType.Admin: {
        const player = quiz.players.find(player => player.id === id)

        if ('focus' in data) {
          if (player) {
            player.focus = data.focus
          }
        }
        else if ('name' in data) {
          if (player) {
            player.name = data.name
          }
          else {
            quiz.addPlayer(id, data.name)
          }

          const response = {
            type: MessageType.Quiz,
            state: quiz.state,
            questionIds: quiz.questionIds,
            currentQuestionId: quiz.currentQuestionId,
          }

          if ([QuizState.ShowResults, QuizState.ShowQuestionResults, QuizState.EndQuiz].includes(quiz.state)) {
            Object.assign(response, {
              players: quiz.players,
            })
          }

          if ([QuizState.LockAnswers, QuizState.ShowAnswers].includes(quiz.state)) {
            Object.assign(response, {
              countdownStart: quiz.countdownStart,
            })
          }

          peer.send(response)
        }
        else if ('leave' in data) {
          peer.removePeer(id)
        }

        break
      }
      case MessageType.Quiz: {
        if (data.state !== quiz.state)
          return

        switch (data.state) {
          case QuizState.Waiting: {
            quiz.addPlayer(id, data.name)
            break
          }
          case QuizState.ShowAnswers: {
            quiz.setPlayerAnswer(id, data.answerId)
            break
          }
        }

        break
      }
    }
  }
}

function onPlayerOpen({ peer, base }: {
  quiz: ReturnType<typeof useQuizStore>
  peer: ReturnType<typeof usePeerStore>
  base: ReturnType<typeof useBaseStore>
}) {
  return (_: string) => {
    peer.send({
      type: MessageType.Admin,
      name: base.name,
    })
  }
}

function onPlayerData({ quiz }: {
  quiz: ReturnType<typeof useQuizStore>
  peer: ReturnType<typeof usePeerStore>
  base: ReturnType<typeof useBaseStore>
}) {
  return (message: HostMessage) => {
    switch (message.type) {
      case MessageType.Quiz: {
        const { countdownStart, ...rest } = message

        Object.assign(quiz, rest)

        switch (message.state) {
          case QuizState.ShowQuestion:
            quiz.setCurrentQuestion(message.currentQuestionId)
            quiz.addQuestionId(message.currentQuestionId)
            quiz.initCountdown()
            break
          case QuizState.ShowAnswers:
            quiz.startCountdown()
            break
          case QuizState.LockAnswers:
            quiz.stopCountdown()
            break
          case QuizState.NextQuestion:
            quiz.resetCountdown()
            quiz.resetCurrentAnswer()
            break
        }

        if (countdownStart) {
          quiz.countdownStart = new Date(countdownStart)
        }

        break
      }

      case MessageType.Admin: {
        if (message.kick) {
          quiz.setState(QuizState.Waiting)
        }
      }
    }
  }
}
