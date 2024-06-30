<script setup lang="ts">
import { useHost } from '../composables/useHost'
import { MessageType } from '../enums/MessageType'
import { onData } from '../games/quiz/onData'
import { useBaseStore } from '../store/base'
import { usePeerStore } from '../store/peer'
import { useQuizStore } from '../store/quiz'

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

function initPeer() {
  const events = onData(host.value, {
    peer,
    quiz,
    base,
  })

  peer.init(events)
}
</script>

<template>
  <default-layout>
    <div class="flex flex-col h-full overflow-hidden">
      <quiz-screen v-if="ready" />
      <name-card v-else @set-name="initPeer" />
    </div>
  </default-layout>
</template>
