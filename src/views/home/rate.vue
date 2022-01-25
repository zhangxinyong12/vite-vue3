<template>
  <div :style="fontStyle">
    <div class="rate" @mouseout="mouseOut">
      <span
        @click="onRate(num)"
        @mouseover="mouseOver(num)"
        v-for="num in 5"
        :key="num"
      >
        ☆
      </span>
      <span class="hollow" :style="fontWidth">
        <span
          @click="onRate(num)"
          @mouseover="mouseOver(num)"
          v-for="num in 5"
          :key="num"
        >
          ★
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed, ref, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  theme: {
    type: String,
    default: 'orange',
  },
})

const rate = computed(() =>
  '★★★★★☆☆☆☆☆'.slice(5 - props.modelValue, 10 - props.modelValue)
)

const themeObj: {
  [key: string]: string
} = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff',
}
const fontStyle = computed(() => {
  return `color:${themeObj[props.theme]};`
})

const width = ref(props.modelValue)
function mouseOver(val: number) {
  width.value = val
}
function mouseOut() {
  width.value = props.modelValue
}
const fontWidth = computed(() => `width:${width.value}em;`)

const emits = defineEmits(['update:modelValue'])
function onRate(val: number) {
  console.log('emit')
  emits('update:modelValue', val)
}
</script>

<style lang="scss" scoped>
.rate {
  position: relative;
  display: inline-block;
  font-size: 60px;
  top: 0;
  left: 0;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
}
</style>
