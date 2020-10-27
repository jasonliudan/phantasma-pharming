export const numberWithDecimals = (value, divideDecimals, showDecimals, isNumber) => {
    const _value = value / Math.pow(10, divideDecimals);
    const _decimals = Math.pow(10, showDecimals);
    const _res = Math.floor(_value * _decimals) / _decimals;
    if (!isNumber) return _res.toFixed(showDecimals);
    return _res;
}