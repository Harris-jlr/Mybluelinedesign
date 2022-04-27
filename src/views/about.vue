// About.vue
<template>
        <aboutus />
        <stackedchart />
</template>


<script>
import aboutus from '/src/components/aboutus.vue'
import stackedchart from '/src/components/stackedbar.vue'
export default {
  components: { aboutus, stackedchart },
}
</script>