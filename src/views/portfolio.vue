<template>
<div class="flex flex-col">
  <div class="flex flex-col">
  <anotherview />
  <myskills />
  </div>
  <div class="flex flex-col">
    <div class="w-full max-w-6xl mx-auto">
    <myportfolio />
  </div></div>
  </div>
</template>

<script>
import mydocumentation from '/src/components/mydocumentation.vue'
import myportfolio from '/src/components/myportfolio.vue'
import myskills from '/src/components/myskills.vue'
import anotherview from '/src/components/anotherview.vue'

export default {
  components: { mydocumentation, myportfolio, myskills, anotherview },
}
</script>

<style>
</style>
