<script setup>
import AppTextArea from '../elements/AppTextArea.vue';

import UserEmail from '@/components/UserEmail.vue';

import AppInput from '../elements/AppInput.vue';


defineProps({
  conditions: String
})

</script>

<template>
  <header class="flex w-3/4 flex-col text-center space-y-6 items-center justify-center">
    <img class="w-32 h-auto " src="@/assets/images/send-mail.png" alt="">
        <h1 class="text-2xl">
            Congratulations! You are no longer susceptible to online scammers.
        </h1>
        <p>
            Your contract has been created and sent to the recipient.
            Once it is approved and payment is made. Your payment will be secured and only released when the contract is finalized.
        </p>
        
    </header>
    
</template>
