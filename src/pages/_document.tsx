import Document, { Html, Head, Main,  NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <>
                <Html lang="pt-BR">
                    <Head>
                        <meta httpEquiv="refresh" content="600"/>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="shortcut icon" href="favicon.png" type="image/png" />
                        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,100;1,200;1,300&family=IBM+Plex+Sans:ital,wght@0,300;1,200&family=Montserrat:wght@200&family=Roboto:ital,wght@0,400;1,300&display=swap" rel="stylesheet"></link>
                        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,400&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
                    </Head>
                    <body>
                        
                        <Main />
                        <NextScript />
                        
                    </body>
                </Html>
            </>
        )
    }
}