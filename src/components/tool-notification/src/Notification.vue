<template>
  <v-alert type="info" :color="color" icon="mdi-thumb-up" dismissible>
    <template #close="{ toggle }">
      <v-icon class="font-size-root" style="cursor: pointer" @click="toggle"
        >mdi-close</v-icon
      >
    </template>
    <slot />
  </v-alert>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Notification",
})
export default class Notification extends Vue {
  @Prop({ type: String, default: "default" }) color?: string;
}
</script>

<style scoped></style>
