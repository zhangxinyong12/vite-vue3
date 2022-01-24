module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended'
    // 'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['src/views/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0
      }
    },
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 'off'
      }
    }
  ],
  rules: {
    'vue/no-unused-vars': 'off',
    'vue/singleline-html-element-content-newline': 'off'

  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
