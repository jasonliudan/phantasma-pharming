import * as constants from 'constants.js';

export const poolSetPoolInfo = (payload) => {
    return {
        type: constants.POOL_SET_POOL_INFO,
        payload,
    };
}
export const poolSetStakeTokenInfo = (payload) => {
    return {
        type: constants.POOL_SET_STAKE_TOKEN_INFO,
        payload
    }
};
export const poolApproveToken = () => {
    return {
        type: constants.POOL_APPROVE_TOKEN
    };
}
