import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Main from '@/src/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </UserProvider>
  )
}
