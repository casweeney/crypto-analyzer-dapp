import "@covalenthq/goldrush-kit/styles.css";
import {
  GoldRushProvider,
  NFTWalletTokenListView,
  TokenBalancesListView,
  TokenTransfersListView,
  AddressActivityListView,
} from "@covalenthq/goldrush-kit";

function App() {
  return (
    <div className="container mt-4 mb-5">
      <GoldRushProvider apikey={process.env.REACT_APP_COVALENT_API_KEY} mode="dark" color="emerald">
          {/* <TokenBalancesListView
              chain_names={[
                  "eth-mainnet",
                  "matic-mainnet",
                  "bsc-mainnet",
                  "avalanche-mainnet",
                  "optimism-mainnet",
              ]}
              hide_small_balances
              address="0x65a465013862bCb3Ca8f8D7e06E86312A9d410d8"
          /> */}

          {/* <TokenTransfersListView
              chain_name="eth-mainnet"
              address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
              contract_address="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
          /> */}

          <AddressActivityListView address="0x65a465013862bCb3Ca8f8D7e06E86312A9d410d8" />
      </GoldRushProvider>
    </div>
  );
}

export default App;
