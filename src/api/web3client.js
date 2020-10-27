import Web3 from 'web3';

let web3 = window.web3;
async function loadWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    }
    else {
        window.alert('Non-Ethereum Browser Detected. You should consider trying MetaMask!');
    }
}


async function getAccount() {
    await loadWeb3();
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
}


/**
 * Common Contract Functions
 */
function getContract(abi, address) {
    return new web3.eth.contract(abi, address);
}
async function getBalance(contract, address) {
    const _address = address || getAccount();
    const result = await contract.methods.balanceOf(_address).call();
    return parseInt(result);
}

/**
 * StakingRewards Pool Contract Functions
 */
function precision(a) {
    if (!isFinite(a)) return 0;
    var e = 1, p = 0;
    while (Math.round(a * e) / e !== a) { e *= 10; p++; }
    return p;
}
async function poolStake(contract, amount, tokenDecimals, from) {
    const precision_ = precision(amount);
    const amount_ = Web3.utils.toBN(amount * 10 ** precision_);
    const pow_ = Web3.utils.toBN(10 ** (tokenDecimals - precision_));
    await contract.methods.stake(amount_.mul(pow_)).send({ from, gas: 200000 })
        .on('error', function (error, receipt) {
            console.log(error, receipt);
        });
}

async function poolWithdraw(contract, amount, tokenDecimals, from) {
    const precision_ = precision(amount);
    const amount_ = Web3.utils.toBN(amount * 10 ** precision_);
    const pow_ = Web3.utils.toBN(10 ** (tokenDecimals - precision_));
    await contract.methods.withdraw(amount_.mul(pow_)).send({ from, gas: 200000 })
        .on('error', function (error, receipt) {
            console.log(error, receipt);
        });
}

async function poolHarvest(contract, from) {
    await contract.methods.getReward().send({ from, gas: 200000 })
        .on('error', function (error, receipt) {
            console.log(error, receipt);
        });
}

async function poolExit(contract, from) {
    await contract.methods.exit().send({ from, gas: 200000 })
        .on('error', function (error, receipt) {
            console.log(error, receipt);
        });
}

async function poolGetEarned(contract, address) {
    const result = await contract.methods.earned(address).call();
    return result;
}

async function poolGetPeriodFinish(contract) {
    const periodFinish = await contract.methods.periodFinish().call();
    return new Date(parseInt(periodFinish) * 1000);
}

async function poolGetRewardRate(contract) {
    const result = await contract.methods.rewardPerToken().call();
    return result;
}

export default {
    getAccount,
    getContract,
    getBalance,

    poolGetRewardRate
};
