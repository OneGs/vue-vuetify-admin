import { PipeBeforeEach } from "@/router/beforeEach";
import { Route } from "vue-router";
import store from "@/store";
import config from "@/config";

const isLogin = () => {
  return config.noPermission ? true : store.getters["login/isLogin"];
};

class PermissionNormal extends PipeBeforeEach {
  async beforeEach(to: Route) {
    if (isLogin()) {
      return to.name === "Login" ? { name: "Home" } : true;
    } else {
      return to.name === "Login" ? true : { name: "Login" };
    }
  }
}

export default new PermissionNormal(1000);
