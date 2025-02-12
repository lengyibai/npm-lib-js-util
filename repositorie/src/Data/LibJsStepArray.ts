/** @description 数组元素整体步数移动
 * @param arr 移动的数组
 * @param step 负数为向后移动，正数为向前移动
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsStepArray-数组偏移
 */
export const libJsStepArray = <T>(arr: T[], step: number): T[] => {
  const length = arr.length;
  if (length === 0 || step % length === 0) return arr;
  const normalizedStep = ((step % length) + length) % length;
  return arr.slice(-normalizedStep).concat(arr.slice(0, -normalizedStep));
};
