import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: (filedName) => {
    if (filedName === "{field}") return "该字段为必填项";

    return `${filedName} 字段为必填项`;
  },
});

extend("email", {
  ...email,
  message: () => {
    return "邮箱格式为 xxx@xxx.xx";
  },
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
