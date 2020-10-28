import React from 'react';
import styled from 'styled-components';

import Config from 'lib/config';
import { numberWithDecimals } from 'utils';
//import { StakeDialog, UnstakeDialog } from 'components';

import { MainButton } from 'components/basicComponents';

export const StakeAsset = ({ totalStaked, staked, allowed, onApprove, onStake, onUnstake, balance, rewardBalance, stakeTokenInfo, rewardTokenInfo }) => {
    const [stakeDialogOpen, setStakeDialogOpen] = React.useState(false);
    const [unstakeDialogOpen, setUnstakeDialogOpen] = React.useState(false);

    return (
        <Card>
            <div>
                <div>
                    <div>
                        <h2>{stakeTokenInfo.name}</h2>
                    </div>
                    <div>
                        <img src={stakeTokenInfo.image} alt={stakeTokenInfo.name} />
                    </div>
                    <div>
                        <span>
                            {numberWithDecimals(staked, stakeTokenInfo.decimals, Config.Utils.decimals)}
                        </span>
                    </div>
                    <div>
                        <span>{`${stakeTokenInfo.symbol} Staked`}</span>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                        {!allowed ? (
                            <MainButton style={{ width: '75%' }}
                                onClick={() => setStakeDialogOpen(true)}>
                                Stake
                            </MainButton>
                        ) : (
                                <MainButton style={{ width: '75%' }}
                                    onClick={onApprove}>
                                    {`Approve ${stakeTokenInfo.symbol}`}
                                </MainButton>
                            )}

                        <MainButton style={{ width: '23%' }}
                            onClick={() => setUnstakeDialogOpen(true)}>
                            <b>-</b>
                        </MainButton>
                    </div>
                </div>
            </div>
        </Card >
    )
}

const Card = styled.div`
    width: 285px;
    height: 350px;
    padding: 20px;
    margin: 10px;
    border-radius: 15px;
    background-color: #1D2D50;
    font-family: "Geo",sans-serif;
`

export default StakeAsset;

