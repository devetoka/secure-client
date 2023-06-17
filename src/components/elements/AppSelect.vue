<script setup>

defineProps({
  options: {
    type: Array,
    default: []
  },
  selected: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <select :selected="selected" class="h-20 bg-transparent font-bold italic w-full  p-4 text-center border-b-2 border-solid border-secure-primary !outline-none">
    <option value="">Select Bank</option>
    <option  :value="option.value" v-for="(option, n) in options" :key="n"> {{ option.name }}</option>
  </select>
  
</template>
