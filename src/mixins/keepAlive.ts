import { Vue, Component, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component
export default class extends Vue {
  @Watch("$route", { immediate: true })
  setCache(route: Route): void {
    this.$store.dispatch("tagViews/addCachedView", route).then();
  }

  get cachedViews(): string[] {
    return this.$store.state.tagViews.cachedViews;
  }

  get key(): string {
    return this.$route.path;
  }
}
