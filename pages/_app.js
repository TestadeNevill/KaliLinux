/*!

=========================================================
* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import "assets/scss/nextjs-material-kit.scss?v=1.1.0";


Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
    .... NO! ...                  ... MNO! ...
    ..... MNO!! ...................... MNNOO! ...
  ..... MMNO! ......................... MNNOO!! .
 ..... MNOONNOO!   MMMMMMMMMMPPPOII!   MNNO!!!! .
  ... !O! NNO! MMMMMMMMMMMMMPPPOOOII!! NO! ....
     ...... ! MMMMMMMMMMMMMPPPPOOOOIII! ! ...
    ........ MMMMMMMMMMMMPPPPPOOOOOOII!! .....
    ........ MMMMMOOOOOOPPPPPPPPOOOOMII! ...
     ....... MMMMM..    OPPMMP    .,OMI! ....
      ...... MMMM::   o.,OPMP,.o   ::I!! ...
          .... NNM:::.,,OOPM!P,.::::!! ....
           .. MMNNNNNOOOOPMO!!IIPPO!!O! .....
          ... MMMMMNNNNOO:!!:!!IPPPPOO! ....
            .. MMMMMNNOOMMNNIIIPPPOO!! ......
           ...... MMMONNMMNNNIIIOO!..........
        ....... MN MOMMMNNNIIIIIO! OO ..........
     ......... MNO! IiiiiiiiiiiiI OOOO ...........
   ...... NNN.MNO! . O!!!!!!!!!O . OONO NO! ........
    .... MNNNNNO! ...OOOOOOOOOOO .  MMNNON!........
    ...... MNNNNO! .. PPPPPPPPP .. MMNON!........
       ...... OO! ................. ON! .......
          ................................
`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>SWD Information Security </title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
