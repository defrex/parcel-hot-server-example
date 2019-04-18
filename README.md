### Parcel Hot Server Example

This repo uses the elegant [Parcel](https://parceljs.org/) bundler to bundle a React SSR app with Hot Module Reloading on the client **and server**.

That means when you change your React code, the Node.js environment doing the static rendering is reloading along with the browser environment.

The main logic is in [hotServerMiddleware.js](https://github.com/defrex/parcel-hot-server-example/blob/master/hotServerMiddleware.js)

The technique is largely based on [webpack-hot-server-middleware](https://github.com/60frames/webpack-hot-server-middleware).
