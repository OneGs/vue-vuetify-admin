<template>
  <validation-provider
    :name="_label"
    :rules="rules"
    #default="{ validate, errors }"
  >
    <div class="select-icon d-flex align-center flex-wrap">
      <div
        class="select-icon__item mt-2 mr-2"
        :class="[
          {
            'border-color-red': !!errors[0],
            'border-color-blue': modeValue === item.icon,
          },
        ]"
        v-for="(item, index) in options"
        :key="index"
        @click="selectIcon(item.icon, validate)"
      >
        <tool-icon-svg
          :icon-class="item.icon"
          small
          class="select-icon__icon"
          :style="[
            { background: item.color, fill: item.fill || defaultFillColor },
          ]"
        />
      </div>
    </div>
  </validation-provider>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import Input from "@cps/tool-form-item/mixins/input";
import ToolIconSvg from "@cps/tool-icon-svg/index.vue";

@Component({
  name: "RuleRadioColorsPicker",
  components: { ToolIconSvg },
})
export default class RuleRadioColorsPicker extends Mixins(Input) {
  @Prop({ type: Array, default: () => [{ icon: "ios", color: "#20a0ff" }] })
  options!: Array<{
    icon: string;
    color: string;
    fill?: string;
  }>;

  @Prop({ type: String, default: "white" }) defaultFillColor!: string;

  selectIcon(icon: string, validate: () => boolean): void {
    this.modeValue = icon;

    validate();
  }
}
</script>

<style scoped lang="scss">
.select-icon {
  margin-bottom: 22px;

  .border-color-blue {
    border-color: #4e8afa;
  }

  .border-color-red {
    border-color: #f57373;
  }

  &__item {
    cursor: pointer;
    padding: 3px 5px 5px 4px;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  &__icon {
    border-radius: 5px;
  }
}
</style>
