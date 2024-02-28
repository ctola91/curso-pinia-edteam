<template>
  <form @submit.prevent="submit" class="flex flex-1 flex-col gap-3 justify-start px-3">
    <div>
      <h2 class="text-2xl font-semibold">Agregar Product</h2>
    </div>
    <div class="flex flex-1 flex-col gap-0.5">
      <label for="title">Titulo</label>
      <input v-model="title" type="text" name="title" class="border-slate-900 border-2 rounded px-1 py-0.5" />
      <span v-if="titleErrorMessage" class="text-xs text-red-500">{{ titleErrorMessage }}</span>
    </div>
    <div class="flex flex-1 flex-col gap-0.5">
      <label for="description">Descripcion</label>
      <textarea v-model="description" type="text" name="description" cols="30" rows="3"
        class="border-slate-900 border-2 rounded px-1 py-0.5"></textarea>
      <span v-if="descriptionErrorMessage" class="text-xs text-red-500">{{ descriptionErrorMessage }}</span>
    </div>
    <div class="flex flex-1 flex-col gap-0.5">
      <label for="price">Precio</label>
      <input v-model="price" type="number" name="price" class="border-slate-900 border-2 rounded px-1 py-0.5" />
      <span v-if="priceErrorMessage" class="text-xs text-red-500">{{ priceErrorMessage }}</span>
    </div>
    <div>
      <label for="cost">Costo</label>
      <input v-model="cost" type="number" name="cost" class="border-slate-900 border-2 rounded px-1 py-0.5" />
      <span v-if="costErrorMessage" class="text-xs text-red-500">{{ costErrorMessage }}</span>
    </div>
    <div class="flex flex-row">
      <button type="submit" class="submit-btn">Guardar</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import useNewProduct from '@/products/composables/useNewProduct'

const { title, titleErrorMessage, description, descriptionErrorMessage, price, priceErrorMessage, cost, costErrorMessage, submit } = useNewProduct()
</script>

<style scoped>
.submit-btn {
  @apply bg-blue-900 text-white rounded py-2 px-3;
}
</style>