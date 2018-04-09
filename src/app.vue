<template>
<div id="test">{{ text }}</div>
</template>

<script>
export default {
    data() {
        return {
            text: 'Hello Vue'
        }
    }
}
</script>

<style>
#test {
    color:green;
}
</style>