import React from 'react';
import favicon from '../static/favicon.ico';

const HTML = props => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="google-site-verification"
        content="ir-ErX9eSOs0Gl_4GsF5BUqMDF0Wl5jpAlCY_u4bdx0"
      />
      <link rel="shortcut icon" type="image/png" href={favicon} />
      {props.headComponents}
    </head>
    <body>
      <div
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
);

export default HTML;
