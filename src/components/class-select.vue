<script setup lang="ts">
import type { SelectOption } from 'naive-ui'
import { CharacterClass } from '../enums/CharacterClass'
import { getClassIcon } from '../utils/getClassIcon'

const value = defineModel({
  type: String,
})

const options = ref<SelectOption[]>([
  {
    label: 'Krieger',
    value: CharacterClass.Warrior,
    icon: getClassIcon(CharacterClass.Warrior),
  },
  {
    label: 'Paladin',
    value: CharacterClass.Paladin,
    icon: getClassIcon(CharacterClass.Paladin),
  },
  {
    label: 'Jäger',
    value: CharacterClass.Hunter,
    icon: getClassIcon(CharacterClass.Hunter),
  },
  {
    label: 'Schurke',
    value: CharacterClass.Rogue,
    icon: getClassIcon(CharacterClass.Rogue),
  },
  {
    label: 'Priester',
    value: CharacterClass.Priest,
    icon: getClassIcon(CharacterClass.Priest),
  },
  {
    label: 'Schamane',
    value: CharacterClass.Shaman,
    icon: getClassIcon(CharacterClass.Shaman),
  },
  {
    label: 'Magier',
    value: CharacterClass.Mage,
    icon: getClassIcon(CharacterClass.Mage),
  },
  {
    label: 'Hexenmeister',
    value: CharacterClass.Warlock,
    icon: getClassIcon(CharacterClass.Warlock),
  },
  {
    label: 'Mönch',
    value: CharacterClass.Monk,
    icon: getClassIcon(CharacterClass.Monk),
  },
  {
    label: 'Druide',
    value: CharacterClass.Druid,
    icon: getClassIcon(CharacterClass.Druid),
  },
  {
    label: 'Dämonenjäger',
    value: CharacterClass.DemonHunter,
    icon: getClassIcon(CharacterClass.DemonHunter),
  },
  {
    label: 'Todesritter',
    value: CharacterClass.DeathKnight,
    icon: getClassIcon(CharacterClass.DeathKnight),
  },
  {
    label: 'Rufer',
    value: CharacterClass.Evoker,
    icon: getClassIcon(CharacterClass.Evoker),
  },
])

function renderLabel(option: SelectOption) {
  return h('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
    },
  }, [
    h('img', {
      src: option.icon,
      alt: option.label,
      class: 'mr-2 w-6 h-6',
    }),
    h('span', {}, {
      default: () => option.label,
    }),
  ])
}
</script>

<template>
  <n-select
    v-model:value="value"
    :options="options"
    :render-label="renderLabel"
    filterable
    placeholder="Bitte wähle eine Klasse..."
    clearable
    show-on-focus
  />
</template>
