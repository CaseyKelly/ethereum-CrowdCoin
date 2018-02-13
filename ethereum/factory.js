import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xAe46538dfFca2Fa58f66f9BcEF0F41cdf706Fa2A'
);

export default instance;
