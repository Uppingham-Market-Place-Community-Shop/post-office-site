import { createRoot } from "react-dom/client";
import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';
import App from "./App.tsx";
import "./index.css";

datadogRum.init({
    applicationId: '41135a78-5027-47e3-bf96-a8a67e973c87',
    clientToken: 'pub727d472cbbaea3f62c5ebe466a031e5c',
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
