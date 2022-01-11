import { Config } from "@/config";

declare module "vue/types/vue" {
  interface Vue {
    $config: Config;
  }
}
