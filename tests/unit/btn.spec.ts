import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import RuleBtn from "@/components/rule-btn/index.vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const localVue = createLocalVue();

localVue.use(Vuetify);

let vuetify: Vuetify;

beforeAll(() => {
  vuetify = new Vuetify();
});

/**
 * 1. 测试默认渲染情况（是否正常渲染）
 * 2. 测试不同属性对应情况
 * 3. 测试事件是否能够出发成功
 */
describe("是否可以正常渲染成功", () => {
  it("dom存在", () => {
    const wrapper = shallowMount(RuleBtn, { localVue, vuetify });

    expect(wrapper.exists()).toBeTruthy();
  });

  it("样式正常加载", function () {
    const wrapper = shallowMount(RuleBtn, { localVue, vuetify });

    expect(wrapper.html()).toContain("rule-btn");
  });
});

describe("绑定的click事件是否可以正常触发", () => {
  const onClick = jest.fn().mockReturnValue(1);

  it("click被触发，返回1", async function () {
    const wrapper = mount(RuleBtn, {
      localVue,
      vuetify,
      listeners: {
        click: onClick,
      },
    });

    await wrapper.trigger("click");
    expect(onClick.mock.results[0].value).toBe(1);
  });
});

describe("动画样式是否加载成功", () => {
  it("鼠标移入增加样式move-up", async function () {
    const wrapper = mount(RuleBtn, { localVue, vuetify });
    expect(wrapper.html().includes("move-up")).toBeFalsy();

    await wrapper.trigger("mouseenter");
    expect(wrapper.html()).toContain("move-up");
  });

  it("鼠标移出移除样式move-up", async function () {
    const wrapper = mount(RuleBtn, {
      localVue,
      vuetify,
      data() {
        return {
          moveUp: true,
        };
      },
    });

    expect(wrapper.html()).toContain("move-up");

    await wrapper.trigger("mouseleave");
    expect(wrapper.html().includes("move-up")).toBeFalsy();
  });
});
