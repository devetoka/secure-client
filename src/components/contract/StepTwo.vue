<script setup>
import ArrowDownAnimation from '@/components/animation/ArrowDownAnimation.vue';
import CodeInput from '@/components/CodeInput.vue';
</script>

<template>
  <header class="flex w-3/4 flex-col text-center space-y-6 items-center justify-center">
        <p>
            Security code was sent to your email.
        </p>
        <p style="font-size: 1.3rem;">
           Enter your security code here
        </p>
        <ArrowDownAnimation></ArrowDownAnimation>

        <CodeInput class="justify-between" fields = 5></CodeInput>
    </header>
    
</template>
