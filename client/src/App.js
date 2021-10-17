import React, { useState, useEffect } from 'react'
import Election from "./contracts/Election.json";
import getWeb3 from "./getWeb3";

import { Typography, Container } from '@material-ui/core';
import CandidateDetails from './components/CandidateDetails';
import VoteForm from './components/VoteForm';

const App = () => {

  const [electionContract, setElectionContract] = useState(null);

  const [candidate1, setCandidate1] = useState({});

  const [candidate2, setCandidate2] = useState({});

  const [currentAccount, setCurrentAccount] = useState("");

  async function loadContract() {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      setCurrentAccount(accounts);

      const networkId = await web3.eth.net.getId();
      let deployedNetwork = Election.networks[networkId];
      const electionInstance = new web3.eth.Contract(
        Election.abi,
        deployedNetwork && deployedNetwork.address,
      );

      setElectionContract(electionInstance);

      let cand1 = await electionInstance.methods.candidates(1).call();
      let cand2 = await electionInstance.methods.candidates(2).call();
      
      setCandidate1(cand1) 
      setCandidate2(cand2) 
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadContract();
  }, []);

  const vote = async (candidateId) => {
    await electionContract.methods.vote(candidateId).send({ from: currentAccount[0] })
  } 

  return (
    <Container>
      <Typography variant="h2">Election</Typography>
      <CandidateDetails candidate1={candidate1} candidate2={candidate2} />
      <VoteForm vote={vote} />
      <Typography variant="h6">{currentAccount}</Typography>
    </Container>
  )
}

export default App

