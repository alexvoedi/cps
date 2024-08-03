<script setup lang="ts">
import { type DataTableColumns, NButton, NTag, useDialog } from 'naive-ui'
import type { Character } from '../../types/Character'
import { getClassIcon } from '../../utils/getClassIcon'
import { useRaidStore } from '../../store/raid'

const dialog = useDialog()
const raidStore = useRaidStore()

const columns = computed<DataTableColumns<Character>>(() => [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Klasse',
    key: 'class',
    render(row) {
      return h('div', [
        h('img', {
          src: getClassIcon(row.class),
          alt: row.class,
          style: {
            width: '1.5rem',
            height: '1.5rem',
          },
        }),
      ])
    },
  },
  {
    title: 'Rollen',
    key: 'roles',
    render(row) {
      return h('div', {
        class: 'space-x-2',
      }, row.roles.map(role => h(NTag, {}, { default: () => role })))
    },
  },
  {
    key: 'actions',
    align: 'right',
    render(character: Character) {
      return h(NButton, {
        tertiary: true,
        circle: true,
        onClick: () => {
          dialog.warning({
            title: 'Nutzer löschen',
            content: 'Möchtest du diesen Character wirklich löschen?',
            positiveText: 'Ja',
            negativeText: 'Nein',
            onPositiveClick: async () => {
              await raidStore.deleteCharacter(character.id)
            },
          })
        },
      }, {
        icon: () => h('span', {
          class: 'ico-mdi-delete',
        }),
      })
    },
  },
])
</script>

<template>
  <raid-character-creation-modal />

  <n-data-table :columns="columns" :data="raidStore.characters" />
</template>

<style>

</style>
