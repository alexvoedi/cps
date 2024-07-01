<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useBaseStore } from '../store/base'
import { usePeerStore } from '../store/peer'
import { MessageType } from '../enums/MessageType'

const base = useBaseStore()
const message = useMessage()
const peer = usePeerStore()

const name = ref<string | null>(base.name)

function submit() {
  if (!name.value)
    return
  if (name.value.length < 1)
    return
  if (name.value.length > 32)
    return

  base.setName(name.value)
  peer.send({
    type: MessageType.Admin,
    name: name.value,
  })
  message.success('Name gespeichert')
}
</script>

<template>
  <n-input-group>
    <n-input
      v-model:value="name"
      type="text"
      size="large"
      placeholder="Name"
      maxlength="32"
      minlength="1"
      @keydown.enter="submit()"
    />
    <n-button size="large" type="primary" @click="submit()">
      Speichern
    </n-button>
  </n-input-group>
</template>

<style>

</style>
