<template>
  <div class="container-fluid raids-page">
    <div class="row">
      <div class="col-sm-2 offset-10 raids-intro text-right">
        <h1 class="mr-3">
          Create Raid
        </h1>
        <CreateRaidModal />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-10 offset-2">
        <Raids v-for="raid in state.raids" :key="raid.id" :raid="raid" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { raidService } from '../services/RaidService'
export default {
  name: 'RaidsPage',
  setup() {
    const state = reactive({
      raids: computed(() => AppState.raids)
    })
    onMounted(() => {
      raidService.getRaids()
    })
    return { state }
  }
}
</script>

<style>

</style>
