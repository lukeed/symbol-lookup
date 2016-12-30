# symbol-lookup

> A Node ([micro](https://www.npmjs.com/package/micro))server to lookup company stock symbols.

Quick wrapper for the Yahoo! Finance autocomplete API. It will suggest up to 10 results that match a given query.

The **only** change is the inclusion of `Access-Control-Allow-Origin: *`, which enables AJAX requests in modern browsers.


## Install

```
git clone https://github.com/lukeed/symbol-lookup
npm install
npm start
```

Accessible via the browser at `localhost:3000`.


## Example

```
curl -v https://lookup.now.sh/y
curl -v https://lookup.now.sh/micro
curl -v https://lookup.now.sh/wells fargo
```


## License

MIT © [Luke Edwards](https://lukeed.com)