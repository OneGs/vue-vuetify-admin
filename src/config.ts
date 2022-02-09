export interface Config {
  navigatorMiniVariantWidth: string;
  navigatorWidth: string;
  firstMenuName: string;
  taskIcons: { icon: string; color: string }[];
  loadingText: string;
  propertyEnum: Array<string>;
}

export default <Config>{
  navigatorMiniVariantWidth: "56px",
  navigatorWidth: "250px",

  // ————————————————————————————————————
  //* ——— Menu
  // ————————————————————————————————————
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

  // ————————————————————————————————————
  //* ——— Loading
  // ————————————————————————————————————
  loadingText: "数据加载中，请稍后",

  // ————————————————————————————————————
  //* ——— TaskProperty
  // ————————————————————————————————————
  propertyEnum: [
    "日期",
    "时间区间",
    "成员",
    "成员组",
    "数字",
    "下拉单选",
    "文本",
    "文本域",
    "类型",
    "下拉多选",
    "状态",
    "优先级",
    "标记",
    "文件",
    "工时",
    "迭代",
  ],
};
