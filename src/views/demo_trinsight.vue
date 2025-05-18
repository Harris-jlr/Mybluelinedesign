<template>

    <pricing />
    <loader v-if="loading" />

</template>

<script>
import loader from '@/components/loader.vue'
import pricing from '@/components/pricing.vue'

export default {
  components: {loader, pricing },

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