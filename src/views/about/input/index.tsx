import { defineComponent } from 'vue'

interface InputProps {
  value: string
  onChange: (value: string) => void
}

export default defineComponent({
  props: {
    value: {
      type: String,
      default: '',
    },
    onChange: {
      type: Function,
      required: true,
    },
  },
  emits: [],
  components: {},

  setup(props, ctx) {
    const handleChange: (payload: Event) => void = (event: Event) => {
      console.log(props)
      props.onChange((event.target as HTMLInputElement).value)
    }
    return () => <input value={props.value} onInput={handleChange} />
  },
})
