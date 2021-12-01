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
    <div class="row" v-else-if="state.raid.map === 'Interchange'">
      <div class="col-sm-12 raidMapInterchange">
      </div>
    </div>
    <div class="row" v-else-if="state.raid.map === 'Reserve'">
      <div class="col-sm-12 raidMapReserve">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <h1>
          {{ state.raid.title }}
        </h1>
        <p>raid details page</p>
      </div>
      <div v-if="state.raid.ammoType === '5.56'" class="col-sm-6 sevenSixTwoAmmo">
        <img src="../assets/img/sevensixtwo.png" alt="">
      </div>
    </div>
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
