<script setup>
import ArrowDownAnimation from '@/components/animation/ArrowDownAnimation.vue';
import CodeInput from '@/components/CodeInput.vue';
import { ref } from 'vue';
import CashCurrency from '@/components/CashCurrency.vue';
import CryptoCurrency from '@/components/CryptoCurrency.vue';

import AppInput from '@/components/elements/AppInput.vue';

let banks = ref([
    {
        name: 'Access Bank',
        value: 'access_bank'
    },
    {
        name: 'Zenith Bank',
        value: 'zenith_bank'
    },
    {
        name: 'First Bank',
        value: 'first_bank'
    },
    {
        name: 'UBA Bank',
        value: 'uba_bank'
    }
])
</script>

<template>
    <header class="flex w-3/4 flex-col text-center space-y-6 items-center justify-center">
        <h1 class="text-2xl">
            Enter your banking information in case of a refund/dispute or withdrawal
            
        </h1>
        <small>Ensure your name is correct as you may need to provide an ID when necessary</small>


        <form class="flex flex-col justify-between ">
            <div class="flex">
                <AppInput placeholder="Full name" class="mx-3"></AppInput> 
                <AppInput type="number"  placeholder="Phone number" class="mx-3"></AppInput>
            </div>
            <CryptoCurrency class="flex"></CryptoCurrency>
            <CashCurrency class="flex" :banks="banks"></CashCurrency>
            
        </form>
        
        
    </header>
    
</template>
