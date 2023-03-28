import Layout from "../components/layout/Layout";
import "../styles/globals.css";

//File _app is useful for global configuration
//Like layout od global css
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
