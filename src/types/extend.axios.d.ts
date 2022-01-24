// eslint-disable-next-line
import axios from "axios";

declare module "axios" {
  interface AxiosRequestConfig {
    meta?: { mode?: string };
  }
}
