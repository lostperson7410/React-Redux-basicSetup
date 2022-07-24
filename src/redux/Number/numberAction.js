import numberType from "./numberType";

export function addNumber() {
  return { type: numberType.ADD_NUMBER };
}

export function decressNumber() {
  return { type: numberType.DECRESS_NUMBER };
}
