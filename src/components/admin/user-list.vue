<script setup lang="ts">
import ky from 'ky'
import type { DataTableColumns } from 'naive-ui'
import { NButton, useDialog } from 'naive-ui'
import type { User } from '@/types/User'
import { UserRole } from '@/enums/UserRole'

const dialog = useDialog()

const users = ref<User[]>([])

async function fetchUsers() {
  const response = await ky.get('users', {
    prefixUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: 'include',
  })

  const json = await response.json<User[]>()

  users.value = json
}

onMounted(() => {
  fetchUsers()
})

const columns = computed<DataTableColumns<User>>(() => [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: 'Rolle',
    key: 'role',
  },
  {
    key: 'actions',
    render(user: User) {
      return h(NButton, {
        tertiary: true,
        circle: true,
        disabled: user.role === UserRole.Admin,
        onClick: () => {
          dialog.warning({
            title: 'Nutzer löschen',
            content: 'Möchtest du diesen Nutzer wirklich löschen?',
            positiveText: 'Ja',
            negativeText: 'Nein',
            onPositiveClick: async () => {
              return true
            },
            onNegativeClick: () => {},
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
  <n-card title="Users" :bordered="false" content-class="p-0!">
    <n-data-table :columns="columns" :data="users" />
  </n-card>
</template>
