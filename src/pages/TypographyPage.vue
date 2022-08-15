<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Typography</span>
    <span class="text-h2">Typography</span>
    <span class="text-h3">Typography</span>
    <span class="text-h4">Typography</span>
    <span class="text-h5">Typography</span>
    <span class="text-h6">Typography</span>
    <q-separator />
    <span class="text-subtitle1">Subtitulo 1</span>
    <span class="text-subtitle2">Subtitulo 2</span>
    <q-separator />

    <p class="text-body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci
      tempora omnis itaque, deleniti repellendus minus autem, laborum impedit
      placeat blanditiis nihil ratione a, eius ipsam? Odio, dolorem alias? Amet.
    </p>

    <p class="text-body2">
      lorem ipsum dolor sit amet, consectetuer adipisci. Integer ipsum, ipsum
    </p>

    <q-btn color="primary" label="Abrir menu lateral" class="q-mt-md"></q-btn>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TypographyPage',
  setup() {
    return {};
  },
});
</script>
