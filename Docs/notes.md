# Notes

* Using dotenv with bun:

```js
// Instead of `const abc = process.env.ABC_VALUE`, we can also use: 
const abc = bun.env.ABC_VALUE;
```

* About imported middleware:

```js
app.use(express());
app.use(express.json()); // = body parser for POST & PUT requests EXCEPT HTML POST FORM
app.use(express.urlencoded({ extended: true })); // body parser for HTML POST FORM
app.use(cookieParser()); // used for parsing req.cookies
```
