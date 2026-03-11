function getFirstElement<T>(arr: T[]): T {
  console.log(arr[0]);
  return arr[0];
}
export function task6() {
  getFirstElement<Number>([1, 2, 3]); // 1
  getFirstElement<String>(["a", "b", "c"]); // "a"
  getFirstElement<Boolean>([true, false, true]); // true
}
