import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Nav from "../components/Nav";
import {Footer} from "../components/Footer";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>

            <link href="//cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
                  crossOrigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/css/vendor.css"/>
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet"/>
        </Head>
        <body>
        <Nav/>
        <Main/>
        <Footer />
        <NextScript/>
        <Script src="/js/jquery-1.11.0.min.js" onLoad={() => console.log('jQuery loaded')}></Script>
        <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                crossOrigin="anonymous"></Script>
        <Script src="/js/plugins.js" strategy="lazyOnload"></Script>
        <Script src="/js/script.js" strategy="lazyOnload"></Script>
        <Script src="//code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></Script>
        </body>
    </Html>
  );
}
