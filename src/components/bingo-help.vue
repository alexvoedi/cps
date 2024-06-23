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
          Ein Feld als <strong class="text-green-700">erledigt</strong> oder <strong class="text-red-700">fehlgeschlagen</strong> markiert werden. Außerdem können <strong class="text-blue-600">persönliche Ziele</strong> markiert werden.
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

        <div>
          <h3 class="font-bold">
            Tastenkürzel:
          </h3>

          <p>Durch zeigen auf ein Feld und drücken der entsprechenden Taste können die Felder markiert werden.</p>

          <ul class="list-disc pl-6">
            <li>
              <kbd><span class="ico-mdi-mouse" /> Links</kbd>/<kbd>s</kbd> - Status durchschalten
            </li>
            <li>
              <kbd><span class="ico-mdi-mouse" /> Rechts</kbd>/<kbd>p</kbd> - Priorität durchschalten
            </li>
            <li>
              <kbd><span class="ico-mdi-mouse" /> Mitte</kbd>/<kbd>r</kbd> - Status zurücksetzen
            </li>
            <li>
              <kbd>d</kbd> - Status auf <strong class="text-green-800">erledigt</strong> setzen
            </li>
            <li>
              <kbd>f</kbd> - Status auf <strong class="text-red-900">fehlgeschlagen</strong> setzen
            </li>
            <li>
              <kbd>u</kbd> - Status zurücksetzen
            </li>
            <li>
              <kbd>1</kbd> - Priorität zurücksetzen
            </li>
            <li>
              <kbd>2</kbd> - Priorität auf <strong class="text-blue-400">mittel</strong> setzen
            </li>
            <li>
              <kbd>3</kbd> - Priorität auf <strong class="text-blue-700">hoch</strong> setzen
            </li>
            <li>
              <kbd>r</kbd> - Alles zurücksetzen
            </li>
            <li>
              <kbd><span class="ico-mdi-arrow-up" /></kbd> - Zähler erhöhen
            </li>

            <li>
              <kbd><span class="ico-mdi-arrow-down" /></kbd> - Zähler verringern
            </li>
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
