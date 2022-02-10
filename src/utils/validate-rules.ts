import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: (filedName) => {
    if (filedName === "{field}") return "该字段为必填项";

    return `${filedName} 不能为空`;
  },
});

extend("email", {
  ...email,
  message: () => {
    return "邮箱格式为 xxx@xxx.xx";
  },
});
// 唯一标识格式不正确（必须由小写英文字母、数字或者下划线组成，以英文字母开头并且为3至20字符）

extend("identifier", (value: string) => {
  if (/^[a-z][a-z0-9_]{2,19}$/.test(value)) return true;

  return "必须由小写英文字母、数字或者下划线组成，以英文字母开头并且为3至20字符";
});

extend("state", {
  validate: (value) => {
    return /^\$--/.test(value);
  },
  message: (fieldName) => {
    return `state must start of $-- ${fieldName}`;
  },
});

extend("odd", (value: number) => {
  if (value % 2 !== 0) {
    return true;
  }

  return "This field must be an odd number";
});
