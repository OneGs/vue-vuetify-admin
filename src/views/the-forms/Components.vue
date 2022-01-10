<template>
  <v-row>
    <v-col>
      <rule-card-template title="Input groups">
        <tool-form single>
          <tool-grid :row="2" :col="2">
            <template #0-0>
              <tool-form-item label="Your name">
                <rule-text-field />
              </tool-form-item>
            </template>
          </tool-grid>
        </tool-form>
      </rule-card-template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterCard, RegisterForm } from "@cps/the-mixins";
import ToolGrid from "@cps/tool-grid/index.vue";

@Meta({ title: "Components", order: 90 })
@Component({
  name: "FormComponents",
  components: { ToolGrid },
})
export default class FormComponents extends Mixins(
  RegisterCard,
  RegisterForm
) {}
</script>

<style scoped></style>
