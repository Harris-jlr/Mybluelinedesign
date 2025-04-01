<template>
  <div class="bg-gradient-to-b from-white to-slate-100">
    <HeroBanner />
    <div class="px-12 py-4"><OurMission /></div>
    <div class="px-12 py-6 xl:max-w-7xl xl:py-24 mx-auto"><Opportunities /></div>
  </div>
</template>

<script>
import Opportunities from '../components/Opportunities.vue';
import HeroBanner from '../components/HeroBanner.vue'
import OurMission from '../components/OurMission.vue';

export default {
  components: { HeroBanner,  OurMission, Opportunities },
}
</script>

<style>
</style>
