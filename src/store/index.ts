import Assets from '../assets';
import { tokenStore } from '@scom/scom-token-list';

export const fallBackUrl = Assets.fullPath('img/tokens/token-placeholder.svg');

export const tokenSymbol = (address: string) => {
  if (!address) return '';
  const tokenMap = tokenStore.tokenMap;
  let tokenObject = tokenMap[address.toLowerCase()];
  if (!tokenObject) {
    tokenObject = tokenMap[address];
  }
  return tokenObject ? tokenObject.symbol : '';
}

export * from './utils';
