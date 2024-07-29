<script setup lang="ts">
import { useDialog, useMessage } from 'naive-ui'
import type { Character } from '../../types/Character'
import { getClassIcon } from '../../utils/getClassIcon'
import { socketKey } from '../../injections/socket'
import { ListType } from '../../enums/ListType'

const props = defineProps<{
  position?: number
  character?: Character
  listType?: ListType
  need?: {
    need?: boolean
    transmog?: boolean
  }
}>()

const emit = defineEmits<{
  setNeed: [need: { need?: boolean, transmog?: boolean }]
}>()

const dialog = useDialog()
const message = useMessage()

const socket = inject(socketKey)

function deleteCharacter() {
  dialog.warning({
    title: 'Charakter löschen',
    content: 'Willst du wirklich den Charakter von der Suicide King Liste löschen?',
    onPositiveClick: () => {

    },
    onNegativeClick: () => {},
    positiveText: 'Ja!',
    negativeText: 'Nein, lieber nicht',
  })
}

function moveCharacterToEnd() {
  if (!socket) {
    return message.error('Nicht verbunden')
  }

  if (!props.character) {
    return message.error('Character nicht gefunden!')
  }

  socket.emit('move-to-end', JSON.stringify({
    characterId: props.character.id,
    listType: ListType.SuicideKing,
  }))
}
</script>

<template>
  <div v-if="character" class="cursor-move bg-true-gray-900 border border-true-gray-800 rounded overflow-hidden flex justify-between items-center px-4 py-2">
    <div class="flex items-center gap-8">
      <span v-if="position" class="font-mono font-bold text-2xl pl-4">
        {{ position }}
      </span>

      <img :src="getClassIcon(character.class)" class="w-10 h-10">

      <span class="text-lg font-light">{{ character.name }}</span>
    </div>

    <div v-if="listType" class="flex items-center justify-center gap-3">
      <n-button
        circle
        :type="need?.need ? 'primary' : 'default'"
        :primary="need?.need"
        :quaternary="!need?.need"
        size="large"
        @click="emit('setNeed', { need: true })"
      >
        <span class="text-lg font-bold">B</span>
      </n-button>

      <n-button
        circle
        :type="need?.transmog ? 'primary' : 'default'"
        :primary="need?.transmog"
        :quaternary="!need?.transmog"
        size="large"
        @click="emit('setNeed', { transmog: true })"
      >
        <span class="text-lg font-bold">T</span>
      </n-button>

      <n-tooltip :delay="800">
        <template #trigger>
          <n-button circle quaternary @click="moveCharacterToEnd">
            <template #icon>
              <span class="ico-mdi-arrow-collapse-down" />
            </template>
          </n-button>
        </template>

        <div>Character ans Ende verschieben</div>
      </n-tooltip>

      <n-tooltip :delay="800">
        <template #trigger>
          <n-button circle quaternary type="warning" @click="deleteCharacter">
            <template #icon>
              <span class="ico-mdi-delete" />
            </template>
          </n-button>
        </template>

        <div>Charakter aus Liste entfernen</div>
      </n-tooltip>
    </div>
  </div>
</template>

<style>

</style>
