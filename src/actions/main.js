import * as constants from 'constants.js';

export function setWallet(account) {
    return {
        type: constants.SET_WALLET,
        account
    };
}
