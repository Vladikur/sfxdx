import * as React from 'react';
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";
import {setAddress} from "../store/userReducer";
import {useDispatch, useSelector} from "react-redux";
import {Web3} from 'web3'
import Button from '../modules/Button'
import AddressButton from '../modules/AddressButton'


export default function Header() {
  const {ethereum} = window
  const sepoliaChainId = '0xaa36a7'
  let web3 = null
  const dispatch = useDispatch()
  const {address} = useSelector(state => state.user)

  ethereum.on('accountsChanged', async () => {
    handleConnectWallet()
  });

  async function handleConnectWallet() {
    if (ethereum) {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      dispatch(setAddress(accounts[0]))

      web3 = new Web3(ethereum)

      await switchNetwork()
    } else {
      alert('Please install MetaMask to use this app.');
    }
  }

  async function switchNetwork() {
    try {
      await web3.currentProvider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: sepoliaChainId }],
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <img src={logo} alt="Logo"/>
          </Link>

          {!address && <Button onPress={handleConnectWallet}>Connect Wallet</Button>}
          {address && <AddressButton address={address} />}
        </div>
      </div>
    </header>
  );
}
