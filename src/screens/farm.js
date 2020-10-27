import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import Config from 'lib/config';
//import { supportedPools } from 'lib/constants';
import { MainButton } from 'components/basicComponents';
import RewardAsset from 'components/rewardAsset';
//import { approve } from 'api/metamask';

class Farm extends Component {


    harvest() {

    }

    render() {
        const { pid } = this.props.match.params;
        const { account } = this.props;
        const poolData = Config.pools.find(pool => pool.poolId === pid);
        //        console.log(poolData.rewardToken)
        const rewardTokenInfo = Config.tokens[poolData.rewardToken];
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
                    </InfoCardWrapper>
                </div> : <p>Connect Now</p>}
            </div>
        );
    }
}

const InfoCard = styled.div`
    width: 285px;
    height: 350px;
    padding: 20px;
    border-radius: 15px;
    background-color: #1D2D50;
    font-family: "Geo",sans-serif;
    margin: 0px 10px;
`
const InfoCardWrapper = styled.div`
    display: flex;
`

const mapStateToProps = state => ({
    account: state.mainReducer.account
});
export default connect(mapStateToProps, null)(Farm);
