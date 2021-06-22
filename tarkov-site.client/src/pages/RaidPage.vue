<template>
  <div class="container-fluid raids-page">
    <div class="row">
      <h1>
        Welcome to the Raids page, here you will find all of your raids that you have logged. If you have not created a raid yet please create one below.
      </h1>
    </div>
    <div class="row">
      <div class="col-12">
        <CreateRaidModal />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RaidPage'
}
</script>

<style>

</style>
