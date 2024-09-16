import { ShortcutType } from '../../../../../../src/components/RpcMethods/shortcut/ShortcutType';

const NfcShortcuts: ShortcutType[] = [
  {
    key: 'Example NFC Type 1',
    data: {
      type: '1',
      uri: 'ethereum:0x833589fcd6edb6e08f4c7c32d4f71b54bda02913@8453/transfer?address=0x833589fcd6edb6e08f4c7c32d4f71b54bda02913&uint256=1e5',
    },
  },
  {
    key: 'Example NFC Type 2',
    data: {
      type: '2',
      uri: 'https://google.com',
    },
  },
];

export const nfcShortcutsMap = {
  relayNFCPaymentRequest: NfcShortcuts,
};
