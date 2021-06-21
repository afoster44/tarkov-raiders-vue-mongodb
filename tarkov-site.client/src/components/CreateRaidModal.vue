<template>
  <div class="create-vault-modal">
    <i class="fa fa-plus btn btn-danger"
       aria-hidden="true"
       type="button"
       data-toggle="modal"
       data-target="#exampleModal"
    ></i>

    <!-- Modal -->
    <div class="modal fade"
         id="exampleModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Please create your raid.
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createRaid">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Title"
                  name="title"
                  id="title"
                  aria-describedby="title"
                  v-model="state.raid.title"
                />
              </div>
              <div class="row justify-content-center">
                <div class="col-6">
                  <button class="btn btn-danger dropdown-toggle"
                          type="button"
                          id="dropdownMenuButtonMaps"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                  >
                    Maps here
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButtonMaps">
                    <button class="btn dropdown-item" @click="state.raid.map = 'Woods'">
                      Woods
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.map = 'Reserve'">
                      Reserve
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.map = 'Interchange'">
                      Interchange
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.map = 'The Lab'">
                      The Lab
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.map = 'Customs'">
                      Customs
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.map = 'Shoreline'">
                      Shoreline
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.map = 'Factory'">
                      Factory
                    </button>
                  </div>
                </div>
                <div class="col-6">
                  <button class="btn btn-danger dropdown-toggle"
                          type="button"
                          id="dropdownMenuButtonAmmo"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                  >
                    Ammo here
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButtonAmmo">
                    <!-- low caliber rifle rounds -->
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 5.45">
                      5.45x39mm
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 5.56 ">
                      5.56x45mm
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 7.62">
                      7.62x39mm
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = .366">
                      .366 TKM
                    </button>

                    <!-- high caliber rifle rounds
                         we will ad 51 and 54 to the end for 7.62x51 and 7.62x54R snipers -->
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 7.6251">
                      7.62x51mm
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 7.6254">
                      7.62x54mmR
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = .300">
                      .300 Blackout
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = .338">
                      .338 Lapua Magnum
                    </button>

                    <!-- smg rounds -->
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 5.7">
                      5.7x28mm FN
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 4.6">
                      4.6x30mm HK
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = .45">
                      .45 ACP
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 9.18">
                      9x18mm
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 9.19">
                      9x19mm
                    </button>
                    <button class="btn dropdown-item" @click="state.raid.ammoType = 9.21">
                      9x21mm
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="characterType">Pmc or Scav?</label>
                <input
                  type="text"
                  class="form-control m-1"
                  placeholder="characterType"
                  name="characterType"
                  id="characterType"
                  aria-describedby="helpId"
                  v-model="state.raid.characterType"
                >
              </div>

              <button type="submit" class="btn btn-primary">
                Create Raid
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { raidService } from '../services/RaidService'
export default {
  name: 'CreateRaidModal',
  setup(props) {
    const state = reactive({
      raid: {
        title: '',
        map: '',
        ammoType: '',
        characterType: ''
      },
      account: computed(() => AppState.account)
    })
    return {
      state,
      selected: null,
      options: [{ value: 5.56, text: '5.56' }],
      async createRaid() {
        await raidService.createRaid(state.raid)
      }
    }
  }
}
</script>

<style>

</style>
