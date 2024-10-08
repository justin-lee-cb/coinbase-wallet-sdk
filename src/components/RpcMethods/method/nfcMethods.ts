import { RpcRequestInput } from './RpcRequestInput';

const requestContactlessPayment: RpcRequestInput = {
  method: 'requestContactlessPayment',
  params: [
    { key: 'type', required: true },
    { key: 'uri', required: false },
  ],
  format: (data: Record<string, string>) => [
    {
      key: data.key,
      type: data.type,
      uri: data.uri,
    },
  ],
};

const hasNfc: RpcRequestInput = {
  method: 'hasNFCPayment',
  params: [],
  format: () => [],
};

export const nfcMethods = [requestContactlessPayment, hasNfc];
