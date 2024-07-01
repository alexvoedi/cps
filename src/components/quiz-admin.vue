<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useQuizStore } from '../store/quiz'
import { copyLink } from '../utils/copyLink'
import { usePeerStore } from '../store/peer'

const message = useMessage()

const peer = usePeerStore()
const quiz = useQuizStore()

function copyGameUrl() {
  if (peer.id) {
    copyLink(peer.id)
    message.info('Link copied to clipboard')
  }
}
</script>

<template>
  <div class="p-4 bg-dark-9 bg-opacity-80">
    <div class="mx-auto flex gap-4 justify-between items-center">
      <div class="flex items-center justify-center gap-4">
        <n-tag :bordered="false" type="info" round>
          {{ quiz.state }}
        </n-tag>
      </div>

      <div class="flex items-center justify-center gap-4">
        <n-button
          circle
          quaternary
          @click="copyGameUrl()"
        >
          <template #icon>
            <span class="ico-mdi-link" />
          </template>
        </n-button>

        <quiz-admin-modal />

        <n-button
          circle
          quaternary
          @click="quiz.nextState()"
        >
          <template #icon>
            <span class="ico-mdi-skip-next" />
          </template>
        </n-button>
      </div>
    </div>
  </div>
</template>

<style>

</style>
