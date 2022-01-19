import Vue from "vue";

export function isEnvDep(): boolean {
  return process.env.NODE_ENV === "development";
}

export function findParentByName(root: Vue, name: string): Vue | null {
  const deep = (rootComponent: Vue) => {
    if (rootComponent.$options.name === name)
      return (component = rootComponent);

    rootComponent.$parent && deep(rootComponent.$parent);
  };

  let component: Vue | null = null;

  deep(root.$parent);

  return component;
}

export function findChildrenByName(root: Vue, name: string): Vue | null {
  const deep = (rootComponents: Vue[]) => {
    rootComponents.forEach((child) => {
      if (child.$options.name === name) return (component = child);

      child.$children && deep(child.$children);
    });
  };

  let component: Vue | null = null;

  deep(root.$children);

  return component;
}
