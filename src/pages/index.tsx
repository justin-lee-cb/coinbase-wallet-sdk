import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { nfcShortcutsMap } from '../../apps/testapp/src/components/RpcMethods/shortcut/nfcShortcuts';
import { EventListenersCard } from '../components/EventListeners/EventListenersCard';
import { WIDTH_2XL } from '../components/Layout';
import { connectionMethods } from '../components/RpcMethods/method/connectionMethods';
import { nfcMethods } from '../components/RpcMethods/method/nfcMethods';
import { RpcRequestInput } from '../components/RpcMethods/method/RpcRequestInput';
import { RpcMethodCard } from '../components/RpcMethods/RpcMethodCard';
import { ShortcutType } from '../components/RpcMethods/shortcut/ShortcutType';
import { useCBWSDK } from '../context/CBWSDKReactContextProvider';

export default function Home() {
  const { provider } = useCBWSDK();
  const [connected, setConnected] = React.useState(Boolean(provider?.connected));
  const [chainId, setChainId] = React.useState<number | undefined>(undefined);
  // This is for Extension compatibility, Extension with SDK3.9 does not emit connect event
  // correctly, so we manually check if the extension is connected, and set the connected state
  useEffect(() => {
    if (window.coinbaseWalletExtension) {
      setConnected(true);
    }
  }, []);

  useEffect(() => {
    provider?.on('connect', () => {
      setConnected(true);
    });
    provider?.on('chainChanged', (newChainId) => {
      setChainId(newChainId);
    });
  }, [provider]);

  useEffect(() => {
    if (connected) {
      provider?.request({ method: 'eth_chainId' }).then((chainId) => {
        setChainId(parseInt(chainId, 16));
      });
    }
  }, [connected, provider]);

  useEffect(() => {
    window.navigator.vibrate(1000);
  });

  // window.navigator.vibrate(1000);

  return (
    <Container maxW={WIDTH_2XL} mb={8}>
      <Box>
        <Heading size="md">Event Listeners</Heading>
        <Grid mt={2} templateColumns={{ base: '100%' }} gap={2}>
          <EventListenersCard />
        </Grid>
      </Box>
      <MethodsSection title="Wallet Connection" methods={connectionMethods} />
      {
        <>
          {/* <MethodsSection
            title="Switch/Add Chain"
            methods={multiChainMethods}
            shortcutsMap={multiChainShortcutsMap}
          />
          <MethodsSection
            title="Sign Message"
            methods={signMessageMethods}
            shortcutsMap={signMessageShortcutsMap(chainId)}
          />
          <MethodsSection title="Send" methods={sendMethods} shortcutsMap={sendShortcutsMap} />
          <MethodsSection
            title="Wallet Tx"
            methods={walletTxMethods}
            shortcutsMap={walletTxShortcutsMap}
          />
          <MethodsSection
            title="Read-only JSON-RPC Requests"
            methods={readonlyJsonRpcMethods}
            shortcutsMap={readonlyJsonRpcShortcutsMap}
          /> */}
          <MethodsSection title="NFC" methods={nfcMethods} shortcutsMap={nfcShortcutsMap} />
        </>
      }
    </Container>
  );
}

function MethodsSection({
  title,
  methods,
  shortcutsMap,
}: {
  title: string;
  methods: RpcRequestInput[];
  shortcutsMap?: Record<string, ShortcutType[]>;
}) {
  return (
    <Box mt={4}>
      <Heading size="md">{title}</Heading>
      <Grid
        mt={2}
        templateColumns={{
          base: '100%',
          md: 'repeat(2, 50%)',
          xl: 'repeat(3, 33%)',
        }}
        gap={2}
      >
        {methods.map((rpc) => (
          <GridItem w="100%" key={rpc.method}>
            <RpcMethodCard
              method={rpc.method}
              params={rpc.params}
              format={rpc.format}
              shortcuts={shortcutsMap?.[rpc.method]}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
