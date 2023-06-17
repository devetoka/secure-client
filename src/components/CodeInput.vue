<script setup>

    import AppInput from "@/components/elements/AppInput.vue";
import { ref } from "vue";
    
    let focused = ref(1);
    let securityCode = ref([0,0,0,0,0]);

    defineProps({
        fields: {
            type: Number,
            default: 1
        },
  
    });

    const changeFocus = function(e, n) {

        // set previous, current and next elements
        let current = e.currentTarget;
        let next = e.currentTarget.nextElementSibling;
        let previous = e.currentTarget.previousElementSibling;

        // return if enter is pressed
       if (e.keyCode === 13) {
            return;
       }
       // if backspace key is pressed
        else if (e.keyCode === 8 ) {
            if (previous) {
                this.securityCode[n - 1] = 0;
                current.value = '';
                previous.focus();
            }
            this.securityCode[n - 1] = 0;
            return;
        }
        
        // move focus to next input
        else if (next) {
            // if the input value is more than 1. i.e if it was copied or typed really fast
            const digits = current.value.length;
            let value = current.value;
            
            if (digits > 1) {
                
                for (let i = 0; i < digits; i++) {
                    current.value = value[i]; // sets the current element to the first value
                    this.securityCode[i] = current.value;
                    console.log(current.value);
                    if (value[i + 1]) {
                        next.value = value[i + 1]; // sets the next value in the next input
                        current = next; // the next input becomes the current input
                        next = next.nextElementSibling; // the next input after the original next becomes the new next
                        if (next){
                            next.focus(); // focus on the new next
                        }   
                    
                    }
   
                }
               return; 
            }

            // End of case where the code is copied and pasted

            
            // Go to the next input if only one digit is enteres
            next.focus(); 
            next.value = '';
            
        } 
        
        current.value = current.value.substring(0,1);
        this.securityCode[n - 1] = current.value;

    }
</script>

<template>
    <div class="w-full flex justify-center">
        <AppInput 
            @keyup='changeFocus($event, n)'
            class="mx-1"
            type="number"
            v-for="n in parseInt(fields)" :key="n"
        >
            
        </AppInput>
    </div>
  
</template>

