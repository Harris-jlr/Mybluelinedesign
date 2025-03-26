<template>

    <HeroBanner />
    <OurMission />
    <BottomBanner />
  
</template>

<script>
import BottomBanner from '../components/BottomBanner.vue';
import HeroBanner from '../components/HeroBanner.vue'
import OurMission from '../components/OurMission.vue';

export default {
  components: { HeroBanner,  OurMission, BottomBanner },
}
</script>

<style>
</style>
