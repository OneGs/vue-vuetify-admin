import { NamedRoute } from "@/types/router";
import { PipeBeforeEach } from "@/router/beforeEach";
import { Route } from "vue-router";
import store from "@/store";

const isLogin = () => {
  return store.getters["login/isLogin"];
};

class PermissionNormal extends PipeBeforeEach {
  async beforeEach(to: Route) {
    if (isLogin()) {
      return to.name === "Login" ? ({ name: "Home" } as NamedRoute) : true;
    } else {
      return to.name === "Login" ? true : ({ name: "Login" } as NamedRoute);
    }
  }
}

export default new PermissionNormal(1000);
