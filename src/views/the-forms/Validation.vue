<template>
  <rule-card-template title="Custom Styles">
    <p>
      For custom form validation, we used the Vuelidate framework which is a
      simple, lightweight model-based
      <span class="text-danger">VeeValidation</span>for Vuejs. For each value
      you want to validate, you have to create a key inside validations options.
      You can specify when input becomes dirty by using appropriate event on
      your input box. More details on the Documentation.
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
</template>

<script lang="ts">
import { Component, Mixins, Ref } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import {
  RegisterBtn,
  RegisterCard,
  RegisterForm,
  RegisterGrid,
} from "@cps/the-mixins";
import { ValidationObserver } from "vee-validate";
import { LoopAny } from "@/types/common";

@Meta({ title: "Validation", order: 80 })
@Component({
  name: "FormValidation",
})
export default class FormValidation extends Mixins(
  RegisterCard,
  RegisterForm,
  RegisterGrid,
  RegisterBtn
) {
  @Ref() validate!: InstanceType<typeof ValidationObserver>;

  submit: LoopAny = {
    firstname: "",
    lastname: "",
    username: "",
    state: "",
    city: "",
    zip: "",
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

<style scoped></style>
