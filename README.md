# 996-icu-banner

[![npm](https://img.shields.io/npm/v/@dev-sam/996-icu-banner.svg)](https://www.npmjs.com/package/@dev-sam/996-icu-banner)
[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

A React banner component that shows your support for [996.icu](https://github.com/996icu/996.ICU).
[Demo](https://996-icu-banner.developersam.com)

## Background

[996.icu](https://github.com/996icu/996.ICU) is currently the second most starred project on GitHub.
Some Chinese browsers [blocked the repo page](https://github.com/996icu/996.ICU/pull/24904). Let's
add the banner to our personal website and also get ourselves blocked!

(Inspired by [Lets-get-arrested project](https://github.com/hamukazu/lets-get-arrested)).

## Usage

You can install it by:

- yarn: `yarn add @dev-sam/996-icu-banner`
- npm: `npm i @dev-sam/996-icu-banner`

```jsx
import Banner from '@dev-sam/996-icu-banner'

// anywhere inside your react app
// let's use App as an example

export default function App() {
  return (
    <div>
      ... Banner does not need to be the first element
      <Banner />
      ... some other stuff
    </div>
  );
}
```

The component supports some customization. Here are a list of all the props it accepts:

```typescript
type Languages = 'en_US' | 'zh-Hans';
type Props = {
  readonly bannerPosition: 'top' | 'bottom';
  readonly lang: Languages;
  readonly className: string | undefined;
  readonly styles: CSSProperties | undefined;
}
```

You can also check that directly in [`index.tsx`](./src/index.tsx).

Each DOM element has a unique ID. You can directly style them using CSS or passing in `className` or
`styles` props to style the top-level banner.

In order to ensure that the `position: fixed` banner is visible, it's recommend to style it with
`z-index: 996996`;

## Contribution

You can contribute by:

- adding more translations
- support better customization
- etc

## License

Anti 996 License. License Banner displayed again to show my support.

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
