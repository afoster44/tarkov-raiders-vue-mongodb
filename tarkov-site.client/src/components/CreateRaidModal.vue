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
      <!-- title: { type: String, required: true },
    map: { type: String, required: true },
    characterType: { type: String, required: true },
    ammoType: { type: String, required: true },
    extracted: { type: Boolean, default: false, required: true },
    creatorId: { type: String, ref: 'Account', required: true } -->

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
                />
              </div>
              <div class="row justify-content-center">
                <div class="col-6">
                  <button class="btn btn-danger dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                  >
                    Maps here
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <RaidDropdownMapComponent />
                  </div>
                </div>
                <div class="col-6">
                  <button class="btn btn-danger dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                  >
                    Ammo here
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <RaidDropdownAmmoComponent />
                  </div>
                </div>
              </div>
              <div class="row mt-2 mb-2">
                <div class="col-12">
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
export default {
  name: 'CreateRaidModal'
}
</script>

<style>

</style>
