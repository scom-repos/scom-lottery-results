import { IWalletPlugin } from "@scom/scom-wallet-modal";
import { ITokenObject } from "./common";

export interface INetworkConfig {
  chainId: number;
  chainName?: string;
}

export interface IDefaultLotteryResults {
  wallets: IWalletPlugin[],
  networks: INetworkConfig[],
  tokens?: ITokenObject[],
  defaultChainId: number,
  showHeader?: boolean
}

export interface ILotteryResults extends IDefaultLotteryResults {
  chainId?: number
}