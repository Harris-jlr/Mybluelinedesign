<template>
  <div class="flex flex-col min-h-screen">
    <myheader />

    <!-- Main content expands to push footer down -->
    <main class="flex-grow w-full mx-auto">
      <router-view />
    </main>

    <myfooter />
  </div>
</template>

<script>
import myheader from '/src/components/myheader.vue'
import myfooter from '/src/components/myfooter.vue'

export default {
  components: { myheader, myfooter },
}
</script>
