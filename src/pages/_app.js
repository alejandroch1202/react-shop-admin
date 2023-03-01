import MainLayaut from '@layout/MainLayaut';
import '@styles/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayaut>
        <Component {...pageProps} />;
      </MainLayaut>
    </>
  );
}
