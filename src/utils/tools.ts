export function isEnvDep(): boolean {
  return process.env.NODE_ENV === "development";
}
