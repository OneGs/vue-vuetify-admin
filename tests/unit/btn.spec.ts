import { shallowMount, createLocalVue } from "@vue/test-utils";
import RuleBtn from "@/components/rule-btn/index.vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const localVue = createLocalVue();

localVue.use(Vuetify, { localVue });

/**
 * 1. 测试默认渲染情况（是否正常渲染）
 * 2. 测试不同属性对应情况
 * 3. 测试事件是否能够出发成功
 */
describe("RuleBtn.vue", () => {
  let vuetify: Vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders RuleBtn normal", () => {
    // @ts-ignore
    const wrapper = shallowMount(RuleBtn, { localVue, vuetify });

    expect(wrapper.html()).toContain("rule-btns");
  });
});
