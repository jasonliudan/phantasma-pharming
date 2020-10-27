import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { WalletConnectButton } from 'components/basicComponents';
import { setWallet } from 'actions/main';
import Web3Client from 'api/web3client';

class Header extends Component {

    async connectMetamask() {
        const account = await Web3Client.getAccount();
        this.props.setWallet(account);
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
