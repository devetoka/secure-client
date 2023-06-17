
<script setup>
    import { ref } from "vue";

    let buyer = ref(false);
    let seller = ref(false);

    let fiat = ref(false);
    let btc = ref(false);

    let isChecked = ref(false);


    function checked (e, person) {
        if (e.currentTarget.checked ) {
            this.isChecked = true;
            if (person == 'buyer') {this.buyer = true; this.seller = false }
            else if (person == 'seller')  {this.seller = true; this.buyer = false}
            else if (person === 'fiat') {this.fiat = true; this.btc = false;}
            else if (person === 'btc') {this.btc = true; this.fiat = false;}
        } 
        
    }

    function currencyInfo () {
        return this.buyer ? 'sending' : 'receiving';
    }

    function currency () {
        let currency = '';
        if (this.fiat) {
            currency = 'Fiat Currency';
        }

        if (this.btc) {
            currency = 'CryptoCurrency'
        }
       return currency; 
    }
</script>

<template>
    <header class="flex w-3/4 flex-col text-center space-y-6 items-center justify-center">
        <h1 class="text-2xl">
            Are you sending payments or receiving payments?
        </h1>
        <div class="flex w-full justify-evenly">

            <label for="stepThreeCheckBox1">
                <input class="invisible" name="person" @input="checked($event, 'buyer')"  id="stepThreeCheckBox1" type="radio">
                <img  :class="{'border-secure-primary' : buyer }" class="w-32 border-4 p-4 h-auto cursor-pointer hover:border-secure-primary" src="@/assets/images/buyer.png" alt=""> 
            </label>
            <label for="stepThreeCheckBox2">
                <input class="invisible" name="person"  @input="checked($event, 'seller')"  id="stepThreeCheckBox2" type="radio">
                <img  :class="{'border-secure-primary' : seller }" class="w-32 border-4 p-4 h-auto cursor-pointer hover:border-secure-primary" src="@/assets/images/seller.png" alt=""> 
            </label>
        </div>
        
        <div v-show="isChecked" class="w-full fade !mt-20">
            <h1 class="text-2xl">
            In what currency would you be  <strong><i> {{ currencyInfo() }} </i></strong>? 
            </h1>
            <div class="flex w-full justify-evenly">

                <label for="stepThreeCheckBox3">
                    <input class="invisible" name="currency" @input="checked($event, 'fiat')"  id="stepThreeCheckBox3" type="radio">
                    <img  :class="{'border-secure-primary' : fiat }" class="w-32 border-4 p-4 h-auto cursor-pointer hover:border-secure-primary" src="@/assets/images/money.png" alt=""> 
                </label>
                <label for="stepThreeCheckBox4">
                    <input class="invisible" name="currency"  @input="checked($event, 'btc')"  id="stepThreeCheckBox4" type="radio">
                    <img  :class="{'border-secure-primary' : btc }" class="w-32 border-4 p-4 h-auto cursor-pointer hover:border-secure-primary" src="@/assets/images/bitcoin.png" alt=""> 
                </label>


                
            </div>

            <h1 class="text-2xl">
                <strong><i> {{ currency() }} </i></strong>
            </h1>

            
        </div>
        
        
        <ArrowDownAnimation></ArrowDownAnimation>
    </header>

    
</template>
