import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/layout";
import { montrerrat } from "~/fonts";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={montrerrat.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
