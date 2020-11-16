import React from 'react';
import styled from 'styled-components';

import Config from 'lib/config';
import { numberWithDecimals } from 'utils';

import { MainButton } from 'components/basicComponents';
import StakeDialog from 'components/dialogs/stakeDialog';
import UnstakeAllDialog from 'components/dialogs/unstakeAllDialog';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const StakeAsset = ({ totalStaked, staked, allowed, onApprove, onStake, onUnstakeAll, balance, rewardBalance, stakeTokenInfo, rewardTokenInfo }) => {
    const [stakeDialogOpen, setStakeDialogOpen] = React.useState(false);
    const [unstakeDialogOpen, setUnstakeDialogOpen] = React.useState(false);

    const stakedAmount= numberWithDecimals(staked, stakeTokenInfo.decimals, Config.Utils.decimals);
    return (
        <Card>
            <div>
                <div>
                    <div>
                        <h2 style={{marginBottom: '20px'}}>{stakeTokenInfo.symbol}</h2>
                    </div>
                    <div style={{ position: 'relative', margin: '25px'}}>
                        <CircularProgressbar value={55} maxValue={100} text={`100%`} 
                        strokeWidth={3} />
                        <TextInsideProgress>
                            <img src={require('assets/icons/phantasma-small.svg')} alt={stakeTokenInfo.name} />
                        </TextInsideProgress>
                    </div>
                    <div>
                        <img src={require('assets/staking.svg')} alt={stakeTokenInfo.name} />
                    </div>
                    <RewardInfo>
                       <img src={require('assets/icons/phantasma-energy-small.svg')} alt={stakeTokenInfo.name} />
                    </RewardInfo>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                        {allowed ? (
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

            <StakeDialog
                open={stakeDialogOpen}
                poolBalance={rewardBalance}
                stakeToken={stakeTokenInfo}
                rewardToken={rewardTokenInfo}
                totalStaked={totalStaked}
                userBalance={balance}
                dialogTitle={(
                    <div>
                        <img src={stakeTokenInfo.image} alt={stakeTokenInfo.name} width={35} />
                        <span>{`Stake ${stakeTokenInfo.symbol}`}</span>
                    </div>
                )}
                onStake={onStake}
                onClose={() => setStakeDialogOpen(false)}
            />
            <UnstakeAllDialog
                open={unstakeDialogOpen}
                stakeToken={stakeTokenInfo}
                staked={staked}
                dialogTitle={(
                    <div>
                        <img src={stakeTokenInfo.image} alt={stakeTokenInfo.name} />
                        <span>{`Withdraw ${stakeTokenInfo.symbol}`}</span>
                    </div>
                )}
                onUnstakeAll={onUnstakeAll}
                onClose={() => setUnstakeDialogOpen(false)}
            />
        </Card >
    )
}

const Card = styled.div`
    width: 82%;
    min-width: 285px;
    max-width: 400px;
    box-sizing: border-box;
    padding: 20px;
    margin: auto;
    border-radius: 20px;
    background-color: #130035;
    text-align: center;
`

const RewardInfo = styled.div`
    background-color: #4a9eff;
    color: #130035;
    height: 48px;
    width: 250px;
    border-radius: 10px;
    margin: auto;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    padding-left: 20px;
    font-weight: 600;
    font-size: 40px;
`

const TextInsideProgress = styled.div`
    position: absolute;
    top: 40px;
    width: 100%;
`

export default StakeAsset;

