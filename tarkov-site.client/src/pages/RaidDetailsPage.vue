<template>
  <div class="container-fluid raid-details">
    <p>raid details page</p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { raidService } from '../services/RaidService'
export default {
  name: 'RaidDetailsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      raid: computed(() => AppState.raid)
    })
    onMounted(() => {
      raidService.getRaid(route.params.id)
    })
    return { state, route }
  }
}
</script>

<style>

</style>
