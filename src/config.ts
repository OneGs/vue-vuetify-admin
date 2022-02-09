export interface Config {
  navigatorMiniVariantWidth: string;
  navigatorWidth: string;
  firstMenuName: string;
  taskIcons: { icon: string; color: string }[];
}

export default <Config>{
  navigatorMiniVariantWidth: "56px",
  navigatorWidth: "250px",

  firstMenuName: "RootLayoutSetting",

  // ————————————————————————————————————
  //* ——— Options
  // ————————————————————————————————————
  taskIcons: [
    // { icon: "ios", color: "#20a0ff" },
    // { icon: "anzhuo", color: "#99d75a" },
    { icon: "task", color: "#9473fd" },
    { icon: "correct", color: "#22d7bb" },
    { icon: "time-fill", color: "#2cccda" },
    { icon: "message-fill", color: "#ffd234" },
    { icon: "computer", color: "#18bfa4" },
    { icon: "star", color: "#2dbcff" },
    { icon: "money", color: "#39ba5d" },
    { icon: "light", color: "#7076fa" },
    { icon: "bug-fill", color: "#fa5a55" },
    { icon: "web", color: "#e488fb" },
  ],
};
