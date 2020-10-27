import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { supportedPools } from 'lib/constants';
import { MainButton } from 'components/basicComponents';

import { approve } from 'api/metamask';

class Farm extends Component {

    render() {
        const { pid } = this.props.match.params;
        const { account } = this.props;
        const poolData = supportedPools.find(pool => pool.pid === pid);

        return (
            <div>
                {account !== null ? <div>
                    <h1>{poolData.name}</h1>
                    <InfoCardWrapper>
                        <InfoCard>
                            <h2>{poolData.tokenSymbol}</h2>
                            <p style={{ fontSize: '60px' }}>0.000</p>
                            <p>{`${poolData.tokenSymbol} EARNED`}</p>
                            <MainButton>HARVEST</MainButton>
                        </InfoCard>

                        <InfoCard>
                            <h2>{poolData.symbol}</h2>
                            <p style={{ fontSize: '60px' }}>0.000</p>
                            <p>{`${poolData.symbol} STAKED`}</p>
                            <MainButton>{`APPROVE ${poolData.symbol}`}</MainButton>
                        </InfoCard>
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
