<template>
  <router-link :to="{ name: 'RaidDetailsPage', params: { id: raid.id } }">
    <div class="col-sm-12">
      <div class="raids-component card bg-info mt-5 border border-light">
        <div class="row">
          <div class="col-sm-6">
            <p class="text-light ml-2 mt-1">
              {{ raid.title }}
            </p>
          </div>
          <div class="col-sm-6">
            <p class="text-light">
              {{ raid.map }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Raids',
  props: {
    raid: { type: Object, required: true }
  }
}
</script>

<style>

</style>
