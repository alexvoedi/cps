<script setup lang="ts">
import type { DraggableEvent } from 'vue-draggable-plus'
import { VueDraggable } from 'vue-draggable-plus'
import { useMessage } from 'naive-ui'
import { useRaidStore } from '../../store/raid'
import { socketKey } from '../../injections/socket'
import { ListType } from '../../enums/ListType'
import type { PlayerNeed } from '../../enums/PlayerNeed'
import { calculateNewOrderedListPosition } from '../../utils/calculateNewOrderedListPosition'
import { useUserStore } from '../../store/user'

const raidStore = useRaidStore()
const userStore = useUserStore()
const message = useMessage()

const socket = inject(socketKey)

const characterList = ref<string[]>([])
const priorityList = ref<string[]>([])
const needList = ref<Map<string, PlayerNeed | null>>(new Map())

const transition = ref(true)
const showInactive = ref(true)

watch(() => raidStore.inactiveCharacters, () => {
  transition.value = true
  characterList.value = raidStore.inactiveCharacters.map(character => character.id)
}, {
  immediate: true,
  deep: true,
})

watch(() => raidStore.priorityList, async () => {
  transition.value = true
  priorityList.value = raidStore.priorityList
    .filter(priorityList => priorityList.active)
    .map(priorityList => priorityList.characterId)
}, {
  immediate: true,
  deep: true,
})

async function handleAddToPriorityList(e: Event) {
  if (!socket) {
    return message.error('Socket not connected')
  }

  const { data: characterId, newIndex } = e as DraggableEvent<string>

  if (newIndex === undefined)
    return

  const {
    fromPosition,
    toPosition,
  } = calculateNewOrderedListPosition({
    characterId,
    newIndex,
    priorityListOrderedList: priorityList.value,
    priorityList: raidStore.priorityList,
    characterList: raidStore.characters,
  })

  socket.emit('priority-list:add', JSON.stringify({
    characterId,
    listType: ListType.Item,
    fromPosition,
    toPosition,
  }))
}

async function moveCharacter(e: Event) {
  if (!socket) {
    return message.error('Socket not connected')
  }

  const { data: characterId, oldIndex, newIndex, from, to } = e as DraggableEvent<string>

  if (newIndex === undefined || oldIndex === undefined || oldIndex === newIndex || from !== to)
    return

  const {
    fromPosition,
    toPosition,
  } = calculateNewOrderedListPosition({
    characterId,
    oldIndex,
    newIndex,
    priorityListOrderedList: [...priorityList.value],
    priorityList: raidStore.priorityList,
    characterList: raidStore.characters,
  })

  socket.emit('priority-list:move', JSON.stringify({
    characterId,
    listType: ListType.Item,
    fromPosition,
    toPosition,
  }))
}

function handleRemoveFromPriorityList(e: Event) {
  if (!socket) {
    return message.error('Socket not connected')
  }

  const { data } = e as DraggableEvent<string>

  socket.emit('priority-list:set-active', JSON.stringify({
    characterId: data,
    active: false,
  }))
}

function setNeed(characterId: string, value: PlayerNeed | null) {
  if (value) {
    needList.value.set(characterId, value)
  }
  else {
    needList.value.delete(characterId)
  }
}

function resetNeed() {
  needList.value.clear()
}
</script>

<template>
  <div class="flex-grow flex flex-col">
    <div
      class="flex-grow w-full h-full p-4 grid gap-x-8 gap-y-4 overflow-hidden transition" :class="[
        showInactive ? 'grid-cols-[360px_1fr]' : 'grid-cols-[1fr]',
      ]"
    >
      <transition>
        <div v-if="showInactive" class="flex flex-col">
          <h2 class="text-2xl font-bold">
            Inaktiv
          </h2>

          <div class="flex align-center">
            <n-button>
              Inaktive aktivieren
            </n-button>
          </div>

          <VueDraggable
            v-model="characterList"
            :animation="300"
            class="flex-grow flex flex-col gap-2 p-2 min-h-240px bg-true-gray-800 overflow-hidden transition"
            group="priority-list"
            :disabled="!userStore.isRaidLead"
            @start="() => transition = false"
          >
            <TransitionGroup :name="transition ? 'fade' : ''" type="transition">
              <raid-priority-list-entry
                v-for="characterId in characterList"
                :key="characterId"
                :character-id="characterId"
              />
            </TransitionGroup>
          </VueDraggable>
        </div>
      </transition>

      <div class="flex flex-col">
        <h2 class="text-2xl font-bold">
          Suicide King
        </h2>

        <div class="flex align-center justify-end">
          <n-button @click="showInactive = !showInactive">
            toggle
          </n-button>

          <n-button
            secondary
            :disabled="needList.size === 0"
            @click="resetNeed"
          >
            <span class="text-md font-bold">Bedarf zurücksetzen</span>
          </n-button>
        </div>

        <VueDraggable
          v-model="priorityList"
          :animation="300"
          class="flex-grow flex flex-col gap-2 p-2 min-h-240px bg-true-gray-800 overflow-hidden"
          group="priority-list"
          :disabled="!userStore.isRaidLead"
          @start="() => transition = false"
          @add="handleAddToPriorityList"
          @remove="handleRemoveFromPriorityList"
          @end="async (e) => await moveCharacter(e)"
        >
          <TransitionGroup :name="transition ? 'fade' : ''" type="transition">
            <raid-priority-list-entry
              v-for="characterId in priorityList"
              :key="characterId"
              :character-id="characterId"
              :list-type="ListType.Item"
              :need="needList.get(characterId)"
              @set-need="(value: PlayerNeed | null) => setNeed(characterId, value)"
            />
          </TransitionGroup>
        </VueDraggable>
      </div>
    </div>
  </div>

  <n-divider class="m-0!" />

  <raid-priority-list-history />
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
