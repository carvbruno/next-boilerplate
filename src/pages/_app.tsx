import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Boilerplate</title>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default App
