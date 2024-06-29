<script setup lang="ts">
import { useQuizStore } from '../store/quiz'
import Spinner from '@/assets/spinner.svg'

const params = useUrlSearchParams<{
  host?: boolean
}>()

const quiz = useQuizStore()
</script>

<template>
  <quiz-card>
    <h2 class="text-center font-bold text-3xl">
      Willkommen beim WoW-Quiz!
    </h2>

    <h3 class="text-xl flex items-center justify-center gap-4 mx-auto">
      <img :src="Spinner">
      <span class="font-light">Bitte warte, bis das Spiel startet...</span>
    </h3>

    <div v-if="params.host" class="space-y-4">
      <h3 class="text-xl">
        Spieler: {{ quiz.players.length }}
      </h3>

      <!-- as table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="text-left">
                ID
              </th>
              <th class="text-left">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in quiz.players" :key="player.id">
              <td>
                {{
                  player.id
                }}
              </td>
              <td>
                {{
                  player.name
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </quiz-card>
</template>

<style>

</style>
