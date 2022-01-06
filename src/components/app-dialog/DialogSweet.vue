<template>
  <transition enter-active-class="animate__animated  animate__pulse">
    <v-dialog v-model="visible" width="500px" ref="dialog">
      <template #activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on" style="display: inline-block">
          <slot />
        </div>
      </template>

      <v-card>
        <v-card-text class="card-padding text-center">
          <div class="text-h1 text-typo mb-2">{{ title }}</div>
          <div class="text-body font-size-root font-weight-light mb-5">
            <slot name="text"> {{ text }} </slot>
          </div>
          <rule-btn @click="close" class="font-weight-600" small>ok</rule-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "DialogSweet",
})
export default class DialogSweet extends Vue {
  visible = false;

  title = "title";

  @Prop({ type: String, default: "A few words about this sweet alert ..." })
  text?: string;

  close(): void {
    this.visible = false;
  }

  save(): void {
    console.log("save");
  }
}
</script>

<style scoped></style>
