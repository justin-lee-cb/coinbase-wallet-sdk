import { ADDR_TO_FILL, EXAMPLE_MESSAGE } from './const';
import { ShortcutType } from './ShortcutType';

const personalSignShortcuts: ShortcutType[] = [
  {
    key: EXAMPLE_MESSAGE,
    data: {
      message: EXAMPLE_MESSAGE,
      address: ADDR_TO_FILL,
    },
  },
];

const ethSignTypedDataV1Shortcuts: ShortcutType[] = [
  {
    key: EXAMPLE_MESSAGE,
    data: {
      message: [
        {
          type: 'string',
          name: 'Message',
          value: EXAMPLE_MESSAGE,
        },
      ],
      address: ADDR_TO_FILL,
    },
  },
];

const ethSignTypedDataV3Shortcuts: (chainId) => ShortcutType[] = (chainId: number) => [
  {
    key: EXAMPLE_MESSAGE,
    data: {
      message: {
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
          ],
          Person: [
            { name: 'name', type: 'string' },
            { name: 'wallet', type: 'address' },
          ],
          Mail: [
            { name: 'from', type: 'Person' },
            { name: 'to', type: 'Person' },
            { name: 'contents', type: 'string' },
          ],
        },
        primaryType: 'Mail',
        domain: {
          name: 'Ether Mail',
          version: '1',
          chainId,
          verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        },
        message: {
          from: {
            name: 'Cow',
            wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
          },
          to: {
            name: 'Bob',
            wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
          },
          contents: 'Hello, Bob!',
        },
      },
      address: ADDR_TO_FILL,
    },
  },
];

const ethSignTypedDataV4Shortcuts: (chainId: number) => ShortcutType[] = () => [
  {
    key: EXAMPLE_MESSAGE,
    data: {
      message: {
        domain: {
          name: 'USD Coin',
          version: '2',
          chainId: 8453,
          verifyingContract: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
        },
        message: {
          from: '0xf7d07ee99095fdc09001710ec232162a788bb989',
          to: '0xb9d5b99d5d0fa04dd7eb2b0cd7753317c2ea1a84',
          value: '0',
          validAfter: '0',
          validBefore: '1727115390',
          nonce: '0xb12f49b59109e1c8a913684708549858a9ec12e99b79ff1ed662aa739d4fdc50',
        },
        primaryType: 'TransferWithAuthorization',
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
          ],
          TransferWithAuthorization: [
            { name: 'from', type: 'address' },
            { name: 'to', type: 'address' },
            { name: 'value', type: 'uint256' },
            { name: 'validAfter', type: 'uint256' },
            { name: 'validBefore', type: 'uint256' },
            { name: 'nonce', type: 'bytes32' },
          ],
        },
      },
      address: ADDR_TO_FILL,
    },
  },
];

export const signMessageShortcutsMap = (chainId: number) => ({
  personal_sign: personalSignShortcuts,
  eth_signTypedData_v1: ethSignTypedDataV1Shortcuts,
  eth_signTypedData_v3: ethSignTypedDataV3Shortcuts(chainId),
  eth_signTypedData_v4: ethSignTypedDataV4Shortcuts(chainId),
});
