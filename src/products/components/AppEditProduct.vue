<template>
  <form @submit.prevent="updateProduct">
    <div>
      <h2>Modificar el Producto</h2>
    </div>
    <div>
      <label for="title">Titulo</label>
      <input id="title" v-model="form.title" />
    </div>
    <div>
      <label for="description">Descripcion</label>
      <input id="description" v-model="form.description" />
    </div>
    <div>
      <label for="price">Precio</label>
      <input id="price" v-model="form.price" />
    </div>
    <div>
      <label for="cost">Costo</label>
      <input id="cost" v-model="form.cost" />
    </div>
    <div>
      <button type="submit">Guardar</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import useProduct from '../composables/useProduct';

const { form, updateProduct } = useProduct()
</script>

<style scoped>

</style>