<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
import ky, { HTTPError } from 'ky'

import '@/styles/markdown.css'
import { useMessage } from 'naive-ui'
import { useRoute } from 'vue-router'

interface Step {
  id: string
  title: string
  content: string
  progress: number
  previousStepId?: string
}

const router = useRouter()
const route = useRoute()
const message = useMessage()
const now = useNow()

const query = ref(route.query)

const answer = ref('')
const answerTime = ref(0)

onMounted(() => {
  if (!query.value.id) {
    router.push('/')
  }
})

const step = ref<Step | null>(null)

onMounted(async () => {
  const response = await ky.get(`x/${query.value.id}`, {
    prefixUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: 'include',
  })

  if (response.ok) {
    step.value = await response.json()
  }

  if (!step.value) {
    router.push('/')
  }
})

async function sendAnswer() {
  try {
    const response = await ky.post(`x/${query.value.id}`, {
      prefixUrl: import.meta.env.VITE_BACKEND_URL,
      credentials: 'include',
      json: {
        answer: answer.value,
      },
    })

    const step = await response.json<Step>()

    if (step) {
      router.push(`/x?id=${step.id}`)
    }
  }
  catch (error) {
    answerTime.value = Date.now()

    if (error instanceof HTTPError) {
      const { status, statusText } = error.response

      switch (status) {
        case 429: {
          message.error('Du kannst nur alle 30 Sekunden eine Antwort senden.')
          break
        }
        case 400: {
          message.error('Deine Antwort war wohl falsch...')
          break
        }
        default: {
          message.error(statusText)
          break
        }
      }
    }
  }
}

const remainingWaitTime = computed(() => {
  const remaining = 30 - (now.value.getTime() - answerTime.value) / 1000

  return remaining > 0 ? remaining : 0
})
</script>

<template>
  <centered-layout>
    <n-card
      v-if="step" class="m-auto max-w-200" :segmented="{
        content: true,
        footer: 'soft',
      }"
    >
      <template #header>
        <h1 class="text-4xl">
          {{ step.title }}
        </h1>
      </template>

      <template #header-extra>
        <div>
          {{ Math.round(step.progress * 100) }}% abgeschlossen
        </div>
      </template>

      <div class="p-4">
        <VueMarkdown
          :source="step.content" :options="{
            linkify: true,
            typographer: true,
          }"
          class="font-handwriting text-2xl markdown-body"
        />
      </div>

      <template #action>
        <n-form>
          <n-form-item label="Antwort">
            <n-input v-model:value="answer" placeholder="Gib eine Antwort ein..." />
          </n-form-item>

          <div class="flex items-center gap-8">
            <n-button secondary attr-type="submit" :disabled="remainingWaitTime > 0" @click="sendAnswer()">
              <template #icon>
                <n-icon v-if="remainingWaitTime > 0" class="ico-mdi-timer-sand" />
                <n-icon v-else class="ico-mdi-send" />
              </template>

              <span>Senden</span>
            </n-button>

            <span v-if="remainingWaitTime > 0">
              Du kannst in {{ remainingWaitTime.toFixed(0) }} Sekunden eine weitere Antwort senden.
            </span>
          </div>
        </n-form>
      </template>
    </n-card>
  </centered-layout>
</template>

<style>

</style>
