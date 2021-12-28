import { Vue, Component } from "vue-property-decorator";
import { RouteConfig } from "vue-router";

@Component
export default class MenuTools extends Vue {
  menuKey(menu: RouteConfig): string {
    return menu.name || menu.path || menu.meta?.title;
  }

  menuTitle(menu: RouteConfig): string {
    return menu.meta ? menu.meta.title : menu.path || "set a title";
  }

  menuIcon(menu: RouteConfig): string {
    return menu.meta ? menu.meta.icon : "";
  }

  menuColor(menu: RouteConfig): string {
    if (!menu.meta) return "";

    return menu.meta.color?.includes("lighten")
      ? menu.meta.color
      : `${menu.meta.color} lighten-2`;
  }

  filter(menus: RouteConfig[]): RouteConfig[] {
    return (
      [...menus]
        ?.filter((menu) => {
          return menu.meta?.hidden !== true;
        })
        ?.sort((f, s) => {
          const [{ order: fOrder = -Infinity }, { order: sOrder = -Infinity }] =
            [f.meta || {}, s.meta || {}];

          return sOrder - fOrder;
        }) || []
    );
  }
}
