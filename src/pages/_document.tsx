// eslint-disable-next-line max-classes-per-file
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

import { createEmotionCache } from 'src/core';
import { lightTheme, darkTheme } from 'src/services/theme';

// why we need this: https://github.com/vercel/next.js/issues/9794 and https://nextjs.org/docs/messages/no-document-import-in-page
const dedupeHead = (head?: (JSX.Element | null)[]) =>
  head?.filter((item) => !item?.props?.charSet);

class DocumentHead extends Head {
  render() {
    this.context.head = dedupeHead(this.context.head);

    return super.render();
  }
}

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <DocumentHead>
          <meta charSet="utf-8" key="charset" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color={lightTheme.palette.primary.main}
          />
          <meta name="apple-mobile-web-app-title" content="Integrator" />
          <meta name="application-name" content="Integrator" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="color-scheme" content="light dark" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content={lightTheme.palette.primary.main}
            key="theme-color-light"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content={darkTheme.palette.primary.main}
            key="theme-color-dark"
          />
          <meta name="copyright" content="Palapa" />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {(this.props as any).emotionStyleTags}
        </DocumentHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/*
 * `getInitialProps` belongs to `_document` (instead of `_app`),
 * it's compatible with static-site generation (SSG).
 */
CustomDocument.getInitialProps = async (ctx) => {
  /*
   * Resolution order
   *
   * On the server:
   * 1. app.getInitialProps
   * 2. page.getInitialProps
   * 3. document.getInitialProps
   * 4. app.render
   * 5. page.render
   * 6. document.render
   *
   * On the server with error:
   * 1. document.getInitialProps
   * 2. app.render
   * 3. page.render
   * 4. document.render
   *
   * On the client
   * 1. app.getInitialProps
   * 2. page.getInitialProps
   * 3. app.render
   * 4. page.render
   */

  const originalRenderPage = ctx.renderPage;

  /*
   * You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
   * However, be aware that it can have global side effects.
   */
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  /*
   * This is important. It prevents emotion to render invalid HTML.
   * See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
   */
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

export default CustomDocument;
