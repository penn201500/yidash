/**
 * 数组数据分组
 * @alias yd_array_groupBy
 * @category array
 * @param {Array} array 数组
 * @param {Function} fun 分组的字段或函数
 * @returns {object} 返回按某字段或函数分组后的对象
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_array_groupBy()
 */
export default (array, fun) => {
    const result = new Map();
    for (const item of array) {
        const groupKey = fun(item);
        if (!result.has(groupKey)) {
            result.set(groupKey, []);
        }
        result.get(groupKey).push(item);
    }
    return result;
};
