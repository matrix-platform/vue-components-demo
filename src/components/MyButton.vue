<template>
    <button @click="add" type="button">My Button</button>
    <div>Count: {{ count }}</div>
</template>

<script setup>
    const props = defineProps({
        start: { default: 0, type: Number }
    });

    const count = ref(props.start);

    const add = () => {
        count.value += 1;
    };
</script>
