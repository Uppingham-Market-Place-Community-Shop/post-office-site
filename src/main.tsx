import { createRoot } from "react-dom/client";
import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';
import App from "./App.tsx";
import "./index.css";

datadogRum.init({
    applicationId: 'c9b2c93f-52aa-48d1-9f40-99d8f73b4017',
    clientToken: 'pub7a9c4ae5abad2581cdf36055bfb5ff8e',
    site: 'datadoghq.com',
    service: 'Uppingham-Market-Place-Community-Shop',
    env: 'prod',
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackResources: true,
    trackUserInteractions: true,
    trackLongTasks: true,
    plugins: [reactPlugin({ router: false })],
});

createRoot(document.getElementById("root")!).render(<App />);
