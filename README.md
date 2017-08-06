# Styled-helpers

A collection of useful helper components for your react app

> Built using styled components

### Installation

```sh
npm install styled-helpers
```

### Usage
```jsx
import { Block } from 'styled-helpers';

const App = () => (
  <Block>
    <SomeComponent />
  </Block>
);
```

### Components

The following components are included:

#### Block

The <Block> component adds global spacing to contents, use this everywhere you need margin or padding instead of adding padding to elements (where you can)

> All blocks will have left/right padding by default unless 'full' is used.

Usage: `<Block mt={1} mb={1}>...</Block>`

```jsx
const App = () => (
  <Block mt={1}>
    <SomeComponent />
  </Block>
);
```