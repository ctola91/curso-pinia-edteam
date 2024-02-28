import type { Todo } from '@/todo/interfaces/todo'
import { useTodoStore } from '@/stores/todo'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const isAddingNew = ref<boolean>(false)
const description = ref<string>('')

const useTodo = () => {
  const store = useTodoStore()
  const { todoList, isEmpty, pendingTodos, completedTodos } = storeToRefs(store)

  const addTodoItem = (newItem: Todo) => {
    const newList = [...todoList.value, newItem]
    store.setTodoList(newList)
  }

  const removeTodoItem = (item: Todo) => {
    const index = todoList.value.findIndex((i) => i.id === item.id)
    if (index >= 0) {
      store.removeTodoItem(index)
    } else {
      console.log('No se pudo encontrar el elemento')
    }
  }

  const completeItem = (item: Todo) => {
    const index = todoList.value.findIndex((i) => i.id === item.id)
    if (index >= 0) {
      todoList.value[index].isCompleted = true
      store.setTodoList([...todoList.value])
    } else {
      console.log('No se pudo encontrar el elemento')
    }
  }

  const submit = () => {
    const form = {
      id: uuidv4(),
      description: description.value,
      isCompleted: false
    }

    addTodoItem(form)
    isAddingNew.value = false
    description.value = ""
  }

  return {
    todoList,
    isEmpty,
    isAddingNew,
    description,
    pendingTodos,
    completedTodos,
    addTodoItem,
    removeTodoItem,
    completeItem,
    submit
  }
}

export default useTodo
