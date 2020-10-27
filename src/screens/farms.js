import React, { Component } from 'react';

import Config from 'lib/config';
import PoolCard from 'components/poolCard';

import styled from 'styled-components';

class App extends Component {

    render() {
        const { pools } = Config;
        return (
            <FarmsContainer>
                {
                    pools.map((pool, index) =>
                        <PoolCard key={index}
                            poolData={pool}
                            apy={123.3} />)
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
