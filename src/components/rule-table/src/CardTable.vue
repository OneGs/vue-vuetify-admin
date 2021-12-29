<template>
  <v-card class="text-body-1 card-table">
    <v-card-title class="d-flex align-center">
      <rule-h1>{{ title }}</rule-h1>

      <v-text-field
        dense
        solo
        flat
        append-icon="mdi-magnify"
        class="text-search ml-4 text-body-1"
        placeholder="placeholder"
        @click:append="clickQuery"
      />

      <div style="text-align: right" class="flex-grow-1">
        <v-btn icon color="grey" small>
          <v-icon v-text="'mdi-filter-menu-outline'" />
        </v-btn>
        <v-btn icon color="grey" class="ml-3" small>
          <v-icon v-text="'mdi-sort'" />
        </v-btn>
      </div>
    </v-card-title>

    <v-divider />

    <v-data-table class="table pa-4" :headers="headers" :items="desserts2">
      <template #top>
        <div style="text-align: right">
          <v-btn small color="primary">额外操作</v-btn>
        </div>
      </template>

      <template #item.calories="{ item }">
        <v-chip :color="getColor(item.calories)" dark>
          {{ item.calories }}
        </v-chip>
      </template>

      <template v-slot:item.actions="{}">
        <v-icon small class="mr-2" color="primary"> mdi-pencil </v-icon>
        <v-icon small color="primary"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "CardTable",
})
export default class CardTable extends Vue {
  @Prop({ type: String, default: "" }) title?: string;

  @Prop({ type: String, default: "placeholder" }) placeholder?: string;

  desserts2 = [
    {
      name: "Frozen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: "1%",
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: "1%",
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: "7%",
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: "8%",
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: "16%",
    },
    {
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: "0%",
    },
    {
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: "2%",
    },
    {
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: "45%",
    },
    {
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: "22%",
    },
    {
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: "6%",
    },
  ];

  headers = [
    {
      text: "Dessert (100g serving)",
      align: "start",
      sortable: false,
      value: "name",
    },
    { text: "Calories", value: "calories" },
    { text: "Fat (g)", value: "fat" },
    { text: "Carbs (g)", value: "carbs" },
    { text: "Protein (g)", value: "protein" },
    { text: "Iron (%)", value: "iron" },
    { text: "Actions", value: "actions", sortable: false },
  ];

  removeTextMessage(): void {
    const textMessage = this.$el.querySelector(".v-text-field__details");

    if (!textMessage) return;

    textMessage.parentElement?.removeChild(textMessage);
  }

  clickQuery(): void {
    console.log("query");
  }

  getColor(calories: number): string {
    if (calories > 400) return "red";
    else if (calories > 200) return "orange";
    else return "green";
  }

  mounted(): void {
    this.removeTextMessage();
  }

  updated(): void {
    this.removeTextMessage();
  }
}
</script>

<style scoped lang="scss">
.text-search {
  max-width: 300px;
}

.card-table {
  .table {
  }
}
</style>

<style lang="scss">
.card-table {
  .v-input--dense > .v-input__control > .v-input__slot {
    margin: 0 !important;
  }
}
</style>
