import { ShortcutType } from './ShortcutType';

const NfcShortcuts: ShortcutType[] = [
  {
    key: 'Example NFC',
    data: {
      chainId: '8453',
      data: '0xd2c5ca9a00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000069badf095b03d62e97445eb0142e6488d19ff38b000000000000000000000000000000000000000000000000000000000000002900000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000',
      fromAddress: '0x69badf095b03d62e97445eb0142e6488d19ff38b',
      gasLimit: null,
      gasPriceInWei: null,
      maxFeePerGas: null,
      maxPriorityFeePerGas: null,
      nonce: null,
      shouldSubmit: 'true',
      toAddress: '0xb9d5b99d5d0fa04dd7eb2b0cd7753317c2ea1a84',
      weiValue: '0',
    },
  },
];

export const nfcShortcutsMap = {
  requestNFCPayment: NfcShortcuts,
};