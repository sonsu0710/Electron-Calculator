<template>
  <v-btn @click="$emit('itemSelect')">{{props.data}}</v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
  color: String,
  data: String,
  idx: Number,
})

const emits = defineEmits<{
  (e: 'itemSelect'): void
}>()
</script>

<style scoped>

</style>