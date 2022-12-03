import '../styles/globals.css'
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi'
import 'bootstrap/dist/css/bootstrap.min.css';
import { publicProvider } from 'wagmi/providers/public'
import { SessionProvider } from 'next-auth/react'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

const { provider, webSocketProvider, chains } = configureChains(
  defaultChains, 
  [
    alchemyProvider({ apiKey: "_Vi3HORhL0_plldDN2Ac7VcYy9_dyXdt", priority: 0 })
  ])

const {connectors} = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
})

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  connectors
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}

export default MyApp
