/// <amd-module name="@scom/scom-lottery-results/assets.ts" />
declare module "@scom/scom-lottery-results/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-lottery-results/global/utils/common.ts" />
declare module "@scom/scom-lottery-results/global/utils/common.ts" {
    export interface ITokenObject {
        address?: string;
        name: string;
        decimals: number;
        symbol: string;
        status?: boolean | null;
        logoURI?: string;
        isCommon?: boolean | null;
        balance?: string | number;
        isNative?: boolean | null;
        isWETH?: boolean | null;
        isNew?: boolean | null;
    }
    export type TokenMapType = {
        [token: string]: ITokenObject;
    };
}
/// <amd-module name="@scom/scom-lottery-results/global/utils/helper.ts" />
declare module "@scom/scom-lottery-results/global/utils/helper.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    import { TokenMapType } from "@scom/scom-lottery-results/global/utils/common.ts";
    export enum SITE_ENV {
        DEV = "dev",
        TESTNET = "testnet",
        MAINNET = "mainnet"
    }
    export const explorerTxUrlsByChainId: {
        [key: number]: string;
    };
    export const explorerAddressUrlsByChainId: {
        [key: number]: string;
    };
    export const DefaultDateTimeFormat = "DD/MM/YYYY HH:mm:ss";
    export const DefaultDateFormat = "DD/MM/YYYY";
    export const formatDate: (date: any, customType?: string, showTimezone?: boolean) => string;
    export const formatUTCDate: (date: any, customType?: string, showTimezone?: boolean) => string;
    export const compareDate: (fromDate: any, toDate?: any) => boolean;
    export const formatNumber: (value: any, decimals?: number) => string;
    export const formatPercentNumber: (value: any, decimals?: number) => string;
    export const formatNumberWithSeparators: (value: number, precision?: number) => string;
    export const isValidNumber: (value: string | number) => boolean;
    export const isInvalidInput: (val: any) => boolean;
    export const limitInputNumber: (input: any, decimals?: number) => void;
    export const limitDecimals: (value: any, decimals: number) => any;
    export function getAPI(url: string, paramsObj?: any): Promise<any>;
    export const toWeiInv: (n: string, unit?: number) => BigNumber;
    export const padLeft: (string: string, chars: number, sign?: string) => string;
    export const numberToBytes32: (value: any, prefix?: string) => any;
    export const getParamsFromUrl: () => URLSearchParams;
    export const formatNumberValue: (data: any, tokenMap: TokenMapType) => any;
    export const uniqWith: (array: any[], compareFn: (cur: any, oth: any) => boolean) => any;
    export const getWeekDays: () => any[];
    export const renderBalanceTooltip: (params: any, tokenMap: TokenMapType, isBold?: boolean) => any;
    export const downloadJsonFile: (name: string, obj: any) => void;
    export const viewOnExplorerByTxHash: (chainId: number, txHash: string) => void;
    export const viewOnExplorerByAddress: (chainId: number, address: string) => void;
    export function isWalletAddress(address: string): boolean;
}
/// <amd-module name="@scom/scom-lottery-results/global/utils/error.ts" />
declare module "@scom/scom-lottery-results/global/utils/error.ts" {
    export function parseContractError(oMessage: string, tokens: string[]): Promise<string>;
}
/// <amd-module name="@scom/scom-lottery-results/global/utils/pageBlock.ts" />
declare module "@scom/scom-lottery-results/global/utils/pageBlock.ts" {
    export interface PageBlock {
        getData: () => any;
        setData: (data: any) => Promise<void>;
        getTag: () => any;
        setTag: (tag: any) => Promise<void>;
        validate?: () => boolean;
        defaultEdit?: boolean;
        tag?: any;
        readonly onEdit: () => Promise<void>;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        edit: () => Promise<void>;
        confirm: () => Promise<void>;
        discard: () => Promise<void>;
        config: () => Promise<void>;
    }
}
/// <amd-module name="@scom/scom-lottery-results/global/utils/interfaces.ts" />
declare module "@scom/scom-lottery-results/global/utils/interfaces.ts" {
    import { IWalletPlugin } from "@scom/scom-wallet-modal";
    import { ITokenObject } from "@scom/scom-lottery-results/global/utils/common.ts";
    export interface INetworkConfig {
        chainId: number;
        chainName?: string;
    }
    export interface IDefaultLotteryResults {
        wallets: IWalletPlugin[];
        networks: INetworkConfig[];
        tokens?: ITokenObject[];
        defaultChainId: number;
        showHeader?: boolean;
    }
    export interface ILotteryResults extends IDefaultLotteryResults {
        chainId?: number;
    }
}
/// <amd-module name="@scom/scom-lottery-results/global/utils/index.ts" />
declare module "@scom/scom-lottery-results/global/utils/index.ts" {
    export * from "@scom/scom-lottery-results/global/utils/helper.ts";
    export { parseContractError } from "@scom/scom-lottery-results/global/utils/error.ts";
    export { PageBlock } from "@scom/scom-lottery-results/global/utils/pageBlock.ts";
    export { ITokenObject, TokenMapType } from "@scom/scom-lottery-results/global/utils/common.ts";
    export * from "@scom/scom-lottery-results/global/utils/interfaces.ts";
}
/// <amd-module name="@scom/scom-lottery-results/global/index.ts" />
declare module "@scom/scom-lottery-results/global/index.ts" {
    import { INetwork } from '@ijstech/eth-wallet';
    export interface IExtendedNetwork extends INetwork {
        shortName?: string;
        isDisabled?: boolean;
        isMainChain?: boolean;
        isCrossChainSupported?: boolean;
        explorerName?: string;
        explorerTxUrl?: string;
        explorerAddressUrl?: string;
        isTestnet?: boolean;
        symbol?: string;
        env?: string;
    }
    export const enum EventId {
        ConnectWallet = "ConnectWallet",
        ChangeNetwork = "ChangeNetwork",
        IsWalletConnected = "isWalletConnected",
        IsWalletDisconnected = "IsWalletDisconnected",
        Paid = "Paid",
        chainChanged = "chainChanged",
        EmitNewToken = "emitNewToken"
    }
    export * from "@scom/scom-lottery-results/global/utils/index.ts";
}
/// <amd-module name="@scom/scom-lottery-results/store/utils.ts" />
declare module "@scom/scom-lottery-results/store/utils.ts" {
    import { IClientSideProvider } from '@ijstech/eth-wallet';
    import { IExtendedNetwork, SITE_ENV } from "@scom/scom-lottery-results/global/index.ts";
    export enum WalletPlugin {
        MetaMask = "metamask",
        Coin98 = "coin98",
        TrustWallet = "trustwallet",
        BinanceChainWallet = "binancechainwallet",
        ONTOWallet = "onto",
        WalletConnect = "walletconnect",
        BitKeepWallet = "bitkeepwallet",
        FrontierWallet = "frontierwallet"
    }
    export const nullAddress = "0x0000000000000000000000000000000000000000";
    export const INFINITE = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
    export const getSupportedNetworks: () => IExtendedNetwork[];
    export const getInfuraId: () => string;
    export const getSiteSupportedNetworks: () => IExtendedNetwork[];
    export const getNetworkInfo: (chainId: number) => IExtendedNetwork;
    export const setCurrentChainId: (value: number) => void;
    export const getCurrentChainId: () => number;
    export const setDataFromConfig: (options: any) => void;
    export function isWalletConnected(): boolean;
    export function switchNetwork(chainId: number): Promise<void>;
    export function getChainId(): number;
    export function getWalletProvider(): string;
    export const hasMetaMask: () => boolean;
    export const state: {
        siteEnv: SITE_ENV;
        networkMap: {
            [key: number]: IExtendedNetwork;
        };
        currentChainId: number;
        infuraId: string;
        walletPluginMap: Record<WalletPlugin, IClientSideProvider>;
        ipfsGatewayUrl: string;
        apiGatewayUrls: Record<string, string>;
    };
    export const setWalletPluginProvider: (walletPlugin: WalletPlugin, wallet: IClientSideProvider) => void;
    export const getWalletPluginMap: () => Record<WalletPlugin, IClientSideProvider>;
    export const getWalletPluginProvider: (walletPlugin: WalletPlugin) => IClientSideProvider;
    export const getNetworkExplorerName: (chainId: number) => string;
    export const getNetworkName: (chainId: number) => string;
    export const setIPFSGatewayUrl: (url: string) => void;
    export const getIPFSGatewayUrl: () => string;
    export const setAPIGatewayUrls: (urls: Record<string, string>) => void;
}
/// <amd-module name="@scom/scom-lottery-results/store/index.ts" />
declare module "@scom/scom-lottery-results/store/index.ts" {
    export const fallBackUrl: string;
    export const tokenSymbol: (address: string) => string;
    export * from "@scom/scom-lottery-results/store/utils.ts";
}
/// <amd-module name="@scom/scom-lottery-results/data.json.ts" />
declare module "@scom/scom-lottery-results/data.json.ts" {
    const _default_1: {
        infuraId: string;
        networks: ({
            chainId: number;
            isMainChain: boolean;
            isCrossChainSupported: boolean;
            explorerName: string;
            explorerTxUrl: string;
            explorerAddressUrl: string;
            isTestnet: boolean;
            shortName?: undefined;
        } | {
            chainId: number;
            shortName: string;
            isCrossChainSupported: boolean;
            explorerName: string;
            explorerTxUrl: string;
            explorerAddressUrl: string;
            isTestnet: boolean;
            isMainChain?: undefined;
        })[];
        proxyAddresses: {
            "97": string;
            "43113": string;
        };
        ipfsGatewayUrl: string;
        embedderCommissionFee: string;
        defaultBuilderData: {
            defaultChainId: number;
            chainId: number;
            networks: {
                chainId: number;
            }[];
            wallets: {
                name: string;
            }[];
        };
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-lottery-results/index.css.ts" />
declare module "@scom/scom-lottery-results/index.css.ts" {
    export const lotteryResultsComponent: string;
}
/// <amd-module name="@scom/scom-lottery-results" />
declare module "@scom/scom-lottery-results" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import { INetworkConfig, ITokenObject } from "@scom/scom-lottery-results/global/index.ts";
    import { IWalletPlugin } from '@scom/scom-wallet-modal';
    interface ScomLotteryResultsElement extends ControlElement {
        tokens?: ITokenObject[];
        defaultChainId: number;
        networks: INetworkConfig[];
        wallets: IWalletPlugin[];
        showHeader?: boolean;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-lottery-results']: ScomLotteryResultsElement;
            }
        }
    }
    export default class ScomLotteryResults extends Module {
        private _data;
        tag: any;
        defaultEdit: boolean;
        readonly onEdit: () => Promise<void>;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        private $eventBus;
        private loadingElm;
        private lotteryElm;
        private pnlLotteryResults;
        private dappContainer;
        private hStackNumbers;
        private inputRound;
        private icPrev;
        private icNext;
        private icLast;
        private vStackDetail;
        private lbToggleDetail;
        private iconToggleDetail;
        private isDetailShown;
        private totalRounds;
        private currentRound;
        get defaultChainId(): number;
        set defaultChainId(value: number);
        get wallets(): IWalletPlugin[];
        set wallets(value: IWalletPlugin[]);
        get networks(): INetworkConfig[];
        set networks(value: INetworkConfig[]);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        private getActions;
        private _getActions;
        getConfigurators(): {
            name: string;
            target: string;
            getActions: any;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        }[];
        private getData;
        private setData;
        private getTag;
        private setTag;
        private updateTag;
        private updateStyle;
        private updateTheme;
        constructor(parent?: Container, options?: ControlElement);
        private registerEvent;
        private onChainChange;
        private onSetupPage;
        private getRoundResult;
        private onPrev;
        private onNext;
        private onLast;
        private onInputRound;
        private renderNumbers;
        private updateArrows;
        private onToggleDetail;
        init(): Promise<void>;
        render(): any;
    }
}
