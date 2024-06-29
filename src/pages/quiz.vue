<script setup lang="ts">
import { MessageType } from '../enums/MessageType'
import { useBaseStore } from '../store/base'
import { usePeerStore } from '../store/peer'

const base = useBaseStore()
const peer = usePeerStore()

const params = useUrlSearchParams<{
  host?: boolean
}>()

const ready = computed(() => !!base.name)

if (!params.host) {
  const focus = useWindowFocus()

  watch(focus, () => {
    peer.send({
      type: MessageType.Admin,
      focus: focus.value,
    })
  })
}
</script>

<template>
  <default-layout>
    <div class="flex flex-col h-full overflow-hidden">
      <quiz-screen v-if="ready" />
      <name-card v-else />
    </div>
  </default-layout>
</template>
