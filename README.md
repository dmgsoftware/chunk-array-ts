# Chunks Array TS

A tiny module that turns your array into chunks of n-size, in TypeScript!

[//]: # (## Usage)

[//]: # ()
[//]: # (```sh)

[//]: # (npm install chunk-array --save)

[//]: # (```)

### chunks(arr, n)

Turn array into chunks of size n. If n is 0 or less, then the original array is returned.

```ts
import chunks from 'chunks-array-ts'

const arr = [1,2,3,4,5,6]
const results = chunks(arr, 3) //[[1,2,3], [4,5,6]]
```

### pairs(arr)

A convenient method that turn an array into pair chunks, which is equivalent to `chunks(arr, 2)`.

```ts
import pairs from 'chunks-array-ts'

const arr = [1,2,3,4,5,6]
const results = pairs(arr) //[[1,2], [3,4], [5,6]]
```

### LICENSE

MIT
