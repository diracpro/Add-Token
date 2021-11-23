import detectEthereumProvider from '@metamask/detect-provider';
import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import AddToken from './AddToken';
import Value from './Price';
import './App.css';
import DownloadMetaMaskButton from './DownloadMetaMaskButton';
import loadingSvg from './loading.svg';

const MainContent = () => {

  return (
    <div>
      <Value />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HashRouter hashType="noslash">
          <Switch>
            <Route path="/add" component={AddToken} />
            <Route path="/" component={AddToken} />
          </Switch>
        </HashRouter>
      </BrowserRouter>
    </div>
  )
};

const ErrorContent = () => {
  return (
    <div>
      <div>
        <h2>You need a web3 browser like MetaMask to use this site and manage cryptocurrencies.</h2>
        <DownloadMetaMaskButton />
      </div>
    </div>
  )
}

const App = () => {
  const [isProviderLoaded, setProvider] = useState([]);
  const [isLoading, setLoading] = useState([true]);

  const checkEthereumProvider = async () => {
    const provider = await detectEthereumProvider()
    setLoading(false)
    setProvider(provider)
  }

  checkEthereumProvider()

  return (
    <div className="App">
      {isLoading ? <div><div><img className="loading-spinner" src={loadingSvg} /><h2>Loading.....</h2></div></div>
        : <div>

          {isProviderLoaded ? <MainContent /> : <ErrorContent />}

        </div>}
    </div>
  );
}



export default App;
