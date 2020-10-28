import { put, takeLatest, call, select } from 'redux-saga/effects';
import * as constants from 'constants.js';

import web3client from 'api/web3client';

function* approve() {
    try {
        const state = yield select();
        const account = state.accountReducer.account;
        const stakeTokenContract = state.poolReducer.stakeTokenContract;
        const poolInfo = state.poolReducer.poolInfo;
        if (!account || !stakeTokenContract || !poolInfo) return;

        console.log(stakeTokenContract, poolInfo.address, account);

        yield web3client.approve(stakeTokenContract, poolInfo.address, account.address);
        const allowance = yield web3client.allowance(stakeTokenContract, account.address, poolInfo.address);
        console.log(allowance)
        //      yield put(poolApproveTokenSuccess(allowance));
    } catch (err) {
        //        yield put(poolApproveTokenSuccess(0));
    }
}

export default function* watchGetUsersSaga() {
    yield takeLatest(constants.POOL_APPROVE_TOKEN, approve);
}