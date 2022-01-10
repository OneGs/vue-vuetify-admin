import { Component, Mixins, Vue } from "vue-property-decorator";

// ————————————————————————————————————
//* ——— Heading
// ————————————————————————————————————

import RuleTitleH1 from "@cps/rule-title/H1.vue";
import RuleTitleH2 from "@cps/rule-title/H2.vue";
import RuleTitleH3 from "@cps/rule-title/H3.vue";

@Component({
  components: {
    RuleTitleH1,
    RuleTitleH2,
    RuleTitleH3,
  },
})
class RegisterHeading extends Vue {}

// ————————————————————————————————————
//* ——— Buttons
// ————————————————————————————————————

import RuleBtn from "@cps/rule-btn/index.vue";

@Component({
  components: {
    RuleBtn,
  },
})
class RegisterBtn extends Vue {}

// ————————————————————————————————————
//* ——— Forms
// ————————————————————————————————————

import ToolForm from "@cps/tool-form/index.vue";
import ToolFormItem from "@cps/tool-form-item/index.vue";
import RuleFile from "@cps/tool-form-item/File.vue";
import RuleCheckbox from "@cps/tool-form-item/Checkbox.vue";
import RuleSelect from "@cps/tool-form-item/Select.vue";
import RuleSwitch from "@cps/tool-form-item/Switch.vue";
import RuleTextarea from "@cps/tool-form-item/Textarea.vue";
import RuleTextField from "@cps/tool-form-item/TextField.vue";
import RuleDatePicker from "@cps/tool-form-item/DatePicker.vue";
import RuleTimePicker from "@cps/tool-form-item/TimePicker.vue";
import RuleLoading from "@cps/tool-form-item/Loading.vue";
import RuleRadio from "@cps/tool-form-item/Radio.vue";

@Component({
  components: {
    ToolForm,
    ToolFormItem,
    RuleFile,
    RuleCheckbox,
    RuleSelect,
    RuleSwitch,
    RuleTextarea,
    RuleTextField,
    RuleDatePicker,
    RuleTimePicker,
    RuleLoading,
    RuleRadio,
  },
})
class RegisterForm extends Vue {}

// ————————————————————————————————————
//* ——— Grid
// ————————————————————————————————————

import RuleCardExample from "@cps/tool-grid/CardExample.vue";
import ToolGrid from "@cps/tool-grid/index.vue";

@Component({
  components: {
    RuleCardExample,
    ToolGrid,
  },
})
class RegisterGrid extends Vue {}

// ————————————————————————————————————
//* ——— Notification
// ————————————————————————————————————
import RuleNotification from "@cps/tool-notification/src/Notification.vue";

@Component({
  components: { RuleNotification },
})
class RegisterNotification extends Vue {}

// ————————————————————————————————————
//* ——— Table
// ————————————————————————————————————

import ToolPaginatedTable from "@cps/tool-table/PaginatedTable.vue";

@Component({
  components: {
    ToolPaginatedTable,
  },
})
class RegisterTable extends Vue {}

// ————————————————————————————————————
//* ——— Card
// ————————————————————————————————————

import RuleCardTemplate from "@cps/rule-card/CardTemplate.vue";

@Component({
  components: {
    RuleCardTemplate,
  },
})
class RegisterCard extends Vue {}

// ————————————————————————————————————
//* ——— Image information
// ————————————————————————————————————
import BackgroundImage from "@ast/common_images/background.jpg";
import LoadingImage from "@ast/illustrations/questions.svg";

@Component({})
class CommonImage extends Vue {
  backgroundImage = BackgroundImage;

  loadingImage = LoadingImage;
}

// ————————————————————————————————————
//* ——— inheritAttrs
// ————————————————————————————————————

@Component({
  components: {},

  inheritAttrs: false,
})
class NoInheritAttrs extends Vue {}

// ————————————————————————————————————
//* ——— All
// ————————————————————————————————————

@Component({})
class RegisterAll extends Mixins(
  RegisterForm,
  RegisterBtn,
  RegisterHeading,
  RegisterGrid,
  RegisterTable,
  RegisterCard,
  CommonImage,
  RegisterNotification
) {}

export {
  RegisterBtn,
  RegisterForm,
  RegisterHeading,
  RegisterGrid,
  CommonImage,
  RegisterNotification,
  RegisterTable,
  RegisterCard,
  RegisterAll,
  NoInheritAttrs,
};
