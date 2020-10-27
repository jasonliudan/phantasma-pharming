import React, { Component } from 'react';

import { supportedPools } from 'lib/constants';
import FarmCard from 'components/farmCard';

import styled from 'styled-components';

class App extends Component {

    render() {
        return (
            <FarmsContainer>
                {
                    supportedPools.map((pool, index) =>
                        <FarmCard key={index} poolData={pool} />)
                }
            </FarmsContainer>
        );
    }
}

const FarmsContainer = styled.div`
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    column-gap: 15px;
    row-gap: 10px;
`
export default App;
