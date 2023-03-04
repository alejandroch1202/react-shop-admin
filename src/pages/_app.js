import { ProviderAuth } from '@hooks/useAuth';
import MainLayaut from '@layout/MainLayaut';
import '@styles/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayaut>
          <Component {...pageProps} />
        </MainLayaut>
      </ProviderAuth>
    </>
  );
}
