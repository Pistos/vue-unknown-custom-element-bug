<template>
  <div>
    <h2>ExampleTabs component here</h2>
    <div role="tablist">
      <tab-link
        label="Example 1"
        :linkTo="{name: 'Example'}"
        htmlId="tab-example-1"
        :active="activeTab === 'example-1'"
      />
      <tab-link
        label="Example 2"
        :linkTo="{name: 'Example2'}"
        htmlId="tab-example-2"
        :active="activeTab === 'example-2'"
      />
    </div>
  </div>
</template>

<script>
import TabLink from '@/components/TabLink'

export default {
  components: {
    TabLink,
  },
  props: ['activeTab'],
}
</script>

<style scoped>
div[role="tablist"] {
  margin-bottom: 1em;
  display: flex;
}
</style>
