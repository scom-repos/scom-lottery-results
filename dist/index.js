var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-lottery-results/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        if (path.indexOf('://') > 0)
            return path;
        return `${moduleDir}/${path}`;
    }
    exports.default = {
        fullPath
    };
});
define("@scom/scom-lottery-results/global/utils/common.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
});
define("@scom/scom-lottery-results/global/utils/helper.ts", ["require", "exports", "@ijstech/eth-wallet", "@ijstech/components"], function (require, exports, eth_wallet_1, components_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isWalletAddress = exports.viewOnExplorerByAddress = exports.viewOnExplorerByTxHash = exports.downloadJsonFile = exports.renderBalanceTooltip = exports.getWeekDays = exports.uniqWith = exports.formatNumberValue = exports.getParamsFromUrl = exports.numberToBytes32 = exports.padLeft = exports.toWeiInv = exports.getAPI = exports.limitDecimals = exports.limitInputNumber = exports.isInvalidInput = exports.isValidNumber = exports.formatNumberWithSeparators = exports.formatPercentNumber = exports.formatNumber = exports.compareDate = exports.formatUTCDate = exports.formatDate = exports.DefaultDateFormat = exports.DefaultDateTimeFormat = exports.explorerAddressUrlsByChainId = exports.explorerTxUrlsByChainId = exports.SITE_ENV = void 0;
    var SITE_ENV;
    (function (SITE_ENV) {
        SITE_ENV["DEV"] = "dev";
        SITE_ENV["TESTNET"] = "testnet";
        SITE_ENV["MAINNET"] = "mainnet";
    })(SITE_ENV = exports.SITE_ENV || (exports.SITE_ENV = {}));
    exports.explorerTxUrlsByChainId = {
        1: 'https://etherscan.io/tx/',
        4: 'https://rinkeby.etherscan.io/tx/',
        42: 'https://kovan.etherscan.io/tx/',
        56: 'https://bscscan.com/tx/',
        97: 'https://testnet.bscscan.com/tx/',
        43113: 'https://testnet.snowtrace.io/tx/',
        43114: 'https://snowtrace.io/tx/',
        137: 'https://polygonscan.com/tx/',
        80001: 'https://mumbai.polygonscan.com/tx/',
        250: 'https://ftmscan.com/tx/',
        4002: 'https://testnet.ftmscan.com/tx/',
        13370: 'https://aminoxtestnet.blockscout.alphacarbon.network/tx/',
        421613: 'https://goerli.arbiscan.io/tx/'
    };
    exports.explorerAddressUrlsByChainId = {
        1: 'https://etherscan.io/address/',
        4: 'https://rinkeby.etherscan.io/address/',
        42: 'https://kovan.etherscan.io/address/',
        97: 'https://testnet.bscscan.com/address/',
        56: 'https://bscscan.com/address/',
        43113: 'https://testnet.snowtrace.io/address/',
        43114: 'https://snowtrace.io/address/',
        137: 'https://polygonscan.com/address/',
        80001: 'https://mumbai.polygonscan.com/address/',
        250: 'https://ftmscan.com/address/',
        4002: 'https://testnet.ftmscan.com/address/',
        13370: 'https://aminoxtestnet.blockscout.alphacarbon.network/address/',
        421613: 'https://goerli.arbiscan.io/address/'
    };
    exports.DefaultDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';
    exports.DefaultDateFormat = 'DD/MM/YYYY';
    const formatDate = (date, customType, showTimezone) => {
        const formatType = customType || exports.DefaultDateFormat;
        const formatted = components_2.moment(date).format(formatType);
        if (showTimezone) {
            return `${formatted} (UTC+${components_2.moment().utcOffset() / 60})`;
        }
        return formatted;
    };
    exports.formatDate = formatDate;
    const formatUTCDate = (date, customType, showTimezone) => {
        const formatType = customType || exports.DefaultDateFormat;
        const formatted = components_2.moment(date).utc().format(formatType);
        return showTimezone ? `${formatted} (UTC)` : formatted;
    };
    exports.formatUTCDate = formatUTCDate;
    const compareDate = (fromDate, toDate) => {
        if (!toDate) {
            toDate = components_2.moment();
        }
        return components_2.moment(fromDate).isSameOrBefore(toDate);
    };
    exports.compareDate = compareDate;
    const formatNumber = (value, decimals) => {
        let val = value;
        const minValue = '0.0000001';
        if (typeof value === 'string') {
            val = new eth_wallet_1.BigNumber(value).toNumber();
        }
        else if (typeof value === 'object') {
            val = value.toNumber();
        }
        if (val != 0 && new eth_wallet_1.BigNumber(val).lt(minValue)) {
            return `<${minValue}`;
        }
        return exports.formatNumberWithSeparators(val, decimals || 4);
    };
    exports.formatNumber = formatNumber;
    const formatPercentNumber = (value, decimals) => {
        let val = value;
        if (typeof value === 'string') {
            val = new eth_wallet_1.BigNumber(value).toNumber();
        }
        else if (typeof value === 'object') {
            val = value.toNumber();
        }
        return exports.formatNumberWithSeparators(val, decimals || 2);
    };
    exports.formatPercentNumber = formatPercentNumber;
    const formatNumberWithSeparators = (value, precision) => {
        if (!value)
            value = 0;
        if (precision) {
            let outputStr = '';
            if (value >= 1) {
                outputStr = value.toLocaleString('en-US', { maximumFractionDigits: precision });
            }
            else {
                outputStr = value.toLocaleString('en-US', { maximumSignificantDigits: precision });
            }
            if (outputStr.length > 18) {
                outputStr = outputStr.substr(0, 18) + '...';
            }
            return outputStr;
            // let parts = parseFloat(value.toPrecision(precision)).toString().split(".");
            // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return parts.join(".");
        }
        else {
            return value.toLocaleString('en-US');
            // let parts = value.toString().split(".");
            // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return parts.join(".");
        }
    };
    exports.formatNumberWithSeparators = formatNumberWithSeparators;
    const isValidNumber = (value) => {
        const val = new eth_wallet_1.BigNumber(value);
        return val.gte(0);
    };
    exports.isValidNumber = isValidNumber;
    const isInvalidInput = (val) => {
        const value = new eth_wallet_1.BigNumber(val);
        if (value.lt(0))
            return true;
        return (val || '').toString().substring(0, 2) === '00' || val === '-';
    };
    exports.isInvalidInput = isInvalidInput;
    const limitInputNumber = (input, decimals) => {
        const amount = input.value;
        if (exports.isInvalidInput(amount)) {
            input.value = '0';
            return;
        }
        if (!new eth_wallet_1.BigNumber(amount).isNaN()) {
            input.value = exports.limitDecimals(amount, decimals || 18);
        }
    };
    exports.limitInputNumber = limitInputNumber;
    const limitDecimals = (value, decimals) => {
        let val = value;
        if (typeof value !== 'string') {
            val = val.toString();
        }
        let chart;
        if (val.includes('.')) {
            chart = '.';
        }
        else if (val.includes(',')) {
            chart = ',';
        }
        else {
            return value;
        }
        const parts = val.split(chart);
        let decimalsPart = parts[1];
        if (decimalsPart && decimalsPart.length > decimals) {
            parts[1] = decimalsPart.substr(0, decimals);
        }
        return parts.join(chart);
    };
    exports.limitDecimals = limitDecimals;
    async function getAPI(url, paramsObj) {
        let queries = '';
        if (paramsObj) {
            try {
                queries = new URLSearchParams(paramsObj).toString();
            }
            catch (err) {
                console.log('err', err);
            }
        }
        let fullURL = url + (queries ? `?${queries}` : '');
        const response = await fetch(fullURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response.json();
    }
    exports.getAPI = getAPI;
    const toWeiInv = (n, unit) => {
        if (new eth_wallet_1.BigNumber(n).eq(0))
            return new eth_wallet_1.BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
        return new eth_wallet_1.BigNumber('1').shiftedBy((unit || 18) * 2).idiv(new eth_wallet_1.BigNumber(n).shiftedBy(unit || 18));
    };
    exports.toWeiInv = toWeiInv;
    const padLeft = function (string, chars, sign) {
        return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
    };
    exports.padLeft = padLeft;
    const numberToBytes32 = (value, prefix) => {
        if (!value)
            return;
        let v = value;
        if (typeof value == "number") {
            // covert to a hex string
            v = value.toString(16);
        }
        else if (/^[0-9]*$/.test(value)) {
            // assuming value to be a decimal number, value could be a hex
            v = new eth_wallet_1.BigNumber(value).toString(16);
        }
        else if (/^(0x)?[0-9A-Fa-f]*$/.test(value)) {
            // value already a hex
            v = value;
        }
        else if (eth_wallet_1.BigNumber.isBigNumber(value)) {
            v = value.toString(16);
        }
        v = v.replace("0x", "");
        v = exports.padLeft(v, 64);
        if (prefix)
            v = '0x' + v;
        return v;
    };
    exports.numberToBytes32 = numberToBytes32;
    const getParamsFromUrl = () => {
        const startIdx = window.location.href.indexOf("?");
        const search = window.location.href.substring(startIdx, window.location.href.length);
        const queryString = search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams;
    };
    exports.getParamsFromUrl = getParamsFromUrl;
    const formatNumberValue = (data, tokenMap) => {
        const { title, value, symbol, icon, prefix, isWrapped } = data;
        try {
            let limitDecimals = 18;
            if (symbol) {
                let symb = symbol;
                if (symb.includes('/')) {
                    symb = symb.split('/')[0];
                }
                if (symbol === 'USD') {
                    limitDecimals = 2;
                }
                else {
                    const tokenObj = Object.values(tokenMap).find((token) => token.symbol === symb);
                    if (tokenObj) {
                        limitDecimals = tokenObj.decimals || 18;
                    }
                }
            }
            const val = parseFloat(value);
            const minValue = 0.0001;
            let result;
            let tooltip = `${value}`;
            if (val === 0) {
                result = `0`;
            }
            else if (val < minValue) {
                if (prefix === '$') {
                    result = `< ${prefix}${minValue}`;
                }
                else if (prefix) {
                    result = `${prefix.replace('=', '')} < ${minValue}`;
                }
                else {
                    result = `< ${minValue}`;
                }
                tooltip = val.toLocaleString('en-US', { maximumFractionDigits: limitDecimals });
            }
            else {
                const stringValue = value.toString();
                const decimalsIndex = stringValue.indexOf('.');
                const length = decimalsIndex < 0 ? stringValue.length : stringValue.length - 1;
                let valueFormatted = val.toLocaleString('en-US', { maximumFractionDigits: limitDecimals });
                const arr = valueFormatted.split('.');
                valueFormatted = arr[0];
                if (arr[1]) {
                    valueFormatted = `${arr[0]}.${arr[1].substr(0, 4)}`;
                }
                if (length <= 7) {
                    result = valueFormatted;
                }
                else if (decimalsIndex > 7) {
                    result = `${valueFormatted.substr(0, 9)}...`;
                }
                else if (decimalsIndex > -1) {
                    result = valueFormatted;
                }
                else {
                    const finalVal = valueFormatted.substr(0, 13);
                    result = `${finalVal}${length > 10 ? '...' : ''}`;
                }
                if (result.length > 20 && !result.includes('...')) {
                    result = `${result.substr(0, 13)}...`;
                }
                // Format value for the tooltip
                const parts = stringValue.split('.');
                const intVal = parseInt(parts[0]).toLocaleString('en-US');
                tooltip = `${intVal}`;
                if (parts[1]) {
                    let decVal = parts[1];
                    if (parts[1].length > limitDecimals) {
                        decVal = parseFloat(`0.${parts[1]}`).toLocaleString('en-US', { maximumFractionDigits: limitDecimals });
                        if (decVal == 1) {
                            decVal = parts[1].substr(0, limitDecimals);
                        }
                        else {
                            decVal = decVal.substr(2);
                        }
                    }
                    tooltip += `.${decVal}`;
                }
            }
            if (icon) {
                result += ` <img width="20" src="${icon}" style="padding-bottom: 0.15rem" />`;
            }
            if (symbol) {
                result += ` ${symbol}`;
                tooltip += ` ${symbol}`;
            }
            if (prefix) {
                result = `${val < minValue ? '' : prefix}${result}`;
                tooltip = `${prefix}${tooltip}`;
            }
            if (title) {
                result = `${title}: ${result}`;
            }
            if (isWrapped) {
                result = `(${result})`;
            }
            if (symbol === 'USD') {
                return result;
            }
            else {
                return { result, tooltip };
            }
        }
        catch (_a) {
            return '-';
        }
    };
    exports.formatNumberValue = formatNumberValue;
    const uniqWith = (array, compareFn) => {
        const unique = [];
        for (const cur of array) {
            const isDuplicate = unique.some((oth) => compareFn(cur, oth));
            if (!isDuplicate)
                unique.push(cur);
        }
        return unique;
    };
    exports.uniqWith = uniqWith;
    const getWeekDays = () => {
        const d = new Date();
        d.setDate(d.getDate() - 7);
        let days = [];
        let day = d;
        for (let i = 0; i < 7; i++) {
            days.push(day.setDate(day.getDate() + 1));
        }
        return days;
    };
    exports.getWeekDays = getWeekDays;
    const renderBalanceTooltip = (params, tokenMap, isBold) => {
        const data = exports.formatNumberValue(params, tokenMap);
        if (typeof data === "object") {
            const { result, tooltip } = data;
            if (isBold) {
                return `<i-label class="bold" tooltip='${JSON.stringify({ content: tooltip })}'>${result}</i-label>`;
            }
            return `<i-label tooltip='${JSON.stringify({ content: tooltip })}'>${result}</i-label>`;
        }
        return data;
    };
    exports.renderBalanceTooltip = renderBalanceTooltip;
    const replacer = (key, value) => {
        if (['minLockTime', 'campaignStart', 'campaignEnd', 'perAddressCap', 'maxTotalLock', 'multiplier', 'initialReward', 'vestingPeriod', 'claimDeadline', 'vestingStartDate', 'rewardAmount', 'value'].includes(key)) {
            const val = Number(value);
            return isNaN(val) ? value : val;
        }
        return value;
    };
    const downloadJsonFile = (name, obj) => {
        const link = document.createElement("a");
        const text = JSON.stringify(obj, replacer, 2);
        link.download = name;
        const jsonContent = `data:application/json;charset=utf-8,${encodeURIComponent(text)}`;
        link.href = jsonContent;
        link.click();
    };
    exports.downloadJsonFile = downloadJsonFile;
    const viewOnExplorerByTxHash = (chainId, txHash) => {
        if (exports.explorerTxUrlsByChainId[chainId]) {
            let url = `${exports.explorerTxUrlsByChainId[chainId]}${txHash}`;
            window.open(url);
        }
    };
    exports.viewOnExplorerByTxHash = viewOnExplorerByTxHash;
    const viewOnExplorerByAddress = (chainId, address) => {
        if (exports.explorerAddressUrlsByChainId[chainId]) {
            let url = `${exports.explorerAddressUrlsByChainId[chainId]}${address}`;
            window.open(url);
        }
    };
    exports.viewOnExplorerByAddress = viewOnExplorerByAddress;
    function isWalletAddress(address) {
        return /^0x[a-fA-F0-9]{40}$/.test(address);
    }
    exports.isWalletAddress = isWalletAddress;
});
define("@scom/scom-lottery-results/global/utils/error.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseContractError = void 0;
    ///<amd-module name='@scom/scom-lottery-results/global/utils/error.ts'/> 
    async function parseContractError(oMessage, tokens) {
        var _a;
        const staticMessageMap = {
            'execution reverted: OAXDEX: K': 'x * y = k Violated',
            'execution reverted: OAXDEX: FORBIDDEN': 'Forbidden',
            'execution reverted: OAXDEX: INSUFFICIENT_INPUT_AMOUNT': 'Insufficient input amount',
            'execution reverted: OAXDEX: INVALID_TO': 'Invalid to',
            'execution reverted: OAXDEX: INSUFFICIENT_LIQUIDITY': 'Insufficient liquidity',
            'execution reverted: OAXDEX: INSUFFICIENT_OUTPUT_AMOUNT': 'Insufficient output amount',
            'execution reverted: OAXDEX: PAIR PAUSED': 'Pair paused',
            'execution reverted: OAXDEX: GLOBALLY PAUSED': 'Globally paused',
            'execution reverted: OAXDEX: INSUFFICIENT_LIQUIDITY_BURNED': 'Insufficient liquidity burned',
            'execution reverted: OAXDEX: INSUFFICIENT_LIQUIDITY_MINTED': 'Insufficient liquidity minted',
            'execution reverted: OAXDEX: OVERFLOW': 'Overflow',
            'execution reverted: OAXDEX_Pair: INSUFFICIENT_LIQUIDITY': 'Insufficient liquidity',
            'execution reverted: OAXDEX_Pair: INSUFFICIENT_OUTPUT_AMOUNT': 'Insufficient output amount',
            'execution reverted: OAXDEX_Pair: INSUFFICIENT_INPUT_AMOUNT': 'Insufficient input amount',
            'execution reverted: OAXDEX: LOCKED': 'Locked',
            'execution reverted: OAXDEX: INVALID_SIGNATURE': 'Invalid signature',
            'execution reverted: OAXDEX: EXPIRED': 'Expired',
            'MetaMask Tx Signature: User denied transaction signature.': 'User denied transaction signature',
            'execution reverted: OracleAdaptor: Price outside allowed range': 'Circuit Breaker: Exceeds Price Protection Range',
            'execution reverted: PAIR_NOT_MATCH': 'Pair Not Match',
            'execution reverted: Cap exceeded': 'Trolls have been sold out',
            'execution reverted: No oracle found': 'No Oracle found',
            'execution reverted: Amount exceeds available fund': 'Insufficient liquidity',
        };
        return (_a = staticMessageMap[oMessage]) !== null && _a !== void 0 ? _a : `Unknown Error: ${oMessage}`;
    }
    exports.parseContractError = parseContractError;
});
define("@scom/scom-lottery-results/global/utils/pageBlock.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-lottery-results/global/utils/interfaces.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-lottery-results/global/utils/index.ts", ["require", "exports", "@scom/scom-lottery-results/global/utils/helper.ts", "@scom/scom-lottery-results/global/utils/error.ts", "@scom/scom-lottery-results/global/utils/interfaces.ts"], function (require, exports, helper_1, error_1, interfaces_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseContractError = void 0;
    ///<amd-module name='@scom/scom-lottery-results/global/utils/index.ts'/> 
    __exportStar(helper_1, exports);
    Object.defineProperty(exports, "parseContractError", { enumerable: true, get: function () { return error_1.parseContractError; } });
    __exportStar(interfaces_1, exports);
});
define("@scom/scom-lottery-results/global/index.ts", ["require", "exports", "@scom/scom-lottery-results/global/utils/index.ts"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
    __exportStar(index_1, exports);
});
define("@scom/scom-lottery-results/store/utils.ts", ["require", "exports", "@ijstech/eth-wallet", "@scom/scom-lottery-results/global/index.ts", "@scom/scom-network-list", "@ijstech/components"], function (require, exports, eth_wallet_2, index_2, scom_network_list_1, components_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setAPIGatewayUrls = exports.getIPFSGatewayUrl = exports.setIPFSGatewayUrl = exports.getNetworkName = exports.getNetworkExplorerName = exports.getWalletPluginProvider = exports.getWalletPluginMap = exports.setWalletPluginProvider = exports.state = exports.hasMetaMask = exports.getWalletProvider = exports.getChainId = exports.switchNetwork = exports.isWalletConnected = exports.setDataFromConfig = exports.getCurrentChainId = exports.setCurrentChainId = exports.getNetworkInfo = exports.getSiteSupportedNetworks = exports.getInfuraId = exports.getSupportedNetworks = exports.INFINITE = exports.nullAddress = exports.WalletPlugin = void 0;
    var WalletPlugin;
    (function (WalletPlugin) {
        WalletPlugin["MetaMask"] = "metamask";
        WalletPlugin["Coin98"] = "coin98";
        WalletPlugin["TrustWallet"] = "trustwallet";
        WalletPlugin["BinanceChainWallet"] = "binancechainwallet";
        WalletPlugin["ONTOWallet"] = "onto";
        WalletPlugin["WalletConnect"] = "walletconnect";
        WalletPlugin["BitKeepWallet"] = "bitkeepwallet";
        WalletPlugin["FrontierWallet"] = "frontierwallet";
    })(WalletPlugin = exports.WalletPlugin || (exports.WalletPlugin = {}));
    exports.nullAddress = "0x0000000000000000000000000000000000000000";
    exports.INFINITE = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
    const getSupportedNetworks = () => {
        return Object.values(exports.state.networkMap);
    };
    exports.getSupportedNetworks = getSupportedNetworks;
    const setInfuraId = (infuraId) => {
        exports.state.infuraId = infuraId;
    };
    const getInfuraId = () => {
        return exports.state.infuraId;
    };
    exports.getInfuraId = getInfuraId;
    const getSiteSupportedNetworks = () => {
        let networkFullList = Object.values(exports.state.networkMap);
        let list = networkFullList.filter(network => !exports.getNetworkInfo(network.chainId).isDisabled);
        return list;
    };
    exports.getSiteSupportedNetworks = getSiteSupportedNetworks;
    const setNetworkList = (networkList, infuraId) => {
        const wallet = eth_wallet_2.Wallet.getClientInstance();
        exports.state.networkMap = {};
        const defaultNetworkList = scom_network_list_1.default();
        const defaultNetworkMap = defaultNetworkList.reduce((acc, cur) => {
            acc[cur.chainId] = cur;
            return acc;
        }, {});
        for (let network of networkList) {
            const networkInfo = defaultNetworkMap[network.chainId];
            if (!networkInfo)
                continue;
            if (infuraId && network.rpcUrls && network.rpcUrls.length > 0) {
                for (let i = 0; i < network.rpcUrls.length; i++) {
                    network.rpcUrls[i] = network.rpcUrls[i].replace(/{InfuraId}/g, infuraId);
                }
            }
            exports.state.networkMap[network.chainId] = Object.assign(Object.assign({}, networkInfo), network);
            wallet.setNetworkInfo(exports.state.networkMap[network.chainId]);
        }
    };
    const getNetworkInfo = (chainId) => {
        return exports.state.networkMap[chainId];
    };
    exports.getNetworkInfo = getNetworkInfo;
    const setCurrentChainId = (value) => {
        exports.state.currentChainId = value;
    };
    exports.setCurrentChainId = setCurrentChainId;
    const getCurrentChainId = () => {
        return exports.state.currentChainId;
    };
    exports.getCurrentChainId = getCurrentChainId;
    const setDataFromConfig = (options) => {
        if (options.infuraId) {
            setInfuraId(options.infuraId);
        }
        if (options.networks) {
            setNetworkList(options.networks, options.infuraId);
        }
        if (options.ipfsGatewayUrl) {
            exports.setIPFSGatewayUrl(options.ipfsGatewayUrl);
        }
        if (options.apiGatewayUrls) {
            exports.setAPIGatewayUrls(options.apiGatewayUrls);
        }
    };
    exports.setDataFromConfig = setDataFromConfig;
    function isWalletConnected() {
        const wallet = eth_wallet_2.Wallet.getClientInstance();
        return wallet.isConnected;
    }
    exports.isWalletConnected = isWalletConnected;
    async function switchNetwork(chainId) {
        var _a;
        if (!isWalletConnected()) {
            exports.setCurrentChainId(chainId);
            eth_wallet_2.Wallet.getClientInstance().chainId = chainId;
            components_3.application.EventBus.dispatch("chainChanged" /* chainChanged */, chainId);
            return;
        }
        const wallet = eth_wallet_2.Wallet.getClientInstance();
        if (((_a = wallet === null || wallet === void 0 ? void 0 : wallet.clientSideProvider) === null || _a === void 0 ? void 0 : _a.name) === WalletPlugin.MetaMask) {
            await wallet.switchNetwork(chainId);
        }
    }
    exports.switchNetwork = switchNetwork;
    function getChainId() {
        return isWalletConnected() ? eth_wallet_2.Wallet.getClientInstance().chainId : exports.state.currentChainId;
    }
    exports.getChainId = getChainId;
    function getWalletProvider() {
        return localStorage.getItem('walletProvider') || '';
    }
    exports.getWalletProvider = getWalletProvider;
    const hasMetaMask = function () {
        const provider = exports.getWalletPluginProvider(WalletPlugin.MetaMask);
        return provider === null || provider === void 0 ? void 0 : provider.installed();
    };
    exports.hasMetaMask = hasMetaMask;
    exports.state = {
        siteEnv: index_2.SITE_ENV.TESTNET,
        networkMap: {},
        currentChainId: 0,
        infuraId: '',
        walletPluginMap: {},
        ipfsGatewayUrl: '',
        apiGatewayUrls: {}
    };
    const setWalletPluginProvider = (walletPlugin, wallet) => {
        exports.state.walletPluginMap[walletPlugin] = wallet;
    };
    exports.setWalletPluginProvider = setWalletPluginProvider;
    const getWalletPluginMap = () => {
        return exports.state.walletPluginMap;
    };
    exports.getWalletPluginMap = getWalletPluginMap;
    const getWalletPluginProvider = (walletPlugin) => {
        return exports.state.walletPluginMap[walletPlugin];
    };
    exports.getWalletPluginProvider = getWalletPluginProvider;
    const getNetworkExplorerName = (chainId) => {
        if (exports.getNetworkInfo(chainId)) {
            return exports.getNetworkInfo(chainId).explorerName;
        }
        return 'Unknown';
    };
    exports.getNetworkExplorerName = getNetworkExplorerName;
    const getNetworkName = (chainId) => {
        var _a;
        return ((_a = exports.getSiteSupportedNetworks().find(v => v.chainId === chainId)) === null || _a === void 0 ? void 0 : _a.chainName) || '';
    };
    exports.getNetworkName = getNetworkName;
    const setIPFSGatewayUrl = (url) => {
        exports.state.ipfsGatewayUrl = url;
    };
    exports.setIPFSGatewayUrl = setIPFSGatewayUrl;
    const getIPFSGatewayUrl = () => {
        return exports.state.ipfsGatewayUrl;
    };
    exports.getIPFSGatewayUrl = getIPFSGatewayUrl;
    const setAPIGatewayUrls = (urls) => {
        exports.state.apiGatewayUrls = urls;
    };
    exports.setAPIGatewayUrls = setAPIGatewayUrls;
});
define("@scom/scom-lottery-results/store/index.ts", ["require", "exports", "@scom/scom-lottery-results/assets.ts", "@scom/scom-token-list", "@scom/scom-lottery-results/store/utils.ts"], function (require, exports, assets_1, scom_token_list_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tokenSymbol = exports.fallBackUrl = void 0;
    exports.fallBackUrl = assets_1.default.fullPath('img/tokens/token-placeholder.svg');
    const tokenSymbol = (address) => {
        if (!address)
            return '';
        const tokenMap = scom_token_list_1.tokenStore.tokenMap;
        let tokenObject = tokenMap[address.toLowerCase()];
        if (!tokenObject) {
            tokenObject = tokenMap[address];
        }
        return tokenObject ? tokenObject.symbol : '';
    };
    exports.tokenSymbol = tokenSymbol;
    __exportStar(utils_1, exports);
});
define("@scom/scom-lottery-results/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-lottery-results/data.json.ts'/> 
    exports.default = {
        "infuraId": "adc596bf88b648e2a8902bc9093930c5",
        "networks": [
            {
                "chainId": 97,
                "isMainChain": true,
                "isCrossChainSupported": true,
                "explorerName": "BSCScan",
                "explorerTxUrl": "https://testnet.bscscan.com/tx/",
                "explorerAddressUrl": "https://testnet.bscscan.com/address/",
                "isTestnet": true
            },
            {
                "chainId": 43113,
                "shortName": "AVAX Testnet",
                "isCrossChainSupported": true,
                "explorerName": "SnowTrace",
                "explorerTxUrl": "https://testnet.snowtrace.io/tx/",
                "explorerAddressUrl": "https://testnet.snowtrace.io/address/",
                "isTestnet": true
            }
        ],
        "proxyAddresses": {
            "97": "0x9602cB9A782babc72b1b6C96E050273F631a6870",
            "43113": "0x7f1EAB0db83c02263539E3bFf99b638E61916B96"
        },
        "ipfsGatewayUrl": "https://ipfs.scom.dev/ipfs/",
        "embedderCommissionFee": "0.01",
        "defaultBuilderData": {
            "defaultChainId": 43113,
            "chainId": 43113,
            "networks": [
                {
                    "chainId": 43113
                },
                {
                    "chainId": 97
                }
            ],
            "wallets": [
                {
                    "name": "metamask"
                }
            ]
        }
    };
});
define("@scom/scom-lottery-results/index.css.ts", ["require", "exports", "@ijstech/components", "@scom/scom-lottery-results/assets.ts"], function (require, exports, components_4, assets_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lotteryResultsComponent = void 0;
    const Theme = components_4.Styles.Theme.ThemeVars;
    const colorVar = {
        primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
        primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
        darkBg: '#181E3E 0% 0% no-repeat padding-box',
        primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
    };
    components_4.Styles.fontFace({
        fontFamily: "Apple SD Gothic Neo",
        src: `url("${assets_2.default.fullPath('fonts/FontsFree-Net-Apple-SD-Gothic-Neo-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Montserrat Regular",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Montserrat Bold",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Montserrat Light",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Montserrat Medium",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Montserrat SemiBold",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Raleway Regular",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Raleway Bold",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Raleway Light",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Raleway Medium",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_4.Styles.fontFace({
        fontFamily: "Raleway SemiBold",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    exports.lotteryResultsComponent = components_4.Styles.style({
        background: Theme.background.main,
        $nest: {
            'i-label': {
                fontFamily: 'Montserrat Regular',
            },
            'span': {
                letterSpacing: '0.15px',
            },
            '.i-loading-overlay': {
                background: '#0c1234',
            },
            '.overflow-inherit': {
                overflow: 'inherit',
            },
            '::selection': {
                color: '#fff',
                background: '#1890ff'
            },
            '.btn-os': {
                background: colorVar.primaryButton,
                height: 'auto !important',
                color: '#fff',
                transition: 'background .3s ease',
                fontSize: '1rem',
                fontWeight: 'bold',
                fontFamily: 'Raleway Bold',
                $nest: {
                    'i-icon.loading-icon': {
                        marginInline: '0.25rem',
                        width: '16px !important',
                        height: '16px !important',
                    },
                },
            },
            '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
                background: colorVar.primaryGradient,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                opacity: .9
            },
            '.btn-os:not(.disabled):not(.is-spinning):focus': {
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
            },
            '.btn-os.disabled, .btn-os.is-spinning': {
                background: colorVar.primaryDisabled,
                opacity: 1
            },
            '.dark-bg, .dark-modal > div > div': {
                background: colorVar.darkBg,
                borderRadius: 5
            },
            '.btn-transparent, .btn-transparent:not(.disabled):focus, .btn-transparent:not(.disabled):hover': {
                background: 'transparent',
                boxShadow: 'none',
                backgroundColor: 'transparent'
            },
            '.hidden': {
                display: 'none !important'
            },
            '.no-wrap': {
                whiteSpace: 'nowrap'
            },
            '.flex-nowrap': {
                flexWrap: 'nowrap',
            },
            '.align-middle': {
                alignItems: 'center'
            },
            '.lottery-layout': {
                width: '100%',
                marginInline: 'auto',
                overflow: 'hidden'
            },
            '.group-icons i-icon': {
                cursor: 'pointer',
                $nest: {
                    '&.disabled': {
                        cursor: 'default',
                        opacity: 0.7
                    },
                    '&:hover': {
                        opacity: 0.85
                    }
                }
            },
            '.group-matches': {
                $nest: {
                    'i-vstack': {
                        marginBottom: 'auto',
                        minWidth: 150
                    }
                }
            },
            '.result-numbers': {
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            },
            '.toggle-detail': {
                cursor: 'pointer',
                $nest: {
                    '&:hover': {
                        opacity: 0.75
                    },
                    svg: {
                        fill: Theme.colors.primary.main
                    }
                }
            },
            'i-input input': {
                border: 'none',
                borderRadius: 10,
                color: Theme.text.primary,
                textAlign: 'center',
                fontSize: '1.125rem',
                padding: '0.25rem'
            },
            '.text-overflow': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            '.input-disabled': {
                opacity: 0.4,
                cursor: 'default',
                $nest: {
                    '*': {
                        cursor: 'default',
                    }
                }
            },
            '#importFileErrModal': {
                $nest: {
                    '.modal': {
                        borderRadius: 12,
                    },
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: `2px solid #F15E61`,
                        color: '#F15E61',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                    },
                    '.i-modal_header > i-icon': {
                        fill: `#F15E61 !important`
                    },
                    '#importFileErr span': {
                        fontSize: '16px !important'
                    }
                }
            },
            'i-modal .modal': {
                background: '#192046',
            },
            '#loadingElm.i-loading--active': {
                marginTop: '2rem',
                position: 'initial',
                $nest: {
                    '#lotteryElm': {
                        display: 'none !important',
                    },
                    '.i-loading-spinner': {
                        marginTop: '2rem',
                    },
                },
            },
            '.visibility-hidden': {
                visibility: 'hidden',
                height: 0
            }
        }
    });
});
define("@scom/scom-lottery-results", ["require", "exports", "@ijstech/components", "@scom/scom-lottery-results/assets.ts", "@scom/scom-lottery-results/store/index.ts", "@scom/scom-token-list", "@scom/scom-lottery-results/data.json.ts", "@scom/scom-lottery-results/index.css.ts", "@scom/scom-lottery-results/assets.ts"], function (require, exports, components_5, assets_3, index_3, scom_token_list_2, data_json_1, index_css_1, assets_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_5.Styles.Theme.ThemeVars;
    let ScomLotteryResults = class ScomLotteryResults extends components_5.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = {
                defaultChainId: 0,
                wallets: [],
                networks: []
            };
            this.tag = {};
            this.defaultEdit = true;
            this.isDetailShown = false;
            this.totalRounds = 0;
            this.currentRound = 0;
            this.registerEvent = () => {
                this.$eventBus.register(this, "chainChanged" /* chainChanged */, this.onChainChange);
            };
            this.onChainChange = async () => {
                this.onSetupPage(index_3.isWalletConnected());
            };
            this.onSetupPage = async (connected, hideLoading) => {
                var _a;
                const data = {
                    defaultChainId: this.defaultChainId,
                    wallets: this.wallets,
                    networks: this.networks,
                    showHeader: this.showHeader
                };
                if ((_a = this.dappContainer) === null || _a === void 0 ? void 0 : _a.setData)
                    this.dappContainer.setData(data);
                if (!hideLoading && this.loadingElm) {
                    this.loadingElm.visible = true;
                }
                scom_token_list_2.tokenStore.updateTokenMapData();
                this.renderNumbers();
                if (!hideLoading && this.loadingElm) {
                    this.loadingElm.visible = false;
                }
            };
            this.getRoundResult = async (round) => {
                if (round && this.currentRound !== round) {
                    this.currentRound = round;
                    this.updateArrows();
                    // TODO: Get result
                    this.updateArrows(true);
                }
            };
            this.onPrev = () => {
                const val = this.currentRound - 1;
                this.currentRound = val;
                this.inputRound.value = val;
                this.getRoundResult(val);
            };
            this.onNext = () => {
                const val = this.currentRound + 1;
                this.currentRound = val;
                this.inputRound.value = val;
                this.getRoundResult(val);
            };
            this.onLast = () => {
                const val = this.totalRounds;
                this.currentRound = val;
                this.inputRound.value = val;
                this.getRoundResult(val);
            };
            this.onInputRound = () => {
                const _input = this.inputRound;
                let value = _input.value;
                value = value.replace(/[^0-9]+/g, '');
                this.inputRound.value = Number(value) < this.totalRounds ? value : this.totalRounds;
                this.getRoundResult(value);
            };
            this.renderNumbers = () => {
                let nodes = [];
                for (let i = 1; i <= 6; i++) {
                    const lb = this.$render("i-label", { caption: `${Math.floor(Math.random() * 10)}`, font: { size: '1.25rem', bold: true }, position: "absolute", class: "result-numbers" });
                    lb.style.transform = `rotate(${`${Math.floor(Math.random() * 30)}`}deg) translate(-50%, -50%)`;
                    nodes.push(this.$render("i-panel", { position: "relative", width: 50, height: 50 },
                        this.$render("i-image", { url: assets_4.default.fullPath(`img/number-${i}.svg`), width: 50, height: 50 }),
                        lb));
                }
                this.hStackNumbers.clearInnerHTML();
                this.hStackNumbers.append(...nodes);
            };
            this.updateArrows = (enabled) => {
                const moreThanOne = this.totalRounds > 1 && enabled;
                this.icPrev.enabled = moreThanOne && this.currentRound > 1;
                this.icNext.enabled = moreThanOne && this.currentRound < this.totalRounds;
                this.icLast.enabled = moreThanOne && this.currentRound < this.totalRounds;
            };
            this.onToggleDetail = () => {
                this.isDetailShown = !this.isDetailShown;
                this.lbToggleDetail.caption = this.isDetailShown ? 'Hide' : 'Details';
                this.iconToggleDetail.name = this.isDetailShown ? 'chevron-up' : 'chevron-down';
                this.vStackDetail.classList.toggle('visibility-hidden');
            };
            if (data_json_1.default)
                index_3.setDataFromConfig(data_json_1.default);
            this.$eventBus = components_5.application.EventBus;
            this.registerEvent();
        }
        get defaultChainId() {
            return this._data.defaultChainId;
        }
        set defaultChainId(value) {
            this._data.defaultChainId = value;
        }
        get wallets() {
            var _a;
            return (_a = this._data.wallets) !== null && _a !== void 0 ? _a : [];
        }
        set wallets(value) {
            this._data.wallets = value;
        }
        get networks() {
            var _a;
            return (_a = this._data.networks) !== null && _a !== void 0 ? _a : [];
        }
        set networks(value) {
            this._data.networks = value;
        }
        get showHeader() {
            var _a;
            return (_a = this._data.showHeader) !== null && _a !== void 0 ? _a : true;
        }
        set showHeader(value) {
            this._data.showHeader = value;
        }
        getActions() {
            const propertiesSchema = {
                type: "object",
                properties: {
                    chainId: {
                        type: "number",
                        enum: [1, 56, 137, 250, 97, 80001, 43113, 43114],
                    }
                }
            };
            const themeSchema = {
                type: 'object',
                properties: {
                    "dark": {
                        type: 'object',
                        properties: {
                            backgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            fontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            prizePotFontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            inputBackgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            inputFontColor: {
                                type: 'string',
                                format: 'color'
                            },
                        }
                    },
                    "light": {
                        type: 'object',
                        properties: {
                            backgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            fontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            prizePotFontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            inputBackgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            inputFontColor: {
                                type: 'string',
                                format: 'color'
                            }
                        }
                    }
                }
            };
            return this._getActions(propertiesSchema, themeSchema);
        }
        _getActions(propertiesSchema, themeSchema) {
            const actions = [
                {
                    name: 'Settings',
                    icon: 'cog',
                    command: (builder, userInputData) => {
                        let _oldData = {
                            chainId: 0,
                            defaultChainId: 0,
                            wallets: [],
                            networks: []
                        };
                        return {
                            execute: async () => {
                                _oldData = Object.assign({}, this._data);
                                this.onSetupPage(index_3.isWalletConnected());
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                            },
                            undo: async () => {
                                this._data = Object.assign({}, _oldData);
                                this.onSetupPage(index_3.isWalletConnected());
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: propertiesSchema
                },
                {
                    name: 'Theme Settings',
                    icon: 'palette',
                    command: (builder, userInputData) => {
                        let oldTag = {};
                        return {
                            execute: async () => {
                                if (!userInputData)
                                    return;
                                oldTag = JSON.parse(JSON.stringify(this.tag));
                                if (builder)
                                    builder.setTag(userInputData);
                                else
                                    this.setTag(userInputData);
                                if (this.dappContainer)
                                    this.dappContainer.setTag(userInputData);
                            },
                            undo: () => {
                                if (!userInputData)
                                    return;
                                this.tag = JSON.parse(JSON.stringify(oldTag));
                                if (builder)
                                    builder.setTag(this.tag);
                                else
                                    this.setTag(this.tag);
                                if (this.dappContainer)
                                    this.dappContainer.setTag(userInputData);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: themeSchema
                }
            ];
            return actions;
        }
        getConfigurators() {
            return [
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: this.getActions.bind(this),
                    getData: this.getData.bind(this),
                    setData: async (data) => {
                        const defaultData = data_json_1.default.defaultBuilderData;
                        await this.setData(Object.assign(Object.assign({}, defaultData), data));
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Emdedder Configurator',
                    target: 'Embedders',
                    getActions: this.getActions.bind(this),
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                }
            ];
        }
        async getData() {
            return this._data;
        }
        async setData(value) {
            this._data = value;
            await this.onSetupPage(index_3.isWalletConnected());
        }
        async getTag() {
            return this.tag;
        }
        async setTag(value) {
            const newValue = value || {};
            if (newValue.light)
                this.updateTag('light', newValue.light);
            if (newValue.dark)
                this.updateTag('dark', newValue.dark);
            if (this.dappContainer)
                this.dappContainer.setTag(this.tag);
            this.updateTheme();
        }
        updateTag(type, value) {
            var _a;
            this.tag[type] = (_a = this.tag[type]) !== null && _a !== void 0 ? _a : {};
            for (let prop in value) {
                if (value.hasOwnProperty(prop))
                    this.tag[type][prop] = value[prop];
            }
        }
        updateStyle(name, value) {
            value ?
                this.style.setProperty(name, value) :
                this.style.removeProperty(name);
        }
        updateTheme() {
            var _a, _b, _c, _d, _e, _f;
            const themeVar = ((_a = this.dappContainer) === null || _a === void 0 ? void 0 : _a.theme) || 'light';
            this.updateStyle('--text-primary', (_b = this.tag[themeVar]) === null || _b === void 0 ? void 0 : _b.fontColor);
            this.updateStyle('--background-main', (_c = this.tag[themeVar]) === null || _c === void 0 ? void 0 : _c.backgroundColor);
            this.updateStyle('--colors-info-main', (_d = this.tag[themeVar]) === null || _d === void 0 ? void 0 : _d.prizePotFontColor);
            this.updateStyle('--input-font_color', (_e = this.tag[themeVar]) === null || _e === void 0 ? void 0 : _e.inputFontColor);
            this.updateStyle('--input-background', (_f = this.tag[themeVar]) === null || _f === void 0 ? void 0 : _f.inputBackgroundColor);
        }
        async init() {
            this.isReadyCallbackQueued = true;
            super.init();
            const defaultChainId = this.getAttribute('defaultChainId', true);
            const chainId = this.getAttribute('chainId', true);
            const networks = this.getAttribute('networks', true);
            const tokens = this.getAttribute('tokens', true, []);
            const wallets = this.getAttribute('wallets', true);
            const showHeader = this.getAttribute('showHeader', true);
            await this.setData({ chainId, defaultChainId, networks, tokens, wallets, showHeader });
            this.updateArrows();
            this.isReadyCallbackQueued = false;
            this.executeReadyCallback();
        }
        render() {
            return (this.$render("i-scom-dapp-container", { id: "dappContainer" },
                this.$render("i-panel", { id: "pnlLotteryResults", padding: { left: 10, right: 10 }, class: index_css_1.lotteryResultsComponent, minHeight: 300 },
                    this.$render("i-panel", { margin: { top: '1rem', bottom: '1rem', left: 'auto', right: 'auto' } },
                        this.$render("i-vstack", { id: "loadingElm", class: "i-loading-overlay" },
                            this.$render("i-vstack", { class: "i-loading-spinner", horizontalAlignment: "center", verticalAlignment: "center" },
                                this.$render("i-icon", { class: "i-loading-spinner_icon", image: { url: assets_3.default.fullPath('img/loading.svg'), width: 36, height: 36 } }),
                                this.$render("i-label", { caption: "Loading...", font: { color: '#FD4A4C', size: '1.5em' }, class: "i-loading-spinner_text" }))),
                        this.$render("i-vstack", { id: "lotteryElm", gap: 20, border: { radius: 16, width: 2, style: 'solid', color: Theme.background.modal }, padding: { left: '1rem', right: '1rem', top: '1rem', bottom: '1rem' }, overflow: "hidden" },
                            this.$render("i-vstack", { gap: 10 },
                                this.$render("i-hstack", { gap: 10, verticalAlignment: "center", wrap: "wrap-reverse" },
                                    this.$render("i-hstack", { gap: 4, verticalAlignment: "center" },
                                        this.$render("i-label", { caption: "Round", font: { size: '1.25rem', bold: true } }),
                                        this.$render("i-input", { id: "inputRound", inputType: "number", width: 60, font: { size: '1.125rem' }, onChanged: this.onInputRound })),
                                    this.$render("i-hstack", { gap: 8, verticalAlignment: "center", margin: { left: 'auto' }, class: "group-icons" },
                                        this.$render("i-icon", { id: "icPrev", name: "angle-left", width: 20, height: 20, onClick: this.onPrev }),
                                        this.$render("i-icon", { id: "icNext", name: "angle-right", width: 20, height: 20, onClick: this.onNext }),
                                        this.$render("i-icon", { id: "icLast", name: "angle-double-right", width: 20, height: 20, onClick: this.onLast }))),
                                this.$render("i-panel", null,
                                    this.$render("i-label", { id: "lbDrawn", caption: "Drawn May 15, 2023, 7:00 AM" }))),
                            this.$render("i-panel", { width: "100%", height: 1, background: { color: Theme.divider }, margin: { top: 5, bottom: 5 } }),
                            this.$render("i-hstack", { gap: 10, verticalAlignment: "center", justifyContent: "center", wrap: "wrap" },
                                this.$render("i-label", { caption: "Winning Number", font: { size: '1.25rem', bold: true } }),
                                this.$render("i-hstack", { id: "hStackNumbers", gap: 4, width: "calc(100% - 200px)", minWidth: 240, verticalAlignment: "center", justifyContent: "center" })),
                            this.$render("i-panel", { width: "100%", height: 1, background: { color: Theme.divider }, margin: { top: 5, bottom: 5 } }),
                            this.$render("i-vstack", { id: "vStackDetail", class: "visibility-hidden", gap: 10, verticalAlignment: "center" },
                                this.$render("i-hstack", { gap: 20, wrap: "wrap" },
                                    this.$render("i-vstack", { gap: 10, width: 200, verticalAlignment: "space-between", horizontalAlignment: "start" },
                                        this.$render("i-vstack", { gap: 10, verticalAlignment: "center" },
                                            this.$render("i-label", { caption: "Prize pot", font: { size: '1.25rem', bold: true } }),
                                            this.$render("i-label", { id: "lbPricePot", caption: "~$51,257", font: { size: '2rem', bold: true, color: Theme.colors.info.main } }),
                                            this.$render("i-label", { id: "lbPricePotToken", caption: "27,281 OSWAP", font: { size: '1rem' } })),
                                        this.$render("i-vstack", { gap: 10, verticalAlignment: "center" },
                                            this.$render("i-label", { id: "lbTotalPlayers", caption: "Total players this round: 270", font: { size: '1' } }))),
                                    this.$render("i-vstack", { gap: 20, width: "calc(100% - 220px)", verticalAlignment: "center" },
                                        this.$render("i-label", { caption: "Match the winning number in the same order to share prizes." }),
                                        this.$render("i-hstack", { gap: 20, verticalAlignment: "center", wrap: "wrap", class: "group-matches" },
                                            this.$render("i-vstack", { gap: 10 },
                                                this.$render("i-label", { caption: "Match first 1", font: { bold: true, color: Theme.colors.info.main } }),
                                                this.$render("i-label", { id: "lbMatch1", caption: "546 OSWAP", font: { bold: true, size: '1rem' } }),
                                                this.$render("i-label", { id: "lbMatch1USD", caption: "~$1,025", opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch1Token", caption: "5.35 OSWAP each", opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch1Tickets", caption: "102 Winning Tickets", opacity: 0.8 })),
                                            this.$render("i-vstack", { gap: 10 },
                                                this.$render("i-label", { caption: "Match first 2", font: { bold: true, color: Theme.colors.info.main } }),
                                                this.$render("i-label", { id: "lbMatch2", caption: "818 OSWAP", font: { bold: true, size: '1rem' } }),
                                                this.$render("i-label", { id: "lbMatch2USD", caption: "~$1,539", opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch2Token", caption: "81.84 OSWAP each", opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch2Tickets", caption: "10 Winning Tickets", opacity: 0.8 })),
                                            this.$render("i-vstack", { gap: 10 },
                                                this.$render("i-label", { caption: "Match first 3", font: { bold: true, color: Theme.colors.info.main } }),
                                                this.$render("i-label", { id: "lbMatch3", caption: "1,364 OSWAP", font: { bold: true, size: '1rem' } }),
                                                this.$render("i-label", { id: "lbMatch3USD", caption: "~$2,564", opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch3Token", caption: "682.02 OSWAP each", opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch3Tickets", caption: "2 Winning Tickets", opacity: 0.8 })),
                                            this.$render("i-vstack", { gap: 10 },
                                                this.$render("i-label", { caption: "Match first 4", font: { bold: true, color: Theme.colors.info.main } }),
                                                this.$render("i-label", { id: "lbMatch4", caption: "2,728 OSWAP", font: { bold: true, size: '1rem' } }),
                                                this.$render("i-label", { id: "lbMatch4USD", caption: "~$5,128", opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch4Token", visible: false, opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch4Tickets", caption: "0 Winning Tickets", opacity: 0.8 })),
                                            this.$render("i-vstack", { gap: 10 },
                                                this.$render("i-label", { caption: "Match first 5", font: { bold: true, color: Theme.colors.info.main } }),
                                                this.$render("i-label", { id: "lbMatch5", caption: "5,456 OSWAP", font: { bold: true, size: '1rem' } }),
                                                this.$render("i-label", { id: "lbMatch5USD", caption: "~$10,257", opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch5Token", visible: false, opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch5Tickets", caption: "0 Winning Tickets", opacity: 0.8 })),
                                            this.$render("i-vstack", { gap: 10 },
                                                this.$render("i-label", { caption: "Match all 6", font: { bold: true, color: Theme.colors.info.main } }),
                                                this.$render("i-label", { id: "lbMatch1", caption: "10,912 OSWAP", font: { bold: true, size: '1rem' } }),
                                                this.$render("i-label", { id: "lbMatch1USD", caption: "~$20,514", opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch1Token", visible: false, opacity: 0.8 }),
                                                this.$render("i-label", { id: "lbMatch1Tickets", caption: "0 Winning Tickets", opacity: 0.8 })),
                                            this.$render("i-vstack", { gap: 10 },
                                                this.$render("i-label", { caption: "Burn", font: { bold: true, color: Theme.colors.primary.main } }),
                                                this.$render("i-label", { id: "lbBurn", caption: "5,456 OSWAP", font: { bold: true, size: '1rem' } }),
                                                this.$render("i-label", { id: "lbBurn1USD", caption: "~$10,256", opacity: 0.8 })))))),
                            this.$render("i-hstack", { gap: 4, width: 100, margin: { left: 'auto', right: 'auto' }, verticalAlignment: "center", horizontalAlignment: "center", class: "toggle-detail", onClick: this.onToggleDetail },
                                this.$render("i-label", { id: "lbToggleDetail", caption: "Details", font: { size: '1.25rem', bold: true, color: Theme.colors.primary.main } }),
                                this.$render("i-icon", { id: "iconToggleDetail", name: "chevron-down", width: 16, height: 16, fill: Theme.colors.primary.main })))))));
        }
    };
    ScomLotteryResults = __decorate([
        components_5.customModule,
        components_5.customElements('i-scom-lottery-results')
    ], ScomLotteryResults);
    exports.default = ScomLotteryResults;
});
