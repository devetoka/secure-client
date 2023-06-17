<script setup>
import UserEmail from '@/components/UserEmail.vue';
import { ref, watch } from 'vue';
import ArrowDownAnimation from '../animation/ArrowDownAnimation.vue';

const props = defineProps({
    submitted: {
        type: Boolean,
        default: false
    },
  
});

</script>

<template>
  <header class="flex w-full flex-col text-center md:space-y-6 items-center justify-center">
        <img class="w-32 h-auto " src="@/assets/images/lock.png" alt=""> Secure your funds
        <p style="font-size: 1.3rem;" class="md:text-2xl line text-sm">
            You are 3 step closer to securing your funds from online scammers.
        </p>
        <p style="font-size: 1.3rem;">
            Start here
        </p>
        
        <ArrowDownAnimation></ArrowDownAnimation>
        
    </header>
    
    <UserEmail class="w-full" />
</template>