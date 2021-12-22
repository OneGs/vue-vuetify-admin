import { NamedRoute, PipeBeforeEach } from "@/types/router";
import { Route } from "vue-router";

const isLogin = () => {
  return !!localStorage.getItem("accessToken");
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
