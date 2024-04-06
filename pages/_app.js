import "./globals.css";
import "./HomePage.css";

export default function App({ Component, pageProps }) {
  return <>
  <div>Header</div>
  <Component {...pageProps} />
  </>

}
