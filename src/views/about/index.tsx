import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import ZButton from './button'
import ZInput from './input'

export default defineComponent({
  props: {},
  emits: [],
  components: {
    ZButton,
    ZInput,
  },
  setup(props, ctx) {
    const store = useStore()
    const count = computed(() => store.state.count)
    const double = computed(() => store.getters.double)
    function add() {
      store.commit('add')
    }
    const n = ref(32)
    function addN() {
      n.value++
    }
    const data = reactive({
      name: '1111111',
    })
    function handleClick() {
      console.log(666666)
    }
    const time = ref(new Date().getTime())
    onMounted(() => {
      setInterval(() => {
        time.value = new Date().getTime()
      }, 3000)
    })
    const slotLeft = {
      left: () => <div>left slot</div>,
    }
    const ipt = ref('input')
    function onChange(e: string) {
      console.log(e)
    }
    return () => (
      <div>
        <span>n:{n.value}</span> <br />
        <span>count:{count.value}</span>
        <br />
        <span>double:{double.value}</span> <br />
        <a-button onClick={add}>count +1</a-button>
        <a-button onClick={addN}>n +1</a-button>
        <div>
          <h2>ZButton</h2>
          <ZButton
            v-slots={slotLeft}
            onClick={handleClick}
            type="primary"
            size="small"
            // style={{ width: '20px' }}
          >
            <span>自定义按钮</span>
          </ZButton>
        </div>
        <div>
          <h3 v-show={time.value % 2}>当前时间戳能被5整除才显示</h3>
          <h3 v-show={time.value % 5}>当前时间戳不能被5整除才显示</h3>
        </div>
        <div>
          <ZInput value={ipt.value} onChange={onChange}></ZInput>
        </div>
      </div>
    )
  },
})
