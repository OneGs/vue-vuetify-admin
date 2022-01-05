<template>
  <transition>
    <v-alert
      v-show="visible"
      :color="type"
      :style="positionStyle"
      icon="mdi-bell"
      class="ma-0 tool-alert"
      close-icon="mdi-close"
      dismissible
      width="600px"
      @mouseenter="clearTimer()"
      @mouseleave="startTimer()"
      @click="click"
      dark
    >
      <div>
        <div
          class="font-size-root font-weight-semibold text-h3 text-capitalize"
        >
          {{ title }}
        </div>
        <div class="mt-1">{{ message }}</div>
      </div>
    </v-alert>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { LoopString } from "@/types/common";

@Component({
  name: "toolAlert",
})
export default class toolAlert extends Vue {
  visible = false;

  title = "Vuetify Snackbar";

  message = "";

  duration = 3000;

  type = "info";

  verticalOffset = 0;

  timer: any | undefined;

  onClose: (() => void) | undefined;

  onClick: (() => void) | undefined;

  closed = false;

  get positionStyle(): LoopString {
    return {
      top: `${this.verticalOffset}px`,
    };
  }

  @Watch("closed")
  alreadyClosed(newClosed: boolean): void {
    if (newClosed) {
      this.visible = false;

      this.$destroy();

      this.$el.parentNode?.removeChild(this.$el);
    }
  }

  click(): void {
    if (typeof this.onClick === "function") {
      this.onClick();
    }
  }

  close(): void {
    this.closed = true;

    if (typeof this.onClose === "function") {
      this.onClose();
    }
  }

  clearTimer(): void {
    clearTimeout(this.timer);
  }

  startTimer(): void {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close();
        }
      }, this.duration);
    }
  }

  mounted(): void {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close();
        }
      }, this.duration);
    }
  }
}
</script>

<style scoped lang="scss">
.tool-alert {
  position: fixed;
  top: 1rem;
  right: 50%;
  transform: translateX(50%);
  z-index: 1000;
}
</style>
