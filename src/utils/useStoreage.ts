import { ref, watchEffect } from 'vue'

export default function useStorage(name: string, value: any, defaultVal?: any) {
  const data = ref(JSON.parse(localStorage.getItem(name) as any) || value || defaultVal)
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value))
  })
  return data
}
