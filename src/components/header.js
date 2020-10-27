import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import Web3 from 'web3';

import { WalletConnectButton } from 'components/basicComponents';
import { setWallet } from 'actions/main';

class Header extends Component {

    async connectMetamask() {
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            window.alert('Non-Ethereum Browser Detected. You should consider trying MetaMask!');
        }
    }

    async loadBlockchainData() {
        const web3 = window.web3;

        const accounts = await web3.eth.getAccounts();
        this.props.setWallet(accounts[0]);
    }

    render() {
        const { account } = this.props;
        return (
            <div>
                <div className="topleft">
                    <Link to={{ pathname: '/' }} style={{ textDecoration: 'none', color: 'white' }}>
                        <p>PHARMING</p>
                    </Link>
                </div>
                <div className="topright">
                    {account === null ?
                        <WalletConnectButton
                            onClick={() => this.connectMetamask()}>CONNECT WALLET</WalletConnectButton> :
                        <p>{account}</p>
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    account: state.mainReducer.account
});
const mapDispatchToProps = dispatch => ({
    setWallet: (account) => dispatch(setWallet(account))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
