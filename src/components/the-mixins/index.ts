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
  },
})
class RegisterForm extends Vue {}

// ————————————————————————————————————
//* ——— Grid
// ————————————————————————————————————

import CardTemplate from "@cps/tool-grid/CardTemplate.vue";
import ToolGrid from "@cps/tool-grid/index.vue";

@Component({
  components: {
    RuleCardTemplate: CardTemplate,
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
//* ——— All
// ————————————————————————————————————

@Component({})
class RegisterAll extends Mixins(
  RegisterForm,
  RegisterBtn,
  RegisterHeading,
  RegisterGrid,
  RegisterNotification
) {}

export {
  RegisterBtn,
  RegisterForm,
  RegisterHeading,
  RegisterGrid,
  RegisterNotification,
  RegisterAll,
};
