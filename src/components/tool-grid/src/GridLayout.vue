<template>
  <v-container>
    <v-row v-for="(theRow, index) in layouts" :key="index + 'row'">
      <v-col
        v-for="(theCol, colIndex) in theRow"
        :key="colIndex + 'col'"
        class="py-0"
        :cols="theCol"
      >
        <slot
          :name="`${index}-${colIndex}`"
          v-bind:span="`${index}-${colIndex}`"
          v-bind:currentRow="index + 1"
          v-bind:currentCol="colIndex + 1"
          v-bind:length="theRow.length"
        >
          {{ index }} - {{ colIndex }}
        </slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, VModel } from "vue-property-decorator";
import { chunk } from "lodash";

@Component({
  name: "GridLayout",
})
export default class GridLayout extends Vue {
  @Prop({ type: [Number], default: 1 }) row?: number;

  // TODO 可以重构分开成 spans
  @Prop({ type: [Number, Array], default: 3 }) col?:
    | number
    | Array<Array<number | string>>;

  @VModel({ type: Array, default: () => [] }) slots?: Array<string | number>;

  layouts: Array<Array<number | string>> = [];

  slotName(row: string, col: string): string {
    const slot = `${row}-${col}`;

    this.$nextTick().then(() => {
      this.slots?.push(slot);
    });

    return slot;
  }

  defaultLayouts(): void {
    if (!this.row || !this.col) return;

    const _col = this.col as number;

    const _layouts = Array.from({
      length: (this.row as number) * _col,
    }).fill(12 / _col) as string[];

    this.layouts = chunk(_layouts, _col);
  }

  rowNumberColArray(): void {
    const [_row, _col] = [
      this.row as number,
      this.col as Array<Array<number | string>>,
    ];

    _col.forEach((col: Array<number | string>, index: number) => {
      if (col.length === 1) {
        const colFill = Array.from({ length: Number(col) }).fill(
          12 / Number(col)
        ) as Array<number | string>;

        index < _row && this.layouts?.push(colFill);

        return;
      }

      index < _row && this.layouts?.push(col);
    });
  }

  created(): void {
    if (typeof this.row === "number" && typeof this.col === "number")
      this.defaultLayouts();

    if (typeof this.row === "number" && Array.isArray(this.col))
      this.rowNumberColArray();

    this.layouts.forEach((_layout: Array<number | string>, index: number) => {
      _layout.forEach((_: string | number, colIndex: number) => {
        this.slots?.push(`${index}-${colIndex}`);
      });
    });

    // console.log(this.layouts);
  }
}
</script>

<style scoped></style>
