<template>
  <router-link :to="{ name: 'RaidDetailsPage', params: { id: raid.id } }">
  </router-link>
  <div class="raids-component card bg-info mt-5 border border-light">
    <p class="text-light ml-2 mt-1">
      {{ raid.title }}
    </p>
  </div>
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
