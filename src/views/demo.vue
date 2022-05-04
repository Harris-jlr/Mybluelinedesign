<template>

    <HelloWorld />

</template>

<script>
import HelloWorld from '/src/components/amchart.vue'

export default {
  components: {HelloWorld },

  name: "app",
        data: () => ({
            loading: true
        }),
        mounted() {
            setTimeout(() => {
                this.loading = false
            }, 4800)
        }
}
</script>