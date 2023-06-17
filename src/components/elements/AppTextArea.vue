<script setup>

defineProps({
  value: {
    type: String,
    default: ''
  },
  selected: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <textarea 
  class="h-20 bg-transparent font-bold italic w-full  p-4 border-2 border-solid border-secure-primary !outline-none"
  :value="value"></textarea>
  
</template>
