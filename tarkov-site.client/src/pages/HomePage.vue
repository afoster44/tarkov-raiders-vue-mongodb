<template>
  <div class="container-fluid home">
    <div class="row main-intro">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h1 class="main-text">
          Welcome to Escape The Grave
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-9 offset-1">
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
