<script setup lang="ts">
import { type FormInst, type FormRules, useMessage } from 'naive-ui'
import { googleTokenLogin } from 'vue3-google-login'
import { useUserStore } from '@/store/user'

interface ModelType {
  email: string | null
  password: string | null
}

const userStore = useUserStore()
const message = useMessage()
const router = useRouter()

const formRef = ref<FormInst | null>(null)

const model = ref<ModelType>({
  email: null,
  password: null,
})

const rules: FormRules = {
  email: [
    {
      required: true,
      validator(_, value) {
        if (!value) {
          return new Error('Bitte gib eine E-Mail-Adresse ein')
        }

        if (!value.includes('@')) {
          return new Error('Bitte gib eine gültige E-Mail-Adresse ein')
        }

        return true
      },
    },
  ],
  password: [
    {
      required: true,
      validator(_, value) {
        if (!value) {
          return new Error('Bitte gib ein Passwort ein')
        }

        if (value.length < 6) {
          return new Error('Das Passwort muss mindestens 6 Zeichen lang sein')
        }

        return true
      },
    },
  ],
}

async function loginWithGoogle() {
  const { access_token } = await googleTokenLogin({
    clientId: import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID,
  })

  if (access_token) {
    await userStore.login(access_token)
    router.push('/')
    message.success('Login erfolgreich')
  }
}
</script>

<template>
  <centered-layout>
    <n-card class="max-w-120 m-auto p-8">
      <n-h1 class="text-center">
        Login
      </n-h1>

      <div class="space-y-6">
        <n-form ref="formRef" :model="model" :rules="rules">
          <n-form-item label="E-Mail" prop="email">
            <n-input v-model="model.email" type="email" placeholder="Bitte E-Mail eingeben..." />
          </n-form-item>

          <n-form-item label="Passwort" prop="password">
            <n-input v-model="model.password" type="password" placeholder="Bitte Passwort eingeben..." />
          </n-form-item>

          <n-button type="primary" native-type="submit">
            Login
          </n-button>
        </n-form>

        <n-divider />

        <div class="flex items-center justify-center">
          <n-button size="large" quaternary circle @click="loginWithGoogle()">
            <template #icon>
              <n-icon class="ico-logos:google-icon" />
            </template>
          </n-button>
        </div>
      </div>
    </n-card>
  </centered-layout>
</template>

<style>

</style>
