import '../styles/globals.css'

import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://5379da853949427c9d65571e1adc7cd5@o516420.ingest.sentry.io/5622811",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
