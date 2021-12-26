<template>
  <div>
    <h1>内容溢出</h1>
    <p v-for="index in 30" :key="index" style="text-align: center">
      this is the {{ index }} of overflow
    </p>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "TheOverflow",
})
export default class TheOverflow extends Vue {}
</script>

<style scoped></style>
