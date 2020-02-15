


import Head from "next/head";

import Header from "./Header";

import Footer from "./Footer"

import "./MyLayout.scss"

const Layout = props => (
  <div className="Layout">
    <Head>
      <title>Meron</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <div className="Content">{props.children}</div>
    <Footer />
    <style jsx>{`
      .Layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }

      .Content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
);

export default Layout;


