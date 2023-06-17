<script setup>

defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  customClass: String,
  steps: Number,
  max: {
    type: Number,
    default: 100
  },
  focus: {
    type: Boolean,
    default: false
}
})

</script>

<template>
  <input 
    :type=type 
    :placeholder=placeholder
    :value=value
    :step=steps
    :class=customClass
    :maxlength=maxlength
    :autofocus=focus
    class="h-20 bg-transparent font-bold italic w-full text-2xl p-4 text-center border-b-2 border-solid border-secure-primary !outline-none" 
   
    />
</template>
