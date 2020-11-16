import React from 'react';
import styled from 'styled-components';

import Config from 'lib/config';
import { numberWithDecimals } from 'utils';


import { MainButton } from 'components/basicComponents';

export const RewardAsset = ({ earned, onHarvest, apy, rewardToken, periodFinish }) => {
    const harvest = () => {
        var currentDate = new Date();
        if (new Date(currentDate) > new Date(periodFinish)) 
            onHarvest();
        else
            alert('You can only harvest after the Pool is finished');
    }
    return (
        <Card>
            <div>
                <div>
                    <div>
                        <h2 style={{marginBottom: '50px'}}>EARNED</h2>
                    </div>
                
                    <RewardAmount>
                        <span style={{fontWeight: '900', fontSize: '45px'}}>
                            {numberWithDecimals(earned, rewardToken.decimals, Config.Utils.decimals)} 
                        </span> &nbsp;
                        <span style={{fontSize: '20px', lineHeight: '65px'}}>
                            {rewardToken.symbol}
                        </span>
                    </RewardAmount>
                    <h2 style={{marginTop: '50px'}}>TIME LEFT</h2>
                    <TimeLeft>
                        <span style={{fontWeight:'900'}}>7</span>d:
                        <span style={{fontWeight:'900'}}>4</span>h:
                        <span style={{fontWeight:'900'}}>31</span>m
                    </TimeLeft>
                    <div style={{marginTop: '42px'}}>
                        <img src={rewardToken.image} alt={rewardToken.name} />
                    </div>
                    <APY>
                        {`${apy}% APY`}
                    </APY>
                </div>
                <div>
                    <MainButton style={{ margin: '15px 0px', width: '100%' }}
                        disabled={earned <= 0}
                        onClick={harvest}>
                        Harvest
                    </MainButton>
                </div>
            </div>
        </Card>
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
const RewardAmount = styled.div`
    background-color: #4a9eff;
    color: #130035;
    height: 60px;
    width: 250px;
    border-radius: 10px;
    margin: auto;
    display: flex;
    justify-content: center;
    padding-left: 20px;
`

const TimeLeft = styled.div`
    border: 2px solid white;
    background-color: transparent;
    color: white;
    height: 60px;
    width: 250px;
    border-radius: 10px;
    margin: auto;
    display: flex;
    justify-content: center;
    padding-left: 20px;
    font-size: 33px;
    line-height: 53px;
`

const APY = styled.div`
    background-color: #4a9eff;
    color: #130035;
    height: 48px;
    width: 250px;
    border-radius: 10px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    padding-left: 20px;
    font-weight: 600;
    font-size: 40px;
`

export default RewardAsset;

