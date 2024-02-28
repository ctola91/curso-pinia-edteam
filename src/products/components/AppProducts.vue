<template>
  <div class="flex justify-center flex-row gap-2 flex-wrap">
      <AppProductItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import useProducts from '../composables/useProducts';
import AppProductItem from './AppProductItem.vue';

const { products } = useProducts()
</script>

<style scoped></style>