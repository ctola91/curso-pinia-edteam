import type { Todo } from '@/todo/interfaces/todo'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const initialState = [
  {
    id: '1',
    description: 'Crear curso de Vue en EDteam',
    isCompleted: true
  },
  {
    id: '2',
    description: 'Crear curso de Angular en EDteam',
    isCompleted: false
  },
  {
    id: '3',
    description: 'Crear curso de React en EDteam',
    isCompleted: false
  }
]
// composition api
export const useTodoStore = defineStore('todo', () => {
  // state
  const message = ref('Hola Mundo')
  const todoList = ref<Todo[]>(initialState)

  // getters
  const isEmpty = computed(() => todoList.value.length === 0)
  const pendingTodos = computed(() => todoList.value.filter((i) => i.isCompleted === false))
  const completedTodos = computed(() => todoList.value.filter((i) => i.isCompleted === true))

  // actions
  const setTodoList = (newValue: Todo[]) => {
    todoList.value = newValue
  }

  const removeTodoItem = (index: number) => {
    todoList.value.splice(index, 1)
  }

  return {
    message,
    todoList,
    isEmpty,
    pendingTodos,
    completedTodos,
    setTodoList,
    removeTodoItem
  }
})

// options api
// export const useTodoStore = defineStore('todo', {
//   state: () => ({
//     todoList: initialState,
//     message: 'Hola Mundo'
//   }),
//   getters: {
//     isEmpty: (state) => state.todoList.length === 0,
//     pendingTodos: (state) => state.todoList.filter((i) => i.isCompleted === false),
//     completedTodos: (state) => state.todoList.filter((i) => i.isCompleted === true)
//   },
//   actions: {
//     setTodoList(newValue: Todo[]) {
//       this.todoList = newValue
//     },
//     removeTodoItem(index: number) {
//       this.todoList.splice(index, 1)
//     }
//   }
// })
