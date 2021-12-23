import { RawLocation, Route } from "vue-router";
import { NamedRoute } from "@/types/router";

export class PipeBeforeEach {
  order = Infinity;

  disabled = false;

  constructor(order = Infinity, disabled = false) {
    this.order = order;

    this.disabled = disabled;
  }

  // 需要实现
  beforeEach(
    to?: Route,
    from?: Route,
    next?: (to?: RawLocation | false | void) => void
  ): boolean | NamedRoute | void | Promise<boolean | NamedRoute | void> {
    return next ? next() : false;
  }
}
