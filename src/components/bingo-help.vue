<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <n-button tertiary circle @click="show = true">
    <template #icon>
      <span class="ico-mdi-help" />
    </template>
  </n-button>

  <n-modal v-model:show="show">
    <n-card title="Bingo" class="max-w-900px" closable @close="show = false">
      <template #header-extra />

      <div class="space-y-4">
        <p>
          Ziel ist es, eine Reihe, Spalte oder Diagonale zu füllen.
        </p>

        <p>
          Mit der linken Maustaste/<kbd>d</kbd> kann ein Feld als <strong class="text-green-700">erledigt</strong> oder <strong class="text-red-700">fehlgeschlagen</strong> markiert werden. Mit der rechten Maustaste/<kbd>p</kbd> können <strong class="text-blue-600">persönliche Ziele</strong> markiert werden. Mit der mittleren Maustaste/<kbd>r</kbd> kann ein Feld zurückgesetzt werden.
        </p>

        <div>
          <h3 class="font-bold">
            Allgemeine Regeln:
          </h3>

          <ul class="list-disc pl-6">
            <li>Das Auktionshaus darf nicht verwendet werden.</li>
            <li>Es dürfen keine Gegenstände oder Gold von anderne Spielern gehandelt werden.</li>
            <li>Den Hinweisen ist Folge zu leisten.</li>
          </ul>
        </div>
      </div>

      <template #footer />
    </n-card>
  </n-modal>
</template>

<style>
kbd {
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  color: #333;
  display: inline-block;
  font-size: 0.85em;
  line-height: 1.4;
  margin: 0 0.1em;
  padding: 0.1em 0.6em;
  white-space: nowrap;
}
</style>
