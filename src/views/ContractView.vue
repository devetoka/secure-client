<script setup>

import StepOne from '@/components/contract/StepOne.vue';
import { ref } from 'vue';
import StepTwo from '../components/contract/StepTwo.vue';
import StepThree from '../components/contract/StepThree.vue';
import StepFour from '../components/contract/StepFour.vue';
import StepFive from '../components/contract/StepFive.vue';
import StepSix from '../components/contract/StepSix.vue';


let active = ref(1);

let submitted = ref(false);

let conditions = ref('');

function submit(direction) {
    if (direction === '+'){
        // if submitted is click, perform necessary actions
        active.value++;

    }
    else{ 
        active.value--;
    }
}

function buttonAction() {
    return this.active == 5  ? 'Submit' : 'Continue';
}
</script>

<template>
  <div class="bg-green-50 flex items-center justify-center h-screen flex-col ">
    <div class="flex flex-col md:w-1/2 sm:w-full space-y-10 md:space-y-24  px-10">
        <StepOne :submitted="submitted" class="steps w-full fade" v-if="active == 1" ></StepOne>
        
        <StepTwo class="steps w-full fade" v-if="active == 2" ></StepTwo>

        <StepThree class="steps w-full fade" v-if="active == 3"></StepThree>
        <StepFour  class="steps w-full fade" v-if="active == 4"></StepFour>
        <StepFive :conditions="conditions" class="steps w-full fade" v-if="active == 5"></StepFive>
        <StepSix  class="steps w-full fade" v-if="active == 6"></StepSix>
        <div v-if="active !== 6" class="flex w-full justify-between">
            <button  @click="submit('-')" 
                :class="{'invisible' : active === 1, 'test-class': true}"
                class=" 
                text-white font-bold self-start border-solid border-2 border-secure-secondary bg-secure-secondary p-1 px-10 rounded-2xl hover:bg-white hover:text-secure-secondary
                ">
                Back 
            </button>
            <button @click="submit('+')" class=" text-white font-bold  border-solid border-2 border-secure-primary bg-secure-primary p-1 px-10 rounded-2xl hover:bg-white hover:text-secure-primary">
               {{ buttonAction() }} 
            </button>
        </div>
        
    </div>
    
</div>
</template>

<style scoped>
    .steps {
        transform: 3s;
    }
</style>



