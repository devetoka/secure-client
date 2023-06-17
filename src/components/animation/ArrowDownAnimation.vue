<template>
  <p class="point-down">
            <img class="w-8 h-auto" src="@/assets/images/point-down.png" alt="">
    </p>
</template>
<style scoped>
@keyframes point-down {
    0% {
        top: 0;
    }
    50% {
        top: calc(100% - 80%);
    }
    100% {
        top: 0;
    }
}

.point-down {
    position: relative;
    animation: point-down 2s infinite;
}
</style>