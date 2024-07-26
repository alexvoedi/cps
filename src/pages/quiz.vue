<script setup lang="ts">
// import QrcodeVue from 'qrcode.vue'
import { useHost } from '../composables/useHost'
import { MessageType } from '../enums/MessageType'
import { onData } from '../games/quiz/onData'
import { useBaseStore } from '../store/base'
import { usePeerStore } from '../store/peer'
import { useQuizStore } from '../store/quiz'

// const params = useUrlSearchParams<{
//   hostId?: string
// }>()

const base = useBaseStore()
const peer = usePeerStore()
const quiz = useQuizStore()
const host = useHost()

const ready = computed(() => !!base.name)

if (!host.value) {
  const focus = useWindowFocus()

  window.addEventListener('beforeunload', () => {
    peer.send({
      type: MessageType.Admin,
      leave: true,
    })
  })

  watch(focus, () => {
    peer.send({
      type: MessageType.Admin,
      focus: focus.value,
    })
  })
}

onMounted(() => {
  const events = onData(host.value, {
    peer,
    quiz,
    base,
  })

  peer.init(events)
})

// const url = computed(() => {
//   const url = new URL('/cps/quiz', window.location.origin)

//   const query = new URLSearchParams()

//   if (params.hostId) {
//     query.set('hostId', params.hostId)
//   }

//   url.search = query.toString()

//   return url.toString()
// })
</script>

<template>
  <div class="flex flex-col h-full overflow-hidden">
    <quiz-screen v-if="ready" />

    <div v-else class="m-auto space-y-16">
      <name-card v-if="!base.name" />

      <!-- <div v-if="params.hostId" class="flex items-center justify-center">
          <QrcodeVue
            :value="url"
            :size="300"
            :margin="8"
            background="rgba(255, 255, 255, 0.8)"
            foreground="black"

            level="H"
          />
        </div> -->
    </div>
  </div>
</template>
