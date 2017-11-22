<template>
<div>
  <h1>Example Page</h1>

  <p>before example-tabs component</p>
  <example-tabs activeTab="example-1"/>
  <p>after example-tabs component</p>
</div>
</template>

<script>
import ExampleTabs from '@/components/ExampleTabs'

export default {
  components: {
    ExampleTabs,
  },
}
</script>

<style scoped>
</style>
