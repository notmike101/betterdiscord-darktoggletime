import { BdApi } from '@bandagedbd/bdapi';

declare global {
  interface Window {
    BdApi: typeof BdApi;
  }
}
