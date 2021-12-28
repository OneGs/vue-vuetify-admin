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
                <tool-form-item label="是否开启配置">
                  <rule-switch hidden-label />
                </tool-form-item>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6">
                <tool-form-item label="选修课程">
                  <rule-select :options="lessons" multiple />
                </tool-form-item>
              </v-col>

              <v-col cols="12" sm="6">
                <tool-form-item label="上传照片">
                  <rule-file label="请上传不大于4kb的图片" />
                </tool-form-item>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <tool-form-item label="家庭情况描述">
                  <rule-textarea />
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

  lessons = [
    { label: "离散数学", value: "0" },
    { label: "线性代数", value: "1" },
    { label: "软件工程", value: "2" },
    { label: "大学物理", value: "3" },
    { label: "组成原理", value: "4" },
    { label: "算法", value: "6" },
    { label: "c++", value: "7" },
  ];
}
</script>

<style scoped></style>
