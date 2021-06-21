<template>
  <div class="container-fluid home">
    <div class="row main-view">
      <div class="col-12">
        <h1>
          Welcome to Escape The Grave, here is a place all things Tarkov. Please give any feedback you may have to help better your experience!
        </h1>
        <!-- setup and ready to go for raids component -->
        <p>{{ state.raids }}</p>
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
  name: 'Home',
  setup() {
    const state = reactive({
      raids: computed(() => AppState.raids)
    })
    onMounted(() => {
      raidService.getRaids()
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
</style>
