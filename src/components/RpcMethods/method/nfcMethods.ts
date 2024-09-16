import { RpcRequestInput } from './RpcRequestInput';

const relayNFCPaymentRequest: RpcRequestInput = {
  method: 'relayNFCPaymentRequest',
  params: [
    { key: 'type', required: true },
    { key: 'uri', required: true },
  ],
  format: (data: Record<string, string>) => [
    {
      key: data.key,
      type: data.type,
    },
  ],
};

const hasNfc: RpcRequestInput = {
  method: 'hasNFCPayment',
  params: [],
  format: () => [],
};

export const nfcMethods = [relayNFCPaymentRequest, hasNfc];
