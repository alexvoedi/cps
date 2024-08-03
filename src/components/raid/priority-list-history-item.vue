<script setup lang="ts">
import { useRaidStore } from '../../store/raid'
import { getClassIcon } from '../../utils/getClassIcon'
import type { PriorityListHistoryItem } from '@/types/PriorityListHistory'
import { useTranslatedTimeAgo } from '@/composables/useTranslatedTimeAgo'

const props = defineProps<{
  event: PriorityListHistoryItem
}>()

const raidStore = useRaidStore()

const character = computed(() => raidStore.getCharacterById(props.event.characterId))

const text = ref<string | null>(null)

function updateText() {
  if (!props.event.from) {
    return `Auf Platz ${props.event.to} eingestiegen.`
  }
  else if (props.event.from > props.event.to) {
    return `Von Platz ${props.event.from} auf Platz ${props.event.to} aufgestiegen.`
  }
  else {
    return `Von Platz ${props.event.from} auf Platz ${props.event.to} abgestiegen.`
  }
}

if (!text.value) {
  text.value = updateText()
}

const timeAgo = useTranslatedTimeAgo(props.event.timestamp)
</script>

<template>
  <n-list-item v-if="character">
    <template #prefix>
      <n-avatar>
        <n-icon>
          <img :src="getClassIcon(character.class)" :alt="`${character.class} Class Icon`">
        </n-icon>
      </n-avatar>
    </template>

    <div class="flex gap-4 items-end">
      <h4 class="font-bold text-lg">
        {{ character.name }}
      </h4>

      <span class="text-true-gray-500">{{ timeAgo }}</span>
    </div>

    <div>
      {{ text }}
    </div>
  </n-list-item>
</template>
