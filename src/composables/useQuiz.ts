import Questions from '@/data/quiz.json'

export enum QuizState {
  Waiting = 'waiting',
  StartQuiz = 'start-quiz',
  ShowQuestion = 'show-question',
  ShowAnswers = 'show-answers',
  LockAnswers = 'lock-answers',
  ShowCorrectAnswer = 'show-correct-answer',
  ShowQuestionResults = 'show-question-results',
  NextQuestion = 'next-question',
  ShowResults = 'show-results',
}

export function useQuiz() {
  const quizState = ref<QuizState>(QuizState.Waiting)
  const questionIds = ref<number[]>([])
  const questionCount = ref(30)
  const currentQuestionIndex = ref<number | null>(null)
  const currentAnswerId = ref<number | null>(null)
  const answersLocked = ref(false)
  const countdownTime = ref(3)
  // const results = ref<Array<{
  //   id: number
  //   answers: number[]
  // }>>([])

  const getRandomQuestions = () => {
    const questions = Questions.sort(() => Math.random() - 0.5).slice(0, questionCount.value)
    return questions.map((_, id) => id)
  }

  const currentQuestion = computed(() => {
    if (currentQuestionIndex.value === null) {
      return null
    }

    return Questions[questionIds.value[currentQuestionIndex.value]]
  })

  const nextQuestion = () => {
    if (currentQuestionIndex.value === null) {
      currentQuestionIndex.value = 0
      return
    }

    if (currentQuestionIndex.value === questionCount.value - 1) {
      return
    }

    currentQuestionIndex.value++
  }

  onMounted(() => {
    questionIds.value = getRandomQuestions()
  })

  const countdownStartTime = ref<Date | null>(null)

  const startCountdown = () => {
    countdownStartTime.value = new Date()

    setTimeout(() => {
      quizState.value = QuizState.LockAnswers
      answersLocked.value = true
    }, countdownTime.value * 1000)
  }

  const setState = (state: QuizState) => {
    quizState.value = state

    switch (state) {
      case QuizState.ShowQuestion:
        answersLocked.value = false
        break
      case QuizState.ShowAnswers:
        countdownStartTime.value = new Date()
        startCountdown()
        break
      case QuizState.LockAnswers:
        answersLocked.value = true
        break
      case QuizState.ShowCorrectAnswer:
        break
      case QuizState.ShowQuestionResults:
        break
      case QuizState.NextQuestion:
        nextQuestion()
        currentAnswerId.value = null
        break
      case QuizState.Waiting:
        break
      case QuizState.StartQuiz:
        nextQuestion()
        break
      default:
        break
    }
  }

  const nextState = () => {
    switch (quizState.value) {
      case QuizState.ShowQuestion:
        setState(QuizState.ShowAnswers)
        break
      case QuizState.ShowAnswers:
        setState(QuizState.LockAnswers)
        break
      case QuizState.LockAnswers:
        setState(QuizState.ShowCorrectAnswer)
        break
      case QuizState.ShowCorrectAnswer:
        setState(QuizState.ShowQuestionResults)
        break
      case QuizState.ShowQuestionResults:
        setState(QuizState.NextQuestion)
        break
      case QuizState.NextQuestion:
        setState(QuizState.ShowQuestion)
        break
      case QuizState.Waiting:
        setState(QuizState.StartQuiz)
        break
      case QuizState.StartQuiz:
        setState(QuizState.ShowQuestion)
        break
      default:
        break
    }
  }

  return {
    quizState,
    currentQuestion,
    currentAnswerId,
    nextQuestion,
    nextState,
    setState,
    currentQuestionIndex,
    questionCount,
    answersLocked,
    startCountdown,
    countdownStartTime,
    countdownTime,
  }
}
