# math-main-components

Component Library for math-main-app

- reusable ui components
- math components

### Run Locally

Install [`yalc`](https://github.com/wclr/yalc) globally by running `yarn global add yalc`

In order to make the workflow more efficient, you can link the local package to the main app.
1. Go to `math-main-components` and run `yalc publish`. (only need to do this once)
2. Then go to `math-main-components` and run `yarn dev`.
3. Then go to `math-main-app` and run `yalc link math-main-components`.

No need to change anything in the `package.json` file.

In order to unlink the packages, run `yarn retreat math-main-components` in app directory.

## Notes
- Do not use any of next.js features like next/link

## Publishing
1. increment version in `package.json`
2. run `npm publish --access public`
3. run `yarn add math-main-components@0.0.1` in project