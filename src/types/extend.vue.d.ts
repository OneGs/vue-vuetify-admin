import { Config } from "@/config";
import { ValidateType } from "@/types/common";

declare module "vue/types/vue" {
  interface Vue {
    $config: Config;
    $type: ValidateType;
  }
}
