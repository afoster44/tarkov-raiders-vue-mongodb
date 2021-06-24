<template>
  <div class="container-fluid raid-details">
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'RaidDetailsPage',
  setup() {
    const state = reactive({
      raid: computed(() => AppState.raid)
    })
    return { state }
  }
}
</script>

<style>

</style>
