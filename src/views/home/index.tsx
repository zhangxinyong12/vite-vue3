import { defineComponent, ref } from 'vue'
import TodoListVue from './todoList.vue'
import Rate from './rate.vue'
import Trans from './trans.vue'
export default defineComponent({
  props: {},
  emits: [],
  components: {
    TodoListVue,
  },
  setup(props, ctx) {
    const rateValue = ref<number>(2)
    const add = () => {
      rateValue.value++
      if (rateValue.value >= 5) {
        rateValue.value = 5
      }
    }
    function deleteHandle() {
      rateValue.value--
      if (rateValue.value === 0) {
        rateValue.value = 0
      }
    }
    console.log(rateValue.value)

    function update(data: number) {
      console.log(data)
      rateValue.value = data
    }
    return () => (
      <div>
        <h1>Home</h1>
        <TodoListVue></TodoListVue>
        <div>
          <span>评分</span>
          <button onClick={add}>+1</button>
          <button onClick={deleteHandle}>-1</button>
          <Rate
            theme="red"
            modelValue={rateValue.value}
            v-model={rateValue.value}
          ></Rate>
        </div>
        <Trans></Trans>
      </div>
    )
  },
})
