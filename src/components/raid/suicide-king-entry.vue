<script setup lang="ts">
import { useDialog, useMessage } from 'naive-ui'
import { getClassIcon } from '../../utils/getClassIcon'
import { socketKey } from '../../injections/socket'
import { ListType } from '../../enums/ListType'
import { useRaidStore } from '../../store/raid'
import { PlayerNeed } from '../../enums/PlayerNeed'
import { useUserStore } from '../../store/user'

const props = defineProps<{
  characterId: string
  listType?: ListType
  need?: PlayerNeed | null
}>()

const emit = defineEmits<{
  setNeed: [need: PlayerNeed | null]
}>()

const dialog = useDialog()
const message = useMessage()

const socket = inject(socketKey)

const raidStore = useRaidStore()
const userStore = useUserStore()

const character = computed(() => raidStore.getCharacterById(props.characterId))
const suicideKingEntry = computed(() => raidStore.getCharacterFromSuicideKing(props.characterId))

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

  if (!character.value) {
    return message.error('Character nicht gefunden!')
  }

  socket.emit('move-to-end', JSON.stringify({
    characterId: character.value.id,
    listType: ListType.SuicideKing,
  }))
}

function toggleCharacterActive() {
  if (!socket) {
    return message.error('Nicht verbunden')
  }

  if (!character.value) {
    return message.error('Character nicht gefunden!')
  }

  if (!suicideKingEntry.value) {
    return message.error('Character nicht in Suicide King List vorhanden')
  }

  const command = suicideKingEntry.value?.active ? 'set-character-inactive' : 'set-character-active'

  socket.emit(command, JSON.stringify({
    characterId: character.value.id,
  }))
}
</script>

<template>
  <div
    v-if="character"
    class="bg-true-gray-900 border border-true-gray-800 rounded overflow-hidden flex w-full justify-between items-center px-4 py-2"
    :class="{
      'cursor-move': userStore.isRaidLead,
    }"
  >
    <div class="flex items-center gap-8">
      <span v-if="suicideKingEntry?.position" class="font-mono font-bold text-2xl pl-4">
        {{ suicideKingEntry.position }}
      </span>

      <img :src="getClassIcon(character.class)" class="w-10 h-10">

      <span class="text-lg font-light text-nowrap">{{ character.name }}</span>
    </div>

    <div v-if="userStore.isRaidLead" class="flex items-center justify-center gap-3">
      <template v-if="suicideKingEntry">
        <n-tooltip>
          <template #trigger>
            <n-switch :value="suicideKingEntry.active" @update:value="toggleCharacterActive()" />
          </template>

          <div>Character {{ suicideKingEntry.active ? 'deaktivieren' : 'aktivieren' }}</div>
        </n-tooltip>
      </template>

      <template v-if="listType">
        <n-button
          circle
          :type="need === PlayerNeed.Need ? 'primary' : 'default'"
          :primary="need === PlayerNeed.Need"
          :quaternary="need !== PlayerNeed.Need"
          size="large"
          @click="emit('setNeed', need === PlayerNeed.Need ? null : PlayerNeed.Need)"
        >
          <span class="text-lg font-bold">B</span>
        </n-button>

        <n-button
          circle
          :type="need === PlayerNeed.Transmog ? 'primary' : 'default'"
          :primary="need === PlayerNeed.Transmog"
          :quaternary="need !== PlayerNeed.Transmog"
          size="large"
          @click="emit('setNeed', need === PlayerNeed.Transmog ? null : PlayerNeed.Transmog)"
        >
          <span class="text-lg font-bold">T</span>
        </n-button>

        <n-tooltip>
          <template #trigger>
            <n-button circle quaternary @click="moveCharacterToEnd">
              <template #icon>
                <span class="ico-mdi-arrow-collapse-down" />
              </template>
            </n-button>
          </template>

          <div>Character ans Ende verschieben</div>
        </n-tooltip>

        <n-tooltip>
          <template #trigger>
            <n-button circle quaternary type="warning" @click="deleteCharacter">
              <template #icon>
                <span class="ico-mdi-delete" />
              </template>
            </n-button>
          </template>

          <div>Charakter aus Liste entfernen</div>
        </n-tooltip>
      </template>
    </div>
  </div>
</template>

<style>

</style>
