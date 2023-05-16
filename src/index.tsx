import { Module, Panel, Label, VStack, Container, ControlElement, IEventBus, application, customModule, Input, customElements, IDataSchema, Styles, HStack, Icon } from '@ijstech/components';
import Assets from './assets';
import {
	formatNumber,
	EventId,
	ILotteryResults,
	INetworkConfig,
	ITokenObject,
} from './global/index';
import { isWalletConnected, setDataFromConfig } from './store/index';
import { tokenStore } from '@scom/scom-token-list';
import { IWalletPlugin } from '@scom/scom-wallet-modal';
import configData from './data.json';
import { BigNumber } from '@ijstech/eth-contract';

import { lotteryResultsComponent } from './index.css';
import ScomDappContainer from '@scom/scom-dapp-container';
import assets from './assets';

const Theme = Styles.Theme.ThemeVars;

interface ScomLotteryResultsElement extends ControlElement {
	tokens?: ITokenObject[];
	defaultChainId: number;
	networks: INetworkConfig[];
	wallets: IWalletPlugin[];
	showHeader?: boolean;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['i-scom-lottery-results']: ScomLotteryResultsElement;
		}
	}
}

@customModule
@customElements('i-scom-lottery-results')
export default class ScomLotteryResults extends Module {
	private _data: ILotteryResults = {
		defaultChainId: 0,
		wallets: [],
		networks: []
	};
	tag: any = {};
	defaultEdit: boolean = true;
	readonly onEdit: () => Promise<void>;
	readonly onConfirm: () => Promise<void>;
	readonly onDiscard: () => Promise<void>;

	private $eventBus: IEventBus;
	private loadingElm: Panel;
	private lotteryElm: VStack;
	private pnlLotteryResults: Panel;
	private dappContainer: ScomDappContainer;
	private hStackNumbers: HStack;
	private inputRound: Input;
	private icPrev: Icon;
	private icNext: Icon;
	private icLast: Icon;
	private vStackDetail: VStack;
	private lbToggleDetail: Label;
	private iconToggleDetail: Icon;

	private isDetailShown = false;
	private totalRounds: number = 0;
	private currentRound: number = 0;

	get defaultChainId() {
		return this._data.defaultChainId;
	}

	set defaultChainId(value: number) {
		this._data.defaultChainId = value;
	}

	get wallets() {
		return this._data.wallets ?? [];
	}
	set wallets(value: IWalletPlugin[]) {
		this._data.wallets = value;
	}

	get networks() {
		return this._data.networks ?? [];
	}
	set networks(value: INetworkConfig[]) {
		this._data.networks = value;
	}

	get showHeader() {
		return this._data.showHeader ?? true;
	}
	set showHeader(value: boolean) {
		this._data.showHeader = value;
	}

	private getActions() {
		const propertiesSchema: any = {
			type: "object",
			properties: {
				chainId: {
					type: "number",
					enum: [1, 56, 137, 250, 97, 80001, 43113, 43114],
				}
			}
		}

		const themeSchema: IDataSchema = {
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
		}

		return this._getActions(propertiesSchema, themeSchema);
	}

	private _getActions(propertiesSchema: IDataSchema, themeSchema: IDataSchema) {
		const actions = [
			{
				name: 'Settings',
				icon: 'cog',
				command: (builder: any, userInputData: any) => {
					let _oldData: ILotteryResults = {
						chainId: 0,
						defaultChainId: 0,
						wallets: [],
						networks: []
					};
					return {
						execute: async () => {
							_oldData = { ...this._data };
							this.onSetupPage(isWalletConnected());
							if (builder?.setData) builder.setData(this._data);
						},
						undo: async () => {
							this._data = { ..._oldData };
							this.onSetupPage(isWalletConnected());
							if (builder?.setData) builder.setData(this._data);
						},
						redo: () => { }
					}
				},
				userInputDataSchema: propertiesSchema
			},
			{
				name: 'Theme Settings',
				icon: 'palette',
				command: (builder: any, userInputData: any) => {
					let oldTag = {};
					return {
						execute: async () => {
							if (!userInputData) return;
							oldTag = JSON.parse(JSON.stringify(this.tag));
							if (builder) builder.setTag(userInputData);
							else this.setTag(userInputData);
							if (this.dappContainer) this.dappContainer.setTag(userInputData);
						},
						undo: () => {
							if (!userInputData) return;
							this.tag = JSON.parse(JSON.stringify(oldTag));
							if (builder) builder.setTag(this.tag);
							else this.setTag(this.tag);
							if (this.dappContainer) this.dappContainer.setTag(userInputData);
						},
						redo: () => { }
					}
				},
				userInputDataSchema: themeSchema
			}
		]
		return actions;
	}

