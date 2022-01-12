<template>
  <div class="login d-flex flex-column h-full">
    <div class="bg-gradient-primary position-relative">
      <v-container class="text-white d-flex align-center py-10">
        <div style="width: 50px">
          <v-img src="@/assets/logo.png" width="32px" height="32px" contain />
        </div>

        <div>
          <rule-btn
            text
            v-for="(menu, index) in menus"
            :key="menu.text + index"
            color="#fff"
            class="ml-n3 font-weight-light font-size-root"
            @click="!!menu.to.name && $router.push(menu.to)"
          >
            {{ menu.text }}
          </rule-btn>
        </div>

        <div class="flex-grow-1" />
      </v-container>

      <v-container class="text-white text-center py-4">
        <rule-title-h1 dark class="mb-4">Welcome!</rule-title-h1>
        <p class="font-weight-thin text-center mx-auto" style="width: 500px">
          Use these awesome forms to login or create new account in your project
          for free.
        </p>
      </v-container>

      <svg
        x="0"
        y="0"
        viewBox="0 0 2560 100"
        preserveAspectRatio="none"
        fill="rgb(23, 43, 77)"
        class="default-de position-absolute"
      >
        <polygon points="2560 0 2560 100 0 100" class="fill-default" />
      </svg>
    </div>

    <div class="default flex-grow-1 mt-n16">
      <v-row class="d-flex justify-center">
        <v-col class="mx-auto" cols="12" md="4">
          <rule-card-template class="bg-gradient-secondary">
            <template #text-outer>
              <div class="text-center py-12">
                <p class="text-muted font-size-small">sign in with</p>

                <rule-btn class="mr-4" color="#fff">
                  <v-icon left>mdi-github</v-icon>
                  <span class="text-primary">github</span>
                </rule-btn>

                <rule-btn color="#fff">
                  <v-icon left>mdi-google</v-icon>
                  <span class="text-primary">github</span>
                </rule-btn>
              </div>

              <v-divider />
            </template>

            <div class="px-6 py-3 d-flex justify-center flex-column">
              <p class="text-muted font-size-small text-center mb-8">
                Or sign in with credentials {{ agree }}
              </p>

              <validation-observer ref="loginObserver">
                <tool-form single>
                  <tool-form-item label="Name">
                    <rule-text-field
                      v-model="loginInfo.name"
                      type="password"
                      rules="required"
                      prepend-inner-icon="mdi-school"
                    />
                  </tool-form-item>
                  <tool-form-item label="Email">
                    <rule-text-field
                      v-model="loginInfo.email"
                      prepend-inner-icon="mdi-email"
                      rules="required|email"
                    />
                  </tool-form-item>
                  <tool-form-item label="Password">
                    <rule-text-field
                      v-model="loginInfo.password"
                      type="password"
                      rules="required"
                      prepend-inner-icon="mdi-key-outline"
                    />
                  </tool-form-item>
                </tool-form>
              </validation-observer>

              <rule-checkbox
                dense
                :options="[
                  { label: 'I agree with the privacy policy', value: true },
                ]"
                v-model="agree"
              />

              <rule-btn @click="register">login</rule-btn>
            </div>
          </rule-card-template>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Ref } from "vue-property-decorator";
import {
  RegisterBtn,
  RegisterCard,
  RegisterForm,
  RegisterHeading,
} from "@cps/the-mixins";
import { ValidationObserver } from "vee-validate";

@Component({
  name: "DemoRegister",
})
export default class DemoRegister extends Mixins(
  RegisterHeading,
  RegisterBtn,
  RegisterCard,
  RegisterForm
) {
  @Ref() loginObserver!: InstanceType<typeof ValidationObserver>;

  menus = [
    { text: "Preset", to: { name: "ThemeColor" } },
    { text: "Register", to: { name: "" } },
    { text: "Lock", to: { name: "" } },
  ];

  agree: string | boolean = false;

  loginInfo = {
    email: "",
    password: "",
    name: "",
  };

  async register(): Promise<void> {
    if (!(await this.loginObserver.validate())) return;
  }
}
</script>

<style scoped lang="scss">
.login {
  & > div:first-child {
    min-height: 400px;

    .default-de {
      height: 70px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
