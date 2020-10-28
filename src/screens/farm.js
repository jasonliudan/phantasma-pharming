import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import Config from 'lib/config';
//import { supportedPools } from 'lib/constants';
import { MainButton } from 'components/basicComponents';
import RewardAsset from 'components/rewardAsset';
import StakeAsset from 'components/stakingAsset';
import {
    poolSetPoolInfo,
    poolSetStakeTokenInfo,
    poolApproveToken
} from 'actions';
//import { approve } from 'api/metamask';
import web3client from 'api/web3client';

class Farm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poolData: null
        };
    }
    componentDidMount() {
        const { pid } = this.props.match.params;
        const poolData = Config.pools.find(pool => pool.poolId === pid);
        this.setState({ poolData: poolData });

        this.props.setPoolInfo(poolData);
        const contract = web3client.getContract(Config.tokens['SOUL'].abi, Config.tokens['SOUL'].address);
        this.props.setStakeTokenInfo(contract);
    }
    harvest() {

    }
    approve() {

    }
    stake(amount) {

    }
    unstake() {

    }
    render() {
        const { account } = this.props;
        const { poolData } = this.state;
        if (!poolData) return <div />;
        //        console.log(poolData.rewardToken)
        const rewardTokenInfo = Config.tokens[poolData.rewardToken];
        const stakeTokenInfo = Config.tokens[poolData.stakingToken];
        return (
            <div>
                {account !== null ? <div>
                    <InfoCardWrapper>
                        <RewardAsset
                            rewardToken={rewardTokenInfo}
                            earned={0.001}
                            percent={1}
                            onHarvest={this.harvest}
                        />
                        <StakeAsset
                            stakeTokenInfo={stakeTokenInfo}
                            rewardTokenInfo={rewardTokenInfo}
                            allowed={true}
                            started={10}
                            staked={true}
                            totalStaked={1000}
                            balance={1000}
                            rewardBalance={1000}
                            onApprove={() => this.props.approve()}
                            onStake={(amount) => this.stake(amount)}
                            onUnstake={this.unstake}
                        />
                    </InfoCardWrapper>
                </div> : <p>Connect Now</p>}
            </div>
        );
    }
}

const InfoCardWrapper = styled.div`
    display: flex;
`

const mapStateToProps = state => ({
    account: state.accountReducer.account
});
const mapDispatchToProps = dispatch => ({
    setPoolInfo: (payload) => dispatch(poolSetPoolInfo(payload)),
    setStakeTokenInfo: (payload) => dispatch(poolSetStakeTokenInfo(payload)),
    approve: () => dispatch(poolApproveToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
