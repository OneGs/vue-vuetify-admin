<template>
  <div>this is the notifications</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "消息" })
@Component({
  name: "TheNotifications",
})
export default class TheNotifications extends Vue {}
</script>

<style scoped></style>
