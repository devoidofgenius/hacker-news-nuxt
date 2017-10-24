<template>
  <div>
    <items />
  </div>
</template>

<script>
import Items from '~/components/Items'

export default {
  components: {
    Items
  },
  async fetch ({ store }) {
    await store.dispatch('LOAD_ITEMS', 'newstories.json')
  }
}
</script>

<style lang="scss">
@import '../assets/scss/partials/variables';

</style>