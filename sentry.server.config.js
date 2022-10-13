import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://7df88ea71c034b24a90a26ea078b3d09@o460544.ingest.sentry.io/4503976057896960',
  tracesSampleRate: 1.0,
});
