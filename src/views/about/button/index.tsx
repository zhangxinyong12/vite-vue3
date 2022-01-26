import { defineComponent, PropType } from 'vue'
import './index.scss'
type PropsSizeType = 'small' | 'middle' | 'large' | undefined
type PropsTypeType =
  | 'default'
  | 'primary'
  | 'ghost'
  | 'dashed'
  | 'link'
  | 'text'
  | undefined

export default defineComponent({
  name: 'ZButton',
  inheritAttrs: false,
  props: {
    type: {
      type: String as PropType<PropsTypeType>,
      default: 'default',
    },
    size: {
      type: String as PropType<PropsSizeType>,
      default: 'small',
    },
  },
  emits: ['click'],
  components: {},
  setup(props, { slots, attrs, emit }) {
    console.log('slots', slots)

    const handleClick = (event: Event) => {
      emit('click', event)
    }
    return () => (
      <>
        <div>
          <button class="z-button" onClick={handleClick} {...attrs}>
            {slots.default ? slots.default() : ''}
            {props.size}
            {props.type}
            <div>{slots.left?.()}</div>
          </button>
        </div>
      </>
    )
  },
})
