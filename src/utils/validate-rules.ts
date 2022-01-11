import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: (filedName) => {
    if (filedName === "{field}") return "This field is required";

    return `This ${filedName} field is required`;
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
