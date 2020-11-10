import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): ReactElement {
    return <Html lang="pl">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: 'const whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: true };',
          }}></script>
        <script src="https://wow.zamimg.com/widgets/power.js"></script>
      </body>
    </Html>;
  }
}

export default MyDocument;
