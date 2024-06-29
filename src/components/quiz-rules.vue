<script setup lang="ts">
import { useQuizStore } from '../store/quiz'

const quiz = useQuizStore()
</script>

<template>
  <quiz-card>
    <div class="space-y-4">
      <h2 class="text-3xl text-center font-bold">
        Jetzt geht's los!
      </h2>

      <h3 class="text-xl font-bold">
        Regeln
      </h3>

      <ul class="space-y-3 text-lg">
        <li>Es gibt <b>insgesamt {{ quiz.questionCount }} Fragen</b>.</li>
        <li>Es gibt <b>nur eine richtige Antwort</b>.</li>
        <li>Die Zeit zum Beantworten einer Frage beträgt <b>{{ quiz.countdownDuration }} Sekunden</b>.</li>
        <li>Zu Beginn und nach jeder zehnten Antwort wird der Zwischenstand gezeigt.</li>
        <li>
          <span>Die Punktevergabe erfolgt wie folgt:</span>
          <ul class="space-y-1">
            <li>Jede richtig beantwortete Frage gibt +100 Punkte.</li>
            <li>Jede falsch beantwortet Frage gibt -50 Punkte.</li>
            <li>Jede nicht beantwortete Frage gibt 0 Punkte.</li>
            <li>Jede in Folge richtig beantwortete Frage gibt +10 Zusatzpunkte. Falsch oder nicht beantwortete Fragen setzen die Zusatzpunkte auf 0 zurück.</li>
          </ul>
        </li>
        <li>Wer nach Frage {{ quiz.questionCount }} die meisten Punkte hat gewinnt.</li>
        <li>Es sind keine Hilfsmittel erlaubt.</li>
      </ul>
    </div>
  </quiz-card>
</template>

<style lang="postcss">
ul {
  list-style-type: upper-roman;
  padding-left: 1rem;
}

li::marker {
  @apply text-true-gray-4;
}

ul ul {
  list-style-type: lower-roman;
  padding-left: 1rem;
}
</style>
