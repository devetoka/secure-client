<script setup>
import { ref } from "vue";
import AppInput from "@/components/elements/AppInput.vue";

let email = ref('')

defineProps({
  placeholder: {
    type: String,
    default: "Enter your email address"
  }
})

</script>

<template>
  <div>
    <form class="flex justify-center">
        <AppInput 
          type="email"
          :placeholder=placeholder
          :focus=true
        >

        </AppInput>
    </form>
</div>
</template>
