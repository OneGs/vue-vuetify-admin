import { Component, Prop, Vue } from "vue-property-decorator";
import { OptionsProp } from "../types/common";

@Component({
  name: "Options",
})
export default class MOptions extends Vue {
  @Prop({ type: Array, default: () => [] }) options!: OptionsProp[];
}
