import Vue from "vue";
import { compact, head } from "lodash";

const components = require.context("@cps", true, /\.vue$/i);

const comKeys = components.keys().filter((key) => {
  const split = head(compact(key.replace(/^./, "").split("/")));

  if (!split) return false;

  return /^(tool|rule)-/i.test(split);
});

comKeys.map((key) => {
  const component = components(key).default;

  Vue.component(component.name, component);
});
