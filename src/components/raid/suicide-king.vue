<script setup lang="ts">
import type { DraggableEvent } from 'vue-draggable-plus'
import { VueDraggable } from 'vue-draggable-plus'
import { useMessage } from 'naive-ui'
import { useRaidStore } from '../../store/raid'
import { socketKey } from '../../injections/socket'
import { ListType } from '../../enums/ListType'

const raidStore = useRaidStore()
const message = useMessage()

const socket = inject(socketKey)

const characterList = ref<string[]>([])
const suicideKingList = ref<string[]>([])
const needList = ref<Map<string, { need?: boolean, transmog?: boolean }>>(new Map())

const transition = ref(true)

watch(() => raidStore.charactersWithoutPosition, () => {
  transition.value = true
  characterList.value = raidStore.charactersWithoutPosition.map(character => character.id)
}, {
  immediate: true,
  deep: true,
})

watch(() => raidStore.suicideKing, async () => {
  transition.value = true
  suicideKingList.value = raidStore.suicideKing.map(suicideKing => suicideKing.characterId)
}, {
  immediate: true,
  deep: true,
})

async function handleAddToSuicideKing(e: Event) {
  if (!socket) {
    return message.error('Socket not connected')
  }

  const { data, newIndex } = e as DraggableEvent<string>

  if (newIndex === undefined)
    return

  socket.emit('add-to-suicide-king', JSON.stringify({
    characterId: data,
    listType: ListType.SuicideKing,
    position: newIndex + 1,
  }))
}

async function moveCharacter(e: Event) {
  if (!socket) {
    return message.error('Socket not connected')
  }

  const { data, oldIndex, newIndex } = e as DraggableEvent<string>

  if (newIndex === undefined || oldIndex === undefined || newIndex === oldIndex)
    return

  socket.emit('move-character', JSON.stringify({
    characterId: data,
    listType: ListType.SuicideKing,
    fromPosition: oldIndex + 1,
    toPosition: newIndex + 1,
  }))
}

function handleRemoveFromSuicideKing() {

}

function setNeed(characterId: string, { need, transmog }: { need?: boolean, transmog?: boolean }) {
  const character = needList.value.get(characterId)

  if (character) {
    if (need) {
      character.need = !character.need
    }

    if (transmog) {
      character.transmog = !character.transmog
    }

    if (!character.need && !character.transmog) {
      needList.value.delete(characterId)
    }
  }
  else {
    needList.value.set(characterId, {
      need,
      transmog,
    })
  }
}

function resetNeed() {
  needList.value.clear()
}
</script>

<template>
  <div class="w-full p-4 grid grid-cols-[1fr_2fr] gap-8 overflow-x-hidden">
    <h2 class="text-2xl font-bold">
      Ohne Position
    </h2>

    <h2 class="text-2xl font-bold">
      Suicide King Liste
    </h2>

    <div class="space-y-2">
      <div class="flex align-center">
        <n-button
          secondary
          :disabled="needList.size === 0"
          @click="resetNeed"
        >
          <span class="text-md font-bold">Bedarf zurücksetzen</span>
        </n-button>
      </div>

      <VueDraggable
        v-model="characterList"
        :animation="300"
        class="flex flex-col gap-2 p-2 min-h-240px bg-true-gray-800"
        group="suicide-king"
      >
        <raid-suicide-king-entry
          v-for="characterId in characterList"
          :key="characterId"
          :character="raidStore.getCharacterById(characterId)"
        />
      </VueDraggable>
    </div>

    <div class="space-y-2">
      <div class="flex align-center justify-end">
        <n-button
          secondary
          :disabled="needList.size === 0"
          @click="resetNeed"
        >
          <span class="text-md font-bold">Bedarf zurücksetzen</span>
        </n-button>
      </div>

      <VueDraggable
        v-model="suicideKingList"
        :animation="300"
        class="flex flex-col gap-2 p-2 min-h-240px bg-true-gray-800"
        group="suicide-king"
        @add="handleAddToSuicideKing"
        @remove="handleRemoveFromSuicideKing"
        @start="() => transition = false"
        @end="async (e) => {
          await moveCharacter(e)
        }"
      >
        <TransitionGroup :name="transition ? 'fade' : ''" type="transition">
          <raid-suicide-king-entry
            v-for="characterId in suicideKingList"
            :key="characterId"
            :character="raidStore.getCharacterById(characterId)"
            :position="raidStore.getCharacterSuicideKingPosition(characterId)"
            :list-type="ListType.SuicideKing"
            :need="needList.get(characterId)"
            @set-need="(value) => setNeed(characterId, value)"
          />
        </TransitionGroup>
      </VueDraggable>
    </div>
  </div>
</template>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
