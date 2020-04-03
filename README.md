FaceBook Rome Demo
==================


# ESM & CJS

* import CJS from ESM

```javascript
import * as cjs1 from "./cjs1"
```

* import ESM from CJS with dynamic import

```javascript
(async () => {
    let math = await import("./math.mjs")
    console.log(math.sum(1, 2))
})();
```

# References

* Rome: https://romejs.dev/
