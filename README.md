# React Text Input

[![npm version](https://badge.fury.io/js/react-text-input.svg)](https://www.npmjs.com/package/react-text-input)

[**Live Demo**](http://smikhalevski.github.io/react-text-input/)

## Motivation

- Use arbitrary markup in `placeholder` even icons, animation etc.
- Customize scrollbars for [`TextArea`](/src/main/TextArea.js). Done with help of [`react-scroll-box`](http://github.com/smikhalevski/react-scroll-box).
- Enable vertical and horizontal autogrow that is fully controlled from CSS for [`Input`](/src/main/Input.js) and [`TextArea`](/src/main/TextArea.js).
- Use components in either controlled or uncontrolled way.

## Usage

```jsx
var TextArea = require('react-text-input').TextArea; // ES5

import {Input, TextArea, GenericInput} from 'react-text-input'; // ES6

<TextArea defaultValue="Hello world!"/>
```

## Components

This pakage provides three React components:

### `GenericInput`

Abstract component that expects arbitrary editing control as a child. Manages placeholder and autogow.

Prop Name | Type | Default | Description
--- | --- | --- | ---
`value` | String | | Value represented by this `GenericInput`.
`disabled` | Boolean | `false` | Toggles component disabled with `.text-input--disabled`.
`placeholder` | * | | Any value including React element, that is displayed if `value` is empty.
`className` | String | | Style class name added to root element.

### `Input`

One line text input component. Generally behaves like regular `input`. Inherits all properties from `GenericInput` and regular `input`.

Prop Name | Type | Default | Description
--- | --- | --- | ---
`value` | String | | Value represented by this `Input` if it is controlled. 
`defaultValue` | String | | Default value represented by this `Input` if it is uncontrolled.
`fitLineLength` | Boolean | `false` | Should.

Uncontrolled input component markup:

```jsx
<Input type="search"
       defaultValue="Christmas gifts"
       placeholder={<span><i className="fa fa-search"/> Search</span>}
       fitLineLength={true}/>
```

### `TextArea`

Autogrowing text area implementation. Has all the same properties as `Input`.

```jsx
<TextArea fitLineLength={true}
          onChange={e => console.log(e.target.value)}/>
```

## Styles

By default, components have no visual decoration, so you need to provide a custom class name (like [`form-control`](http://getbootstrap.com/css/#forms) from Bootstrap) to make it them visible.

In most cases you should change styling only for the root DOM element. Styles applied to `Input` and `TextArea` behave just like regular `input` and `textare` elements do.

Class Name | Description
--- | ---
<code>.text-input</code> | Root style class for both `Input` and `TextArea`
<code>.text-input--filled</code> | Added when component stores a non-empty value.
<code>.text-input--disabled</code> | Added when component is disabled.
<code>.text&#8209;input&#8209;&#8209;fit&#8209;line&#8209;length</code> | Added when component should grow horizontally.
<code>.text-input--text</code> | Modifier that matches type of `input` control. For example, `input[type="password"]` would have <code>.text-input--password` specified.
<code>.text-input--text-area</code> | Added for `textarea` control.
<code>.text-input__control</code> | HTML UI element `input` or `textarea`.
<code>.text-input__placeholder</code> | Placeholder container. Content of the `placeholder` prop is rendered inside this container.
<code>.text-input__content</code> | Container that stores input text. Required for autogrow.

### Autogrowing

By default, `TextArea` has height of a single line of text and grows vertically without any limit. You can constraint vertical expansion with `min-height` and `max-height`.

```less
.vertical-constraint {
  min-height: 100px;
  max-height: 200px;
}
```

Then provide this modifier as a `className` value.

```jsx
<TextArea className="vertical-constraint"/>
```

Horizontal constraints work in the same way for both `Input` and `TextArea` when `fitLineLength={true}` specified.

```less
.horizontal-constraint {
  min-width: 100px;
  max-width: 200px;
}
```

## License

The code is available under [MIT licence](LICENSE.txt).
