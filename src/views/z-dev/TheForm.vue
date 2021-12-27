<template>
  <div class="no-inherit-background">
    <v-card>
      <v-card-title><rule-h1>基础表单</rule-h1></v-card-title>

      <v-divider />

      <div class="pa-4">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <tool-form-item label="姓名">
                  <rule-text-field />
                </tool-form-item>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Last Name" solo-inverted />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({ title: "表单 & 验证" })
@Component({
  name: "TheForm",
})
export default class TheForm extends Vue {}
</script>

<style scoped></style>
