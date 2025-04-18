<template>
  <div class="px-12">
    <StepperNav :steps="steps" :activeStep="activeStep" @stepChange="setStep">
      <div class="space-y-6">
        <div class="flex justify-center space-x-4 mb-4">
          <button
            v-for="option in ['client', 'partner', 'developer']"
            :key="option"
            @click="audience = option"
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium border',
              audience === option ? 'bg-blue-600 text-white border-blue-600' : 'text-gray-700 bg-white hover:bg-gray-100'
            ]"
          >
            {{ option.charAt(0).toUpperCase() + option.slice(1) }}
          </button>
        </div>
  
        <div class="rounded-lg border shadow-sm overflow-hidden">
          <img
            :src="stepImages[activeStep] || ''"
            :alt="`Step ${activeStep + 1} visual for ${audience}`"
            class="w-full h-64 object-cover rounded mb-6"
          />
          <div class="p-6">
            <!-- Step content -->
  
            <div v-if="activeStep === 1">
              <h2 class="text-2xl font-bold mb-4">The Traditional Model</h2>
              <p v-if="audience === 'investor'">
                Firms cycle through contractors and rehire constantly. Benched developers are a sunk cost, contributing nothing while payroll continues. Knowledge is lost at the end of each project, causing delivery delays, re-training, and burned margins.
              </p>
              <p v-else-if="audience === 'client'">
                Traditional firms end every project with a handoff. Your new team doesn’t know the old decisions, shortcuts, or priorities. They ramp up slowly—at your expense—and miss what matters.
              </p>
              <p v-else>
                You roll off a project, lose context, and then get dropped into something new with no time to prep. The work you did doesn’t carry forward—and neither does your career growth.
              </p>
            </div>
  
            <div v-if="activeStep === 2">
              <h2 class="text-2xl font-bold mb-4">Enter Bluehaven</h2>
              <p v-if="audience === 'investor'">
                Bluehaven is our answer to the resourcing problem. It’s a platform built by Blueline Design to ensure developers are always contributing, and that no value is lost between projects. Used daily by our team, it turns idle time into forward motion.
              </p>
              <p v-else-if="audience === 'client'">
                Bluehaven was built by Blueline developers to solve the biggest challenge in delivery: continuity. It captures project knowledge, tracks contributors, and ensures that work keeps flowing—even when teams shift.
              </p>
              <p v-else>
                Bluehaven is how we stay connected, productive, and growing. Built by our own team, it ensures that when a project ends, we don’t go dark—we pick up what’s next and stay sharp.
              </p>
            </div>
  
            <div v-if="activeStep === 3">
              <h2 class="text-2xl font-bold mb-4">What We Do Differently</h2>
              <ul class="list-disc list-inside space-y-1">
                <li v-if="audience === 'investor'">No bench. Developers flow directly into new work.</li>
                <li v-if="audience === 'investor'">Internal time is structured and valuable.</li>
                <li v-if="audience === 'investor'">Shared backlog prevents churn and burn.</li>
  
                <li v-else-if="audience === 'client'">You get continuity. Contributors move forward with your product, not away from it.</li>
                <li v-else-if="audience === 'client'">Internal tasks are tracked, visible, and prioritized by need.</li>
                <li v-else-if="audience === 'client'">We document, we transition smoothly, and we don’t make you start over.</li>
  
                <li v-else>You're never waiting for assignments—we always have meaningful work ready.</li>
                <li v-else>You contribute to internal improvements, help others, and grow.</li>
                <li v-else>You’re not just a resource—you’re part of the collective.</li>
              </ul>
            </div>
  
            <div v-if="activeStep === 4">
              <h2 class="text-2xl font-bold mb-4">Why This Matters To You</h2>
              <p v-if="audience === 'investor'">
                Fewer turnover events, reduced bench costs, higher utilization, and scalable retention. Bluehaven protects your investment in people and multiplies long-term return.
              </p>
              <p v-else-if="audience === 'client'">
                You stop restarting. You keep your momentum. And you keep the people who know your product—not a rotating door of replacements.
              </p>
              <p v-else>
                You don’t just survive between projects—you grow. Bluehaven gives you clarity, community, and constant access to meaningful work.
              </p>
            </div>
  
            <div v-if="activeStep === 5">
              <h2 class="text-2xl font-bold mb-4">Real Results, Real Continuity</h2>
              <p v-if="audience === 'investor'">
                Continuity = Compounding ROI. The longer a team works together, the more efficient it becomes—and Bluehaven keeps contributors engaged and in motion. This consistency reduces ramp-up, avoids turnover loss, and protects long-term delivery velocity.
              </p>
              <p v-else-if="audience === 'client'">
                We don’t disappear. When projects shift, your team doesn’t get reassigned to something else and vanish. Bluehaven preserves your project’s contributors, enabling smoother iteration and long-term trust.
              </p>
              <p v-else>
                Instead of waiting for what’s next, you get to keep building. You support new projects, share wins, grow your skills, and continue to get paid. No stalling. No falling behind.
              </p>
            </div>
  
            <div v-if="activeStep === 6">
              <h2 class="text-2xl font-bold mb-4">See It In Action</h2>
              <p v-if="audience === 'investor'">
                Let’s walk through the model. You’ll see what developers see, how work is queued, tracked, and completed, and how cost gets optimized through shared effort and minimized bench time. Want a deeper dive? We’re ready.
              </p>
              <p v-else-if="audience === 'client'">
                Want to see how Bluehaven prevents churn, keeps budgets on track, and delivers consistent value? Let’s walk you through the system in action—live or on video.
              </p>
              <p v-else>
                Curious how it works? We’ll show you. See what work is waiting, how we keep track of progress, and how developers stay connected, useful, and respected every step of the way.
              </p>
            </div>
            <div v-if="activeStep === 0">
              <h2 class="text-2xl font-bold mb-4">The Problem</h2>
              <p v-if="audience === 'investor'">
                Traditional IT resourcing burns money. Developers are hired for a project, then hit the bench. They sit idle, waiting for the next assignment—costing the company thousands while producing nothing. Projects stall, teams turn over, and investors feel the churn.
              </p>
              <p v-else-if="audience === 'client'">
                When a project ends, most firms drop the team and start over. The people who knew your product? Gone. Handoffs multiply, delays increase, and trust breaks. Work gets lost in the shuffle.
              </p>
              <p v-else>
                You finish a project strong—and get benched. Suddenly, you're idle, disconnected, and unsure of what's next. That shouldn't be your reward for doing great work. Momentum dies, and growth stalls.
              </p>
            </div>
            <!-- Additional step blocks continue as already implemented -->
          </div>
        </div>
      </div>
    </StepperNav>
</div>
  </template>
  
  <script>
  import StepperNav from '../components/StepperNav.vue'
  
  // Import all needed images
  import step1 from '../assets/steps/step-1.png'
  import step2 from '../assets/steps/step-2.png'
  import step3 from '../assets/steps/step-3.png'
  import step4 from '../assets/steps/step-4.png'
  import step5 from '../assets/steps/step-5.png'
  import step6 from '../assets/steps/step-6.png'
  import step7 from '../assets/steps/step-7.png'
  
  const stepImages = [step1, step2, step3, step4, step5, step6, step7]
  
  export default {
    components: {
      StepperNav
    },
    data() {
      return {
        audience: this.$route.params.audience || 'client',
        activeStep: 0,
        stepImages,
        steps: [
          { title: "What's the Problem?" },
          { title: "What's the Old Model?" },
          { title: "What's Bluehaven?" },
          { title: "What's the Difference?" },
          { title: "What's the Matter?" },
          { title: "What's the Result?" },
          { title: 'See It In Action' }
        ]
      }
    },
    methods: {
      setStep(index) {
        this.activeStep = index
      }
    }
  }
  </script>
    