<template>
  <div class="flex flex-1 flex-col gap-2">
    <h1 class="text-xl">Lista de pendientes</h1>
    <div class="flex flex-row">
      <button class="bg-gray-300 text-white px-1 py-0.5" @click="isAddingNew = !isAddingNew">
        <template v-if="isAddingNew">Ocultar Formulario</template>
        <template v-else>Agregar nueva tarea</template>
      </button>
    </div>
    <template v-if="isAddingNew">
      <div class="flex flex-1 flex-row gap-2">
      <input type="text" v-model="description" class="border-slate-900 border-2 rounded px-1 py-0.5" />
      <button @click="submit" class="bg-blue-300 text-white px-1 py-0.5">
        Agregar
      </button>
    </div>
    </template>
    <template v-if="isEmpty">
      <p class="text-sm">No existen tareas disponibles</p>
    </template>
    <template v-else>
      <div>
        <p>Tareas Pendientes: {{ pendingTodos.length }}</p>
        <p>Tareas Completadas: {{ completedTodos.length }}</p>
      </div>
      <ul class="flex flex-col m-auto" style="max-width: 768px;">
        <li class="flex flex-row justify-between" v-for="item in todoList" :key="item.id">
          <div>
            {{ item.description }}
          </div>
          <div class="flex flex-row gap-2">
            <button class="bg-green-500 text-white px-2 py-0.5" v-if="!item.isCompleted" @click="() => completeItem(item)">Completar</button>
            <button class="bg-red-500 text-white px-2 py-0.5" @click="() => removeTodoItem(item)">Eliminar</button>
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import useTodo from '@/todo/composables/useTodo'

const { todoList, isEmpty, isAddingNew, description, pendingTodos, completedTodos, addTodoItem, removeTodoItem, completeItem, submit } = useTodo()
</script>

<style lang="scss" scoped></style>