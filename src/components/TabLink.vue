<template>
  <button
    role="tab"
    :class="{active: active}"
    :aria-selected="active.toString()"
    v-on:click="onClick"
    :id="htmlId"
  >
    {{label}}
  </button>
</template>

<script>
import router from '@/router'

export default {
  methods: {
    onClick: function () {
      router.push(this.linkTo)
    },
  },
  name: 'tablink',
  props: ['active', 'htmlId', 'label', 'linkTo'],
}
</script>

<style scoped>
button {
  background-color: white;
  border-radius: 5px;
  color: orange;
  padding: 1em;
  font-weight: bold;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-width: 15rem;
}

button.active {
  border-radius: 5px;
  border-width: 0.8px;
  border-style: solid;
  border-color: black;
  background-color: white;
  color: black;
}
</style>
