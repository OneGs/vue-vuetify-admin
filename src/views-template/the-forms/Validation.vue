<template>
  <div>
    <rule-card-template title="Custom Styles">
      <p>
        For custom form validation, we used the Vuelidate framework which is a
        simple, lightweight model-based
        <span class="text-danger"> VeeValidation </span>for Vuejs. For each
        value you want to validate, you have to create a key inside validations
        options. You can specify when input becomes dirty by using appropriate
        event on your input box. More details on the Documentation.
      </p>

      <v-divider class="my-4" />

      <validation-observer ref="validate">
        <tool-form>
          <tool-grid :row="2" :col="[[3], [6, 3, 0]]">
            <template #0-0>
              <tool-form-item label="First Name">
                <rule-text-field rules="required" v-model="submit.firstname" />
              </tool-form-item>
            </template>
            <template #0-1>
              <tool-form-item label="Last Name">
                <rule-text-field rules="required" v-model="submit.lastname" />
              </tool-form-item>
            </template>
            <template #0-2>
              <tool-form-item label="Username">
                <rule-text-field rules="required" v-model="submit.username" />
              </tool-form-item>
            </template>

            <template #1-0>
              <tool-form-item label="City">
                <rule-text-field
                  rules="required"
                  v-model="submit.city"
                  maxlength="10"
                  counter="10"
                />
              </tool-form-item>
            </template>
            <template #1-1>
              <tool-form-item label="State">
                <rule-text-field
                  maxlength="10"
                  counter="10"
                  rules="required|state"
                  v-model="submit.state"
                />
              </tool-form-item>
            </template>
            <template #1-2>
              <tool-form-item label="Zip">
                <rule-text-field rules="required" v-model="submit.zip" />
              </tool-form-item>
            </template>
          </tool-grid>
        </tool-form>

        <div>
          <rule-btn @click="submitFun">Submit</rule-btn>
          <rule-btn class="ml-2" @click="clearFun">Clear</rule-btn>
        </div>
      </validation-observer>
    </rule-card-template>

    <rule-card-template class="mt-6" title="All Elements Test">
      <tool-auto-render v-model="autoRenderMode" ref="autoRender" />

      <div class="mt-4">
        <rule-btn @click="$refs.autoRender.validate()">Submit</rule-btn>
        <rule-btn class="ml-2" @click="$refs.autoRender.reset()"
          >Clear</rule-btn
        >
      </div>
    </rule-card-template>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Ref } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterAll } from "@cps/the-mixins";
import { ValidationObserver } from "vee-validate";
import { LoopAny } from "@/types/common";
import { AutoRenderMode } from "@cps/tool-form/autoRender";

@Meta({ title: "Validation", order: 80 })
@Component({
  name: "FormValidation",
})
export default class FormValidation extends Mixins(RegisterAll) {
  @Ref() validate!: InstanceType<typeof ValidationObserver>;

  submit: LoopAny = {
    firstname: "",
    lastname: "",
    username: "",
    state: "",
    city: "",
    zip: "",
  };

  autoRenderMode: AutoRenderMode = {
    row: 3,
    col: 3,
    modes: [
      {
        key: "select",
        label: "Select",
        placeholder: "please select a value",
        position: "0-0",
        componentName: "RuleSelect",
        options: [
          { label: "苹果", value: "apple" },
          { label: "香蕉", value: "bananas" },
        ],
        rules: "required",
      },
      {
        key: "checkbox",
        label: "CheckBox",
        position: "0-1",
        componentName: "RuleCheckbox",
        options: [
          { label: "苹果", value: "apple" },
          { label: "香蕉", value: "bananas" },
        ],
        inline: true,
        rules: "required",
      },
      {
        key: "datePicker",
        label: "DatePicker",
        position: "0-2",
        componentName: "RuleDatePicker",
        rules: "required",
      },
      {
        key: "file",
        label: "File",
        position: "1-0",
        componentName: "RuleFile",
        rules: "required",
      },
      {
        key: "radio",
        label: "Radio",
        position: "1-1",
        componentName: "RuleRadio",
        options: [
          { label: "苹果", value: "apple" },
          { label: "香蕉", value: "bananas" },
        ],
        inline: true,
        rules: "required",
      },
      {
        key: "RadioColorsPicker",
        label: "RadioColorsPicker",
        position: "1-2",
        componentName: "RuleRadioColorsPicker",
        rules: "required",
      },
      {
        key: "TimePicker",
        label: "TimePicker",
        position: "2-0",
        componentName: "RuleTimePicker",
        rules: "required",
      },
      {
        key: "Textarea",
        label: "Textarea",
        position: "2-1",
        componentName: "RuleTextarea",
        rules: "required",
      },
    ],
  };

  async submitFun(): Promise<void> {
    if (await this.validate.validate()) {
      console.log("success");
    }
  }

  clearFun(): void {
    this.validate.reset();

    Object.keys(this.submit).forEach((key) => {
      this.submit[key] = "";
    });
  }
}
</script>
