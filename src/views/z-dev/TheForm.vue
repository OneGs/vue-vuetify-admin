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
                <tool-form-item label="名">
                  <rule-text-field />
                </tool-form-item>
              </v-col>

              <v-col cols="12" sm="6">
                <tool-form-item label="姓">
                  <rule-text-field />
                </tool-form-item>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6">
                <tool-form-item label="性别">
                  <rule-select :options="sex" />
                </tool-form-item>
              </v-col>

              <v-col cols="12" sm="6">
                <tool-form-item label="是否已婚">
                  <rule-checkbox :options="marry" />
                </tool-form-item>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6">
                <tool-form-item label="分类">
                  <rule-checkbox :options="like" inline />
                </tool-form-item>
              </v-col>

              <v-col cols="12" sm="6">
                <tool-form-item label="是否已婚">
                  <rule-checkbox :options="marry" />
                </tool-form-item>
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
export default class TheForm extends Vue {
  sex = [
    { label: "男", value: 1 },
    { label: "女", value: 0 },
  ];

  marry = [{ label: "是", value: 1 }];

  like = [
    { label: "前端", value: "front" },
    { label: "后端", value: "back" },
    { label: "运维", value: "yunwei" },
    { label: "大数据", value: "bigValue" },
  ];
}
</script>

<style scoped></style>
