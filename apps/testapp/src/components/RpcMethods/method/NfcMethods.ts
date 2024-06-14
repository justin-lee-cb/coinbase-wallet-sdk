import { RpcRequestInput } from './RpcRequestInput';

const requestNfc: RpcRequestInput = {
  method: 'requestNFCPayment',
  params: [
    { key: 'chainId', required: true },
    { key: 'from', required: true },
    { key: 'to', required: true },
    { key: 'value', required: true },
    { key: 'gasLimit', required: true },
    { key: 'gasPriceInWei', required: true },
    { key: 'maxFeePerGas', required: true },
    { key: 'maxPriorityFeePerGas', required: true },
    { key: 'shouldSubmit', required: false },
    { key: 'data', required: false },
    { key: 'toAddress', required: true },
  ],
  format: (data: Record<string, string>) => [
    {
      chainId: data.chainId,
      shouldSubmit: data.shouldSubmit,
      from: data.from,
      to: data.to,
      value: data.value,
      gasLimit: data.gasLimit,
      gasPriceInWei: data.gasPriceInWei,
      maxFeePerGas: data.maxFeePerGas,
      maxPriorityFeePerGas: data.maxPriorityFeePerGas,
      data: data.data,
      toAddress: data.toAddress,
    },
  ],
};

const hasNfc: RpcRequestInput = {
  method: 'hasNFCPayment',
  params: [],
  format: () => [],
};

export const nfcMethods = [requestNfc, hasNfc];