<template>
  <v-row>
    <v-col cols="8" class="mx-auto">
      <v-card>
        <v-card-title>
          <div class="text-h3 text-typo font-weight-semibold">Alerts</div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <v-alert
            type="info"
            :color="item"
            icon="mdi-thumb-up"
            v-for="item in preset"
            :key="item"
          >
            <strong>{{ item }}!</strong> This is a default alert—check it
            out!</v-alert
          >
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "Notifications", order: 30 })
@Component({
  name: "TheNotifications",
})
export default class TheNotifications extends Vue {
  preset = ["default", "primary", "secondary", "info", "success", "warning"];
}
</script>

<style scoped></style>
