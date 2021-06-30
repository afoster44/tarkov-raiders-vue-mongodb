<template>
  <div class="container-fluid raid-details">
    <div class="row" v-if="state.raid.map === 'Woods'">
      <div class="col-sm-12 raidMapWoods">
      </div>
    </div>
    <div class="row" v-else-if="state.raid.map === 'Customs'">
      <div class="col-sm-12 raidMapCustoms">
      </div>
    </div>
    <h1>
      {{ state.raid.title }}
    </h1>
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
