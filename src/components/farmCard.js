import React, { Component } from 'react';
import styled from 'styled-components';

import { withRouter } from "react-router";

import { MainButton } from 'components/basicComponents';
import CardIcon from 'components/cardIcon';
class FarmCard extends Component {

    render() {
        const { poolData } = this.props;
        return (
            <FarmCardWrapper>
                <CardIcon src={require(`../assets/icons/${poolData.icon}`)} />
                <h2>{poolData.name}</h2>
                <p style={{ margin: '10px 0px' }}>{`Deposit ${poolData.symbol}`}</p>
                <p style={{ margin: '10px 0px' }}>{`Earn ${poolData.tokenSymbol}`}</p>
                <MainButton style={{ margin: '15px 0px' }}
                    onClick={() => this.props.history.push(`farm/${poolData.pid}`)}> START </MainButton>
            </FarmCardWrapper>
        );
    }
}

const FarmCardWrapper = styled.div`
    width: 285px;
    height: 350px;
    padding: 20px;
    border-radius: 15px;
    background-color: #1D2D50;
    font-family: "Geo",sans-serif;
`

export default withRouter(FarmCard);
