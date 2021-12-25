<template>
  <transition name="el-notification-fade">
    <v-alert
      v-show="visible"
      :type="type"
      :style="positionStyle"
      class="tool-alert"
      @mouseenter="clearTimer()"
      @mouseleave="startTimer()"
      @click="click"
      >{{ message }}
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

  title = "";

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
  right: 1rem;
  z-index: 1000;
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;
}

.fade-right-enter {
  right: 0;
  opacity: 0;
  transform: translateX(100%);
}

.fade-right-enter-active {
  transition: all 1s ease;
}

.el-notification-fade-enter {
  right: 0;
  transform: translateX(100%);
}

.el-notification-fade-leave-active {
  opacity: 0;
}
</style>
