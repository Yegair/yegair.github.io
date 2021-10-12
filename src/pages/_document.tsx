import type { DocumentContext, DocumentProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

type Props = DocumentProps & {
    readonly isSnippet?: boolean;
};

class _Document extends Document<Props> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="relative font-open-sans font-light">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default _Document;
