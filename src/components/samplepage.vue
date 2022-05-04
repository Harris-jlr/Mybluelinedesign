<template>
  <div class="bg-white">
    <div class="mx-auto py-2 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-2">
      <div class="space-y-8">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-4xl xl:max-w-none">
          <h2 class="text-3xl pt-6 font-bold tracking-tight sm:text-4xl">Pipeline Details</h2>
          <p class="text-xl text-gray-500">Please use the filters and drill down features to gain full insight into your fleet. </p>
        </div>
        <div>
            <div class="flex">
                <div class="flex flex-wrap flex-row w-full h-screen">
                    <div class="flex flex-col w-4/5 px-4 h-128">
                        <PlanetChart /> 
                    </div>
                    <div class="flex flex-col w-1/5 px-4 ">
                        <SideChart /> 
                    </div>
                </div>
            </div>
            <div>
                <ContactCard /> 
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import PlanetChart from '/src/components/PlanetChart.vue'
import SideChart from '/src/components/SideChart.vue'
import ContactCard from '/src/components/contactcard.vue'

export default {
  name: 'App',
  components: {
    PlanetChart, SideChart, ContactCard
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 60%;
  width: 60%;
}
</style>