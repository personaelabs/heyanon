import { ethers } from "ethers";

declare let window: any;
let signer: any, provider: any, network: any;

function changeNetworkName(network: any) {
  switch (network.chainId) {
    case 1:
      network.name = "mainnet";
      return network;
    default:
      return network;
  }
}

export async function setupWeb3() {
  console.log("Attempting to set up web3");
  provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log(provider);
  await provider.send("eth_requestAccounts", []);
  const currentNetwork = await provider.getNetwork();
  provider.on("network", (newNetwork: any, oldNetwork: any) => {
    if (oldNetwork) {
      window.location.reload();
      network = changeNetworkName(newNetwork);
    }
  });
  const signer = provider.getSigner();
  return { provider, signer, network: changeNetworkName(currentNetwork) };
}

const DOMAIN = {
  name: "heyanon",
  version: "1",
  chainId: 1,
  verifyingContract: "0x0000000000000000000000000000000000000000",
};
const TYPES = {
  Message: [
    { name: "platform", type: "string" },
    { name: "type", type: "string" },
    { name: "contents", type: "string" },
  ],
};

export const getProvider = () => provider;
export const getSigner = () => signer;
export const getNetwork = () => network;
