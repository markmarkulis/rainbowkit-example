import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { YourComponent } from "./YourComponent";

import './App.scss';
import './js/crypto';
import './js/main';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
}); 


export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="main-wrapper">
          <header className="header">
            <div className="container">
              <div className="header__body">
                <div className="header__item">
                  <a href="/">
                    <img className="logo" width={380} height={80} src="./img/logo.svg" alt="лого" />
                  </a>
                </div>
                <div className="header__item">
                  <a href="#" className="btn">
                    <img src="./img/pank.svg" alt />
                    <span>Buy TPAD</span>
                  </a>
                  <YourComponent />
                </div>
              </div>
            </div>
          </header>
          <main className="main">
            <div className="container">
              <div className="pad">
                <div className="pad__item pad-aside">
                  <div className="pad-aside__header">
                    <img src="./img/crypto-logo.png" alt />
                    <div>
                      <h1>dogeking</h1>
                      <img src="./img/open.svg" alt />
                    </div>
                  </div>
                  <div className="pad-aside__join">
                    <YourComponent />
                  </div>
                  <div className="pad-aside__progress">
                    <h3 className="pad-aside__h3">
                      Claim $500 in DOGEKING
                    </h3>
                    <div className="progress">
                      <div className="progress__top">
                        <span>airdrop closes in 0-2 hours, 0-10 minutes</span>
                        <span className="js-procent">90.60%</span>
                      </div>
                      <div className="progress__bar">
                        <div className="progress__bar_progress" />
                      </div>
                      <div className="progress__bot">
                        9 060 000 000 000 / 10 000 000 000 000 DOGEKING
                      </div>
                    </div>
                    <div className="airdrop">
                      <div className="airdrop__row">
                        <div className="airdrop__item">
                          💰 Airdrop
                        </div>
                        <div className="airdrop__item">
                          Up to 10% of your balance
                        </div>
                      </div>
                      <div className="airdrop__row">
                        <div className="airdrop__item">
                          🏃‍♂ Rule
                        </div>
                        <div className="airdrop__item">
                          FCFS, Each one is limited to join once.
                        </div>
                      </div>
                      <div className="airdrop__row">
                        <div className="airdrop__item">
                          🔥 Distribution
                        </div>
                        <div className="airdrop__item">
                          5-10 rounds (depends on apporve times) within 48h after the Airdrop ends.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pad__item pad-main">
                  <div className="pad-main__header">
                    <img src="./img/crypto-logo.png" alt />
                    <h3>DOGEKING</h3>
                  </div>
                  <p className="pad-main__p">
                    DogeKing has a high DOGE reflex. There is no need to claim that we can all go to the moon. More major
                    marketing
                    will be launched soon. Please pay attention to us.
                  </p>
                  <img className="pad-main__img" src="./img/crypto-banner.jpg" alt />
                  <div className="social">
                    <a href="#">
                      <img src="./img/social/tg.svg" alt />
                    </a>
                    <a href="#">
                      <img src="./img/social/tw.svg" alt />
                    </a>
                    <a href="#">
                      <img src="./img/social/web.svg" alt />
                    </a>
                  </div>
                  <div className="pad-main__txt">
                    <h4>token</h4>
                    <ul className="pad-main__ul">
                      <li>
                        <span>Token:</span>
                        <span className="active-color">DogeKing (DOGEKING) </span>
                      </li>
                      <li>
                        <span>Type: </span>
                        <span className>Multi-Chain </span>
                      </li>
                      <li>
                        <span>Total Supply: </span>
                        <span className>1 000 000 000 000 000 DOGEKING </span>
                      </li>
                      <li>
                        <span>Market Cap: </span>
                        <span className="active-color">$54 110 611 </span>
                      </li>
                    </ul>
                    <h4>DISTRIBUTION</h4>
                    <ul className="pad-main__ul">
                      <li>
                        <span>Distribution:</span>
                        <span className>5-10 rounds (depends on apporve times) within 48h after the Airdrop ends. </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <div className="container">
              <div className="footer__top">
                <h2>
                  Want to launch your project on MultiChain?
                </h2>
                <a href="#" className="btn">
                  <img src="./img/rocket.png" alt />
                  <span> Apply to Launch</span>
                </a>
              </div>
              <div className="footer__body">
                <div className="footer__item">
                  Participants/Citizens from the following countries are strictly excluded/not allowed to participate in the IDOs:
                  Bolivia, Cambodia, Iran, Iraq, Libya, Nepal, Zimbabwe, Liberia, Myanmar, North Korea.
                </div>
                <div className="footer__item">
                  © Copyright MultiChain 2022. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </RainbowKitProvider>
    </WagmiConfig> 
  );
}
