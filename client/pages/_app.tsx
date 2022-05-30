import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/styles.scss";
import { UserProvider } from "context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<Head>
				<title>Horizon | Simplifying checkouts</title>
			</Head>
			<Component {...pageProps} />
		</UserProvider>
	);
}

export default MyApp;
