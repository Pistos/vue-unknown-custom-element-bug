<template>
  <div role="tablist">
    <tab-link
      label="Home"
      :linkTo="{name: 'Home'}"
      htmlId="tab-home"
      :active="$route.name === 'HelloWorld'"
    />
    <tab-link
      label="Example Tab"
      :linkTo="{name: 'Example'}"
      htmlId="tab-example"
      :active="$route.name === 'Example'"
    />
  </div>
</template>

<script>
import TabLink from './TabLink'

export default {
  components: {
    'tab-link': TabLink,
  },
}
</script>

<style scoped>
div[role="tablist"] {
  margin-bottom: 1em;
  display: flex;
}
</style>
