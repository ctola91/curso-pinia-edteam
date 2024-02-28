<template>
  <RouterLink :to="`/products/${product.id}`">
    <div class="flex flex-1 flex-col gap-2 shadow-lg p-3">
      <div class="flex justify-start">
        <h2 class="text-lg">{{ product.title }}</h2>
      </div>
      <div class="text-wrap">
        <p class="text-md">{{ product.description }}</p>
      </div>
      <div class="flex flex-1">
        <RouterLink :to="`/products/${product.id}`" class="bg-blue-700 px-3 py-2 text-white rounded">Ver</RouterLink>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import type { Product } from '../interfaces/product';

interface Props {
  product: Product
}

const props = defineProps<Props>()
const product = toRef(props, 'product')
</script>

<style scoped></style>