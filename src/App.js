import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
// import abi from '../build/contracts/NonsenseTokenCrowdsale.json'
import artifacts from '../build/contracts/NonsenseTokenCrowdsale.json'
let Crowdsale = contract(artifacts)
// let crowdsaleContractInstance = CrowdsaleContract.at(address)
// var NonsenseTokenCrowdsale = contract(nonsense_token_crowdsale_artifacts)

class App extends Component {

  render() {

    return (
      <div className="App">
        <a onClick={this.sendTx}>Send TX</a>
      </div>
    );
  }

  sendTx()  {
    // console.log('ABI', abi);
    // var abi=[//your abi array];
    let web3 = window.web3
    let account1 = web3.eth.accounts[1]
    Crowdsale.setProvider(web3.currentProvider)
    Crowdsale.deployed().then(function(instance)  {
      instance.sendTransaction({ from: account1, value: web3.toWei(5, "ether")})
    })

    // var contractAddress = "0x36de1fcd6c23c8b66ff14105b84cbd7674863dd6";
    // var contractAddress = '0x6b5decb6b58c88c70844587169d8e6e471a7925a'
    // var contract = web3.eth.contract(abi.abi).at(contractAddress);
    // console.log('contract', contract);
    // contract.sendTransaction({ from: account1, value: web3.toWei(5, "ether")})
    // let address = '0x36de1fcd6c23c8b66ff14105b84cbd7674863dd6'
    // let CrowdsaleContract = contract(abi)
    // let crowdsaleContractInstance = CrowdsaleContract.at(address)
    //
    // miniTokentoken.transfer(toAddress, value, { from: addr })
    // .then(function (txHash) {
    //   console.log('Transaction sent')
    //   console.dir(txHash)
    //   waitForTxToBeMined(txHash)
    // })
    // .catch(console.error)

    // Web3
    // let web3 = window.web3
    // let account1 = web3.eth.accounts[1]
    // web3.eth.contract('0x36de1fcd6c23c8b66ff14105b84cbd7674863dd6').sendTransaction({ from: account1, value: web3.toWei(5, "ether")})
    // crowdsaleContractInstance.sendTransaction({ from: account1, value: web3.toWei(5, "ether")})
    // console.log('web3', window.web3.currentProvider);
    console.log('SENDinG TX');
    // console.log(nonsense_token_crowdsale_artifacts);
  }
}

export default App
