<template>
  <div class="raids col-12">
    <p>{{ raid.title }}</p>
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
