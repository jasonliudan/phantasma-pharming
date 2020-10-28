import * as constants from 'constants.js';
const initialState = {
    contract: null,
    stakeTokenContract: null,
    rewardTokenContract: null,
    poolInfo: null,
    stakeTokenInfo: null,
    rewardTokenInfo: null,
    allowance: null,
    staked: null,
    totalStaked: null,
    stakeTokenBalance: null,
    earned: null,
    periodFinish: null,
};

export default function setBrowserInfo(state = initialState, action) {
    switch (action.type) {
        case constants.POOL_SET_POOL_INFO:
            return {
                ...state,
                poolInfo: action.payload
            }
        case constants.POOL_SET_STAKE_TOKEN_INFO:
            return {
                ...state,
                stakeTokenContract: action.payload
            }
        default:
            return state;
    }
}
