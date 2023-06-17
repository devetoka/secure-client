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
    <img class="w-32 h-auto " src="@/assets/images/contract.png" alt="">
        <h1 class="text-2xl">
            Enter any conditions that must be met by either you or the second party.
            You may skip if you like. Make sure you have discussed this with them already. The contract is only valid when they approve it.
        </h1>

        
        <AppTextArea class="h-36" :value="conditions"></AppTextArea>
        
        <UserEmail placeholder="Enter their email address" class="w-full"></UserEmail>

        <div class="flex w-full">
            <AppInput class="w-3/5" type="number" placeholder="Enter amount to be paid"></AppInput>
            <label class="self-end w-1/5 border-1 border-solid border-secure-primary">
                <AppInput class=" w-3 h-3 " name="currency" type="radio" placeholder="Enter amount to be paid"></AppInput> USD
            </label>
            <label class="self-end">
                <AppInput class=" w-3 h-3 " name="currency" type="radio" placeholder="Enter amount to be paid"></AppInput> NGN
            </label>

            
        </div>
        
        
    </header>
    
</template>
