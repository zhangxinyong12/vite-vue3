# Vue 3 + Typescript + Vite
## 创建项目
```
npm init vite@latest
```
## eslint
```
npx eslint --init
```
.eslintrc.js 
```
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
```