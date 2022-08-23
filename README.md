# Form Builder

A Next.js app written in TypeScript (`strict: true`) that allows you to build forms & collect submissions. Build a form, get a link to the form, share the link, and then view the form submissions. Uses Firebase for Authentication & Storage. Hosted on Vercel.

## Required Environment Variables

Since this is a Firebase application, you'll need to set some environment variables to link it to a Firebase project. Put the following variables in an `.env.local` file (these all correspond to the config Firebase gives you in your project's console).

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```
