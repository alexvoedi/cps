<script setup lang="ts">
import { type MenuOption, useMessage } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { useMobile } from '../composables/useMobile'
import { useUserStore } from '../store/user'
import { useBaseStore } from '../store/base'

const route = useRoute()
const router = useRouter()
const mobile = useMobile()
const message = useMessage()
const userStore = useUserStore()
const baseStore = useBaseStore()

function renderIcon(icon: string) {
  return () => h('span', {
    class: icon,
  })
}

const menuOptions = computed<MenuOption[]>(() => [
  {
    label: () => h(RouterLink, {
      to: '/',
    }, {
      default: () => 'Home',
    }),
    key: '/',
    icon: renderIcon('ico-mdi-home'),
  },
  // {
  //   label: () => h(RouterLink, {
  //     to: '/bingo',
  //   }, {
  //     default: () => 'Bingo',
  //   }),
  //   key: '/bingo',
  //   icon: () => renderIcon('ico-ic:baseline-grid-on'),
  // },
  // {
  //   label: () => h(RouterLink, {
  //     to: '/quiz',
  //   }, {
  //     default: () => 'Quiz',
  //   }),
  //   key: '/quiz',
  //   icon: () => renderIcon('ico-mdi-head-question'),
  // },
  {
    label: () => h(RouterLink, {
      to: '/raid',
    }, {
      default: () => 'Raid',
    }),
    key: '/raid',
    icon: renderIcon('ico-mdi-sword-cross'),
  },
  {
    label: () => h(RouterLink, {
      to: '/settings',
    }, {
      default: () => 'Einstellungen',
    }),
    key: '/settings',
    icon: renderIcon('ico-mdi-cog'),
  },
  {
    label: () => h(RouterLink, {
      to: '/admin',
    }, {
      default: () => 'Admin',
    }),
    show: userStore.isAdmin,
    key: '/admin',
    icon: renderIcon('ico-mdi-shield-account'),
  },
  {
    label: () => h(RouterLink, {
      to: '/login',
    }, {
      default: () => 'Login',
    }),
    show: !userStore.isLoggedIn && baseStore.backendHealthy,
    key: '/login',
    icon: renderIcon('ico-mdi-login'),
  },
  {
    label: 'Logout',
    show: userStore.isLoggedIn && baseStore.backendHealthy,
    key: '/logout',
    icon: renderIcon('ico-mdi-logout'),
    onClick: () => {
      userStore.logout()
      message.success('Logout erfolgreich')

      if (route.meta.roles) {
        message.info('Weiterleitung zur Startseite')
        router.push('/')
      }
    },
  },
])

const activeItem = computed(() => route.path)
</script>

<template>
  <n-layout-header v-if="mobile">
    <n-menu
      :options="menuOptions"
      :value="activeItem"
      mode="horizontal"
      responsive
    />
  </n-layout-header>

  <n-layout-sider
    v-else
    :collapsed-width="64"
    class="bg-color"
    bordered
    collapse-mode="width"
    collapsed
  >
    <n-menu
      :options="menuOptions"
      :value="activeItem"
      :collapsed-width="64"
      collapsed
      collapse-mode="width"
    />
  </n-layout-sider>
</template>
