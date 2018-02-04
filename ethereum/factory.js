import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x861095CBE8F6015A436c5f92a7590BF77Ab9cB4f"
);

export default instance;
