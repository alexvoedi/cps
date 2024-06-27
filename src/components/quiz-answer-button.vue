<script setup lang="ts">
import { QuizState } from '../enums/QuizState'
import { useQuizStore } from '../store/quiz'

const props = defineProps<{
  text: string
  answerId: number
}>()

const quiz = useQuizStore()

const highlightCorrectAnswer = computed(() => [
  QuizState.ShowCorrectAnswer,
  QuizState.ShowQuestionResults,
].includes(quiz.state))

const selected = computed(() => {
  return quiz.currentAnswerId === props.answerId
})

const answerCorrect = computed(() => {
  return props.answerId === quiz.currentQuestion?.answerId
})

const buttonType = computed(() => {
  if (highlightCorrectAnswer.value) {
    if (answerCorrect.value) {
      return 'success'
    }
    else {
      return 'error'
    }
  }
  else {
    return 'primary'
  }
})

function setAnswer() {
  quiz.setCurrentAnswer(props.answerId)
}
</script>

<template>
  <n-button
    :type="buttonType"
    :tertiary="!selected"
    :primary="selected"
    class="py-4! text-xl! disabled:(opacity-60)! text-wrap! h-full!"
    :disabled="quiz.state !== QuizState.ShowAnswers"
    block
    @click="setAnswer()"
  >
    {{ text }}
  </n-button>
</template>

<style>

</style>
