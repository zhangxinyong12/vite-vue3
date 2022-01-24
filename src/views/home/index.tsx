import { defineComponent } from 'vue'
import TodoListVue from './todoList.vue'
export default defineComponent({
  props: {},
  emits: [],
  components: {
    TodoListVue,
  },
  setup(props, ctx) {
    return () => (
      <div>
        <h1>Home</h1>
        <TodoListVue></TodoListVue>
      </div>
    )
  },
})
