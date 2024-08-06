<script setup lang="ts">
import ky from 'ky'
import type { DataTableColumns } from 'naive-ui'
import { NButton, useDialog, useMessage } from 'naive-ui'
import type { User } from '@/types/User'
import { UserRole } from '@/enums/UserRole'
import UserRoleSelect from '@/components/admin/user-role-select.vue'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const dialog = useDialog()
const message = useMessage()

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
    render(user) {
      return h('span', {
        class: 'font-mono',
      }, user.id)
    },
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Email',
    key: 'email',
    render(user) {
      return h('a', {
        class: 'font-mono',
        href: `mailto:${user.email}`,
      }, user.email)
    },
  },
  {
    title: 'Rolle',
    key: 'role',
    render(user) {
      return h(UserRoleSelect, {
        'modelValue': user.role,
        'disabled': user.id === userStore.user?.id,
        'onUpdate:value': async (role: UserRole) => {
          try {
            await ky.patch(`users/${user.id}`, {
              prefixUrl: import.meta.env.VITE_BACKEND_URL,
              credentials: 'include',
              json: { role },
            })

            message.success('Rolle erfolgreich geändert')
          }
          catch {
            message.error('Fehler beim Ändern der Rolle')
          }
        },
      })
    },
  },
  {
    key: 'actions',
    align: 'right',
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
