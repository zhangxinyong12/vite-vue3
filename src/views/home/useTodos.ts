import { computed, ref, watchEffect } from 'vue'
import useStorage from '@/utils/useStoreage'

type TodoItem = {
  title: string,
  done: boolean
}

function useTodos() {
  const title = ref('')
  const todos = useStorage('todos', [{ title: '学习vue', done: false }])

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    })
    title.value = ''
  }

  function clear() {
    todos.value = todos.value.filter((item: TodoItem) => !item.done)
  }

  watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  })
  const active = computed(() => {
    console.log(todos.value)

    return todos.value.filter((item: TodoItem) => !item.done).length
  })

  const all = computed(() => todos.value.length)
  const allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function (val: boolean) {
      todos.value.forEach((el: TodoItem) => {
        el.done = val
      })
    },
  })

  return { title, todos, addTodo, clear, active, all, allDone }
}

export default useTodos
