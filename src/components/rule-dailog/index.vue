<template>
  <v-dialog
    v-model="visible"
    width="500px"
    ref="dialog"
    :persistent="persistent"
  >
    <template #activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <slot />
      </div>
    </template>

    <rule-card-template>
      <template #title>
        <div class="d-flex justify-space-between w-full">
          <rule-title-h3> {{ title }} </rule-title-h3>

          <rule-btn icon :dynamic="false" x-small color="" @click="close">
            <v-icon>mdi-close</v-icon>
          </rule-btn>
        </div>
      </template>

      <slot name="text" />

      <slot name="btn" v-bind:close="close" v-bind:save="save">
        <div class="d-flex align-center justify-space-between">
          <rule-btn
            @click.prevent="save"
            small
            :loading="syncedLoading"
            class="font-weight-600 text-capitalize"
            >保存</rule-btn
          >
          <rule-btn
            plain
            small
            :dynamic="false"
            color=""
            @click="close"
            class="text-capitalize"
            >取消</rule-btn
          >
        </div>
      </slot>
    </rule-card-template>
  </v-dialog>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Emit,
  Prop,
  PropSync,
  Watch,
} from "vue-property-decorator";
import RuleBtn from "@cps/rule-btn/index.vue";
import RuleCardTemplate from "@cps/rule-card/CardTemplate.vue";
import RuleTitleH3 from "@cps/rule-title/H3.vue";
import { findChildrenByName } from "@uts/tools";
import AutoRender from "@cps/tool-form/AutoRender.vue";

@Component({
  name: "RuleDialog",
  components: { RuleTitleH3, RuleCardTemplate, RuleBtn },
})
export default class RuleDialog extends Vue {
  visible = false;

  autoRender?: AutoRender;

  @Prop({ type: String, default: "Title" }) title!: string;

  @Prop({ type: Boolean, default: false }) persistent!: boolean;

  @PropSync("loading", { type: Boolean, default: false })
  syncedLoading!: boolean;

  @Watch("visible")
  clearInformation(): void {
    if (!this.visible) return;

    this.openBefore();

    this.$nextTick().then(() => {
      !this.autoRender &&
        (this.autoRender = findChildrenByName(
          this,
          "ToolAutoRender"
        ) as AutoRender);

      this.openAfter();

      this.autoRender?.autoRender.reset();
    });
  }

  @Emit()
  openBefore(): void {
    //
  }

  @Emit()
  openAfter(): void {
    //
  }

  @Emit()
  close(): void {
    this.visible = false;
  }

  @Emit()
  save(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(this.autoRender?.validate() || false);
    });
  }
}
</script>
