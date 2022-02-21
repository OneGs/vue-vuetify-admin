<template>
  <div
    :class="{ fullscreen: fullscreen }"
    class="tinymce-container"
    :style="{ width: containerWidth }"
  >
    <textarea :id="tinymceId" class="tinymce-textarea" />
  </div>
</template>

<script lang="ts">
import plugins from "./plugins";
import toolbar from "./toolbar";
import load from "./dynamicLoadScript";
import { Editor } from "tinymce";

const tinymceCDN =
  "https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js";

import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "Tinymce",
})
export default class Tinymce extends Vue {
  @Prop({
    type: String,
    default: function () {
      return (
        "vue-tinymce-" + +new Date() + ((Math.random() * 1000).toFixed(0) + "")
      );
    },
  })
  id!: string;

  @Prop({ type: String, default: "" }) value!: string;

  @Prop({ type: Array, default: () => [] }) toolbar!: Array<string>;

  @Prop({ type: String, default: "file edit insert view format table" })
  menubar!: string;

  @Prop({ type: [Number, String], default: 360 }) height!: string | number;

  @Prop({ type: [String], default: "auto" }) width!: string;

  hasChange = false;

  hasInit = false;

  tinymceId = this.id;

  fullscreen = false;

  languageTypeList = {
    en: "en",
    zh: "zh_CN",
    es: "es_MX",
    ja: "ja",
  };

  get containerWidth(): string {
    const width = this.width;

    if (/^[\d]+(\.[\d]+)?$/.test(width)) {
      // matches `100`, `'100'`
      return `${width}px`;
    }
    return width;
  }

  @Watch("value")
  changeValue(val: string): void {
    if (!this.hasChange && this.hasInit) {
      this.$nextTick(() =>
        window.tinymce.get(this.tinymceId).setContent(val || "")
      );
    }
  }

  init(): void {
    // dynamic load tinymce from cdn
    load(tinymceCDN, (err) => {
      if (err) {
        console.log("error", err);
        return;
      }
      this.initTinymce();
    });
  }

  initTinymce(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;

    window.tinymce.init({
      selector: `#${this.tinymceId}`,
      language: this.languageTypeList["en"],
      height: this.height,
      body_class: "panel-body ",
      object_resizing: false,
      toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
      menubar: this.menubar,
      plugins: plugins,
      end_container_on_empty_block: true,
      powerpaste_word_import: "clean",
      code_dialog_height: 450,
      code_dialog_width: 1000,
      advlist_bullet_styles: "square",
      advlist_number_styles: "default",
      imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
      default_link_target: "_blank",
      link_title: false,
      nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
      init_instance_callback: (editor: Editor) => {
        if (_this.value) {
          editor.setContent(_this.value);
        }
        _this.hasInit = true;
        editor.on("NodeChange Change KeyUp SetContent", () => {
          this.hasChange = true;
          this.$emit("input", editor.getContent());
        });
      },
      setup(editor: Editor) {
        editor.on("FullscreenStateChanged", (e) => {
          _this.fullscreen = e.state;
        });
      },
      convert_urls: false,
    });
  }

  destroyTinymce(): void {
    const tinymce = window.tinymce.get(this.tinymceId);

    if (this.fullscreen) {
      tinymce.execCommand("mceFullScreen");
    }

    if (tinymce) {
      tinymce.destroy();
    }
  }

  setContent(value: string): void {
    window.tinymce.get(this.tinymceId).setContent(value);
  }

  getContent(): void {
    window.tinymce.get(this.tinymceId).getContent();
  }

  mounted(): void {
    this.init();
  }

  activated(): void {
    if (window.tinymce) {
      this.initTinymce();
    }
  }

  deactivated(): void {
    this.destroyTinymce();
  }

  destroyed(): void {
    this.destroyTinymce();
  }
}
</script>

<style scoped>
.tinymce-container {
  position: relative;
  line-height: normal;
}
.tinymce-container >>> .mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
.editor-custom-btn-container {
  position: absolute;
  right: 4px;
  top: 4px;
  /*z-index: 2005;*/
}
.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}
.editor-upload-btn {
  display: inline-block;
}
</style>
