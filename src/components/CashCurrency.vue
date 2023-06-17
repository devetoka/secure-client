
<script setup>
    import AppSelect from './elements/AppSelect.vue';
    import AppInput from './elements/AppInput.vue';

    defineProps({
    banks: {
        type: Array,
        default: []
    },
    selected: {
        type: String,
        default: ''
    }
    })
</script>

<template>
    <div >
        <AppSelect :selected="selected" :options=banks  class="mx-3"></AppSelect>
        <AppInput type="number" placeholder="Account Number" class="mx-3"></AppInput>
    </div>
</template>
