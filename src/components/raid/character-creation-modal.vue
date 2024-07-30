<script setup lang="ts">
import { type FormInst, type FormRules, useMessage } from 'naive-ui'
import type { CharacterClass } from '../../enums/CharacterClass'
import { CharacterClassArr } from '../../enums/CharacterClass'
import { type CharacterRole, CharacterRoleArr } from '../../enums/CharacterRole'
import { useRaidStore } from '../../store/raid'
import type { CreateCharacterDto } from '../../types/dtos/create-character.dto'

const raidStore = useRaidStore()

const show = ref(false)

interface ModelType {
  name: string | null
  class: CharacterClass | null
  roles: CharacterRole[] | null
}

const message = useMessage()

const formRef = ref<FormInst | null>(null)

const model = ref<ModelType>({
  name: null,
  class: null,
  roles: null,
})

const rules: FormRules = {
  name: [
    {
      required: true,
      validator(_, value) {
        if (!value) {
          return new Error('Bitte gib einen Namen ein')
        }

        if (value.length < 2) {
          return new Error('Der Name muss mindestens 2 Zeichen lang sein')
        }

        if (value.length > 12) {
          return new Error('Der Name darf maximal 12 Zeichen lang sein')
        }

        return true
      },
    },
  ],
  class: [
    {
      required: true,
      type: 'string',
      validator(_, value) {
        if (!value) {
          return new Error('Bitte wähle eine Klasse aus')
        }

        if (!CharacterClassArr.includes(value)) {
          return new Error('Ungültige Klasse')
        }

        return true
      },
    },
  ],
  roles: [
    {
      required: true,
      type: 'string',
      validator(_, values) {
        if (!values) {
          return new Error('Bitte wähle eine Rolle aus')
        }

        if (values.every((value: CharacterRole) => !CharacterRoleArr.includes(value))) {
          return new Error('Ungültige Rolle')
        }

        return true
      },
    },
  ],
}

async function createCharacter() {
  return await formRef.value?.validate(async (errors) => {
    if (errors) {
      message.error('Bitte fülle alle Felder korrekt aus')
    }
    else {
      raidStore.createCharacter(model.value as CreateCharacterDto)

      model.value = {
        name: null,
        class: null,
        roles: null,
      }

      message.success('Charakter erstellt')
    }
  })
}
</script>

<template>
  <n-button @click="show = true">
    Charakter erstellen
  </n-button>

  <n-modal v-model:show="show" :mask-closable="false">
    <n-card
      title="Charakter erstellen"
      class="max-w-160"
      closable :segmented="{
        content: true,
        footer: 'soft',
      }"
      @close="show = false"
    >
      <n-form ref="formRef" :model="model" :rules="rules" class="space-y-4">
        <n-form-item label="Name" path="name">
          <n-input v-model:value="model.name" placeholder="Name" />
        </n-form-item>

        <n-form-item label="Klasse" path="class">
          <class-select v-model:value="model.class" />
        </n-form-item>

        <n-form-item label="Rolle" path="role">
          <role-select v-model:value="model.roles" />
        </n-form-item>
      </n-form>

      <template #action>
        <div class="flex justify-between">
          <n-button secondary @click="show = false">
            Abbrechen
          </n-button>

          <n-button
            attr-type="submit"
            type="primary"
            @click="createCharacter"
          >
            Erstellen
          </n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<style>

</style>
