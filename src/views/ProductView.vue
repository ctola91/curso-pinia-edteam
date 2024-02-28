<template>
  <template v-if="isEditing">
    <!-- mostrar formulario -->
    <AppEditProduct />
  </template>
  <template v-else>
    <div>
      <h2>{{ productSelected?.title }}</h2>
    </div>
    <div>
      <p>{{ productSelected?.description }}</p>
    </div>
    <div>
      <p>Precio: <b>{{ productSelected?.price }}</b></p>
      <p>Costo: <b>{{ productSelected?.cost }}</b></p>
    </div>
    <div>
      <button class="bg-green-500 text-white px-2 py-0.5" @click="isEditing = true">Editar</button>
      <button class="bg-red-500 text-white px-2 py-0.5" @click="deleteProduct">Eliminar</button>
    </div>
  </template>
</template>

<script setup lang="ts">
import AppEditProduct from '@/products/components/AppEditProduct.vue'
import useProduct from '@/products/composables/useProduct'

const { productSelected, isEditing, form, updateProduct, deleteProduct } = useProduct()
</script>

<style lang="scss" scoped></style>