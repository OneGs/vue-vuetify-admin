import axios from "axios";

interface AxiosMeta {
  mode?: string;
}

declare module "axios" {
  interface AxiosRequestConfig {
    meta?: AxiosMeta;
  }
}
