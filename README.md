# test-veaury

Reproducing of the issue with Jest tests + Veaury when Vue component is wrapped by React component.
It causes the following error:

`Error: Uncaught [RangeError: Maximum call stack size exceeded]`

In this example in `src/components/Page2.vue` `<SimpleComponent/>` (Vue component) is wrapped by `<Box/>` component (React component). It causes the error.

Folder `src/components/carbon` contains React components wrapped by Veaury.

## Project Setup

```sh
npm install
```

### How to run the test to reproduce the bug
Run 'test1' in src/test1.test.js

### Additional notes
You can try to change `src/components/Page2.vue` so that `<SimpleComponent/>` should be outside of the `<Box>` tag, in this case the test will run successfully.

# veaury-jest-issue
