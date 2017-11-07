const temaplate = (html, preloadedState) => {
    return `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8"/>
              <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <title>YouTube Playlist</title>
              <link rel="stylesheet" href="/static/index.css" />
            </head>
            <body>
              <div id="root">${html}</div>
              <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
              </script>
              <script async src="/static/bundle.js"></script>
            </body>
          </html>
          `
}

export default temaplate