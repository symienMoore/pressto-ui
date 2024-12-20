import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://13f59c195c3b640ece1e3135568dc7fb@o4508294786842624.ingest.us.sentry.io/4508502197469184",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
