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
                  placeholder="Name"
                  name="name"
                  id="name"
                  aria-describedby="helpId"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control m-1"
                  placeholder="Description"
                  name="description"
                  id="description"
                  aria-describedby="helpId"
                >
                <div class="form-check">
                  <input type="checkbox"
                         class="form-check-input"
                         name="isPrivate"
                         id="isPrivate"
                  >
                  <label class="form-check-label">Would you like the to be a private Vault?</label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Create Vault
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