	getConfigurators() {
		return [
			{
				name: 'Builder Configurator',
				target: 'Builders',
				getActions: this.getActions.bind(this),
				getData: this.getData.bind(this),
				setData: async (data: any) => {
					const defaultData = configData.defaultBuilderData;
					await this.setData({ ...defaultData, ...data });
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
		]
	}

	private async getData() {
		return this._data;
	}

	private async setData(value: ILotteryResults) {
		this._data = value;
		await this.onSetupPage(isWalletConnected());
	}

	private async getTag() {
		return this.tag;
	}

	private async setTag(value: any) {
		const newValue = value || {};
		if (newValue.light) this.updateTag('light', newValue.light);
		if (newValue.dark) this.updateTag('dark', newValue.dark);
		if (this.dappContainer)
			this.dappContainer.setTag(this.tag);
		this.updateTheme();
	}

	private updateTag(type: 'light' | 'dark', value: any) {
		this.tag[type] = this.tag[type] ?? {};
		for (let prop in value) {
			if (value.hasOwnProperty(prop))
				this.tag[type][prop] = value[prop];
		}
	}

	private updateStyle(name: string, value: any) {
		value ?
			this.style.setProperty(name, value) :
			this.style.removeProperty(name);
	}

	private updateTheme() {
		const themeVar = this.dappContainer?.theme || 'light';
		this.updateStyle('--text-primary', this.tag[themeVar]?.fontColor);
		this.updateStyle('--background-main', this.tag[themeVar]?.backgroundColor);
		this.updateStyle('--colors-info-main', this.tag[themeVar]?.prizePotFontColor);
		this.updateStyle('--input-font_color', this.tag[themeVar]?.inputFontColor);
		this.updateStyle('--input-background', this.tag[themeVar]?.inputBackgroundColor);
	}

	constructor(parent?: Container, options?: ControlElement) {
		super(parent, options);
		if (configData) setDataFromConfig(configData);
		this.$eventBus = application.EventBus;
		this.registerEvent();
	}

	private registerEvent = () => {
		this.$eventBus.register(this, EventId.chainChanged, this.onChainChange);
	}

	private onChainChange = async () => {
		this.onSetupPage(isWalletConnected());
	}

	private onSetupPage = async (connected: boolean, hideLoading?: boolean) => {
		const data: ILotteryResults = {
			defaultChainId: this.defaultChainId,
			wallets: this.wallets,
			networks: this.networks,
			showHeader: this.showHeader
		}
		if (this.dappContainer?.setData) this.dappContainer.setData(data);
		if (!hideLoading && this.loadingElm) {
			this.loadingElm.visible = true;
		}
		tokenStore.updateTokenMapData();
		this.renderNumbers();
		if (!hideLoading && this.loadingElm) {
			this.loadingElm.visible = false;
		}
	}

	private getRoundResult = async (round: number) => {
		if (round && this.currentRound !== round) {
			this.currentRound = round;
			this.updateArrows();
			// TODO: Get result
			this.updateArrows(true);
		}
	}

	private onPrev = () => {
		const val = this.currentRound - 1;
		this.currentRound = val;
		this.inputRound.value = val;
		this.getRoundResult(val);
	}

	private onNext = () => {
		const val = this.currentRound + 1;
		this.currentRound = val;
		this.inputRound.value = val;
		this.getRoundResult(val);
	}

	private onLast = () => {
		const val = this.totalRounds;
		this.currentRound = val;
		this.inputRound.value = val;
		this.getRoundResult(val);
	}

	private onInputRound = () => {
		const _input = this.inputRound;
		let value = _input.value;
		value = value.replace(/[^0-9]+/g, '');
		this.inputRound.value = Number(value) < this.totalRounds ? value : this.totalRounds;
		this.getRoundResult(value);
	}

	private renderNumbers = () => {
		let nodes = [];
		for (let i = 1; i <= 6; i++) {
			const lb: Label = <i-label caption={`${Math.floor(Math.random() * 10)}`} font={{ size: '1.25rem', bold: true }} position="absolute" class="result-numbers" />;
			lb.style.transform = `rotate(${`${Math.floor(Math.random() * 30)}`}deg) translate(-50%, -50%)`;
			nodes.push(<i-panel position="relative" width={50} height={50}>
				<i-image url={assets.fullPath(`img/number-${i}.svg`)} width={50} height={50} />
				{ lb }
			</i-panel>)
		}
		this.hStackNumbers.clearInnerHTML();
		this.hStackNumbers.append(...nodes);
	}

	private updateArrows = (enabled?: boolean) => {
		const moreThanOne = this.totalRounds > 1 && enabled;
		this.icPrev.enabled = moreThanOne && this.currentRound > 1;
		this.icNext.enabled = moreThanOne && this.currentRound < this.totalRounds;
		this.icLast.enabled = moreThanOne && this.currentRound < this.totalRounds;
	}

	private onToggleDetail = () => {
		this.isDetailShown = !this.isDetailShown;
		this.lbToggleDetail.caption = this.isDetailShown ? 'Hide' : 'Details';
		this.iconToggleDetail.name = this.isDetailShown ? 'chevron-up' : 'chevron-down';
		this.vStackDetail.classList.toggle('visibility-hidden');
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
		return (
			<i-scom-dapp-container id="dappContainer">
				<i-panel id="pnlLotteryResults" padding={{ left: 10, right: 10 }} class={lotteryResultsComponent} minHeight={300}>
					<i-panel margin={{ top: '1rem', bottom: '1rem', left: 'auto', right: 'auto' }}>
						<i-vstack id="loadingElm" class="i-loading-overlay">
							<i-vstack class="i-loading-spinner" horizontalAlignment="center" verticalAlignment="center">
								<i-icon
									class="i-loading-spinner_icon"
									image={{ url: Assets.fullPath('img/loading.svg'), width: 36, height: 36 }}
								/>
								<i-label
									caption="Loading..." font={{ color: '#FD4A4C', size: '1.5em' }}
									class="i-loading-spinner_text"
								/>
							</i-vstack>
						</i-vstack>
						<i-vstack id="lotteryElm" gap={20} border={{ radius: 16, width: 2, style: 'solid', color: Theme.background.modal }} padding={{ left: '1rem', right: '1rem', top: '1rem', bottom: '1rem' }} overflow="hidden">
							<i-vstack gap={10}>
								<i-hstack gap={10} verticalAlignment="center" wrap="wrap-reverse">
									<i-hstack gap={4} verticalAlignment="center">
										<i-label caption="Round" font={{ size: '1.25rem', bold: true }} />
										<i-input id="inputRound" inputType="number" width={60} font={{ size: '1.125rem' }} onChanged={this.onInputRound} />
									</i-hstack>
									<i-hstack  gap={8} verticalAlignment="center" margin={{ left: 'auto' }} class="group-icons">
										<i-icon id="icPrev" name="angle-left" width={20} height={20} onClick={this.onPrev} />
										<i-icon id="icNext" name="angle-right" width={20} height={20} onClick={this.onNext} />
										<i-icon id="icLast" name="angle-double-right" width={20} height={20}onClick={this.onLast} />
									</i-hstack>
								</i-hstack>
								<i-panel>
									<i-label id="lbDrawn" caption="Drawn May 15, 2023, 7:00 AM" />
								</i-panel>
							</i-vstack>
							<i-panel width="100%" height={1} background={{ color: Theme.divider }} margin={{ top: 5, bottom: 5 }} />
							<i-hstack gap={10} verticalAlignment="center" justifyContent="center" wrap="wrap">
								<i-label caption="Winning Number" font={{ size: '1.25rem', bold: true }} />
								<i-hstack id="hStackNumbers" gap={4} width="calc(100% - 200px)" minWidth={240} verticalAlignment="center" justifyContent="center" />
							</i-hstack>
							<i-panel width="100%" height={1} background={{ color: Theme.divider }} margin={{ top: 5, bottom: 5 }} />
							<i-vstack id="vStackDetail" class="visibility-hidden" gap={10} verticalAlignment="center">
								<i-hstack gap={20} wrap="wrap">
									<i-vstack gap={10} width={200} verticalAlignment="space-between" horizontalAlignment="start">
										<i-vstack gap={10} verticalAlignment="center">
											<i-label caption="Prize pot" font={{ size: '1.25rem', bold: true }} />
											<i-label id="lbPricePot" caption="~$51,257" font={{ size: '2rem', bold: true, color: Theme.colors.info.main }} />
											<i-label id="lbPricePotToken" caption="27,281 OSWAP" font={{ size: '1rem' }} />
										</i-vstack>
										<i-vstack gap={10} verticalAlignment="center">
											<i-label id="lbTotalPlayers" caption="Total players this round: 270" font={{ size: '1' }} />
										</i-vstack>
									</i-vstack>
									<i-vstack gap={20} width="calc(100% - 220px)" verticalAlignment="center">
										<i-label caption="Match the winning number in the same order to share prizes." />
										<i-hstack gap={20} verticalAlignment="center" wrap="wrap" class="group-matches">
											<i-vstack gap={10}>
												<i-label caption="Match first 1" font={{ bold: true, color: Theme.colors.info.main }} />
												<i-label id="lbMatch1" caption="546 OSWAP" font={{ bold: true, size: '1rem' }} />
												<i-label id="lbMatch1USD" caption="~$1,025" opacity={0.8} />
												<i-label id="lbMatch1Token" caption="5.35 OSWAP each" opacity={0.8} />
												<i-label id="lbMatch1Tickets" caption="102 Winning Tickets" opacity={0.8} />
											</i-vstack>
											<i-vstack gap={10}>
												<i-label caption="Match first 2" font={{ bold: true, color: Theme.colors.info.main }} />
												<i-label id="lbMatch2" caption="818 OSWAP" font={{ bold: true, size: '1rem' }} />
												<i-label id="lbMatch2USD" caption="~$1,539" opacity={0.8} />
												<i-label id="lbMatch2Token" caption="81.84 OSWAP each" opacity={0.8} />
												<i-label id="lbMatch2Tickets" caption="10 Winning Tickets" opacity={0.8} />
											</i-vstack>
											<i-vstack gap={10}>
												<i-label caption="Match first 3" font={{ bold: true, color: Theme.colors.info.main }} />
												<i-label id="lbMatch3" caption="1,364 OSWAP" font={{ bold: true, size: '1rem' }} />
												<i-label id="lbMatch3USD" caption="~$2,564" opacity={0.8} />
												<i-label id="lbMatch3Token" caption="682.02 OSWAP each" opacity={0.8} />
												<i-label id="lbMatch3Tickets" caption="2 Winning Tickets" opacity={0.8} />
											</i-vstack>
											<i-vstack gap={10}>
												<i-label caption="Match first 4" font={{ bold: true, color: Theme.colors.info.main }} />
												<i-label id="lbMatch4" caption="2,728 OSWAP" font={{ bold: true, size: '1rem' }} />
												<i-label id="lbMatch4USD" caption="~$5,128" opacity={0.8} />
												<i-label id="lbMatch4Token" visible={false} opacity={0.8} />
												<i-label id="lbMatch4Tickets" caption="0 Winning Tickets" opacity={0.8} />
											</i-vstack>
											<i-vstack gap={10}>
												<i-label caption="Match first 5" font={{ bold: true, color: Theme.colors.info.main }} />
												<i-label id="lbMatch5" caption="5,456 OSWAP" font={{ bold: true, size: '1rem' }} />
												<i-label id="lbMatch5USD" caption="~$10,257" opacity={0.8} />
												<i-label id="lbMatch5Token" visible={false} opacity={0.8} />
												<i-label id="lbMatch5Tickets" caption="0 Winning Tickets" opacity={0.8} />
											</i-vstack>
											<i-vstack gap={10}>
												<i-label caption="Match all 6" font={{ bold: true, color: Theme.colors.info.main }} />
												<i-label id="lbMatch1" caption="10,912 OSWAP" font={{ bold: true, size: '1rem' }} />
												<i-label id="lbMatch1USD" caption="~$20,514" opacity={0.8} />
												<i-label id="lbMatch1Token" visible={false} opacity={0.8} />
												<i-label id="lbMatch1Tickets" caption="0 Winning Tickets" opacity={0.8} />
											</i-vstack>
											<i-vstack gap={10}>
												<i-label caption="Burn" font={{ bold: true, color: Theme.colors.primary.main }} />
												<i-label id="lbBurn" caption="5,456 OSWAP" font={{ bold: true, size: '1rem' }} />
												<i-label id="lbBurn1USD" caption="~$10,256" opacity={0.8} />
											</i-vstack>
										</i-hstack>
									</i-vstack>
								</i-hstack> 
							</i-vstack>
							<i-hstack gap={4} width={100} margin={{ left: 'auto', right: 'auto' }} verticalAlignment="center" horizontalAlignment="center" class="toggle-detail" onClick={this.onToggleDetail}>
								<i-label id="lbToggleDetail" caption="Details" font={{ size: '1.25rem', bold: true, color: Theme.colors.primary.main }} />
								<i-icon id="iconToggleDetail" name="chevron-down" width={16} height={16} fill={Theme.colors.primary.main} />
							</i-hstack>
						</i-vstack>
					</i-panel>
				</i-panel>
			</i-scom-dapp-container>
		)
	}
}
