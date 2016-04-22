# React Text Input

[![npm version](https://badge.fury.io/js/react-text-input.svg)](https://www.npmjs.com/package/react-text-input)

[**Live Demo**](http://smikhalevski.github.io/react-text-input/)

- Use any markup in placeholders, including icons, animation etc.
- Highly customizable scrollbars for [`TextArea`][TextArea.js] using [`react-scroll-box`](http://github.com/smikhalevski/react-scroll-box).
- Vertical and horizontal autogrow for [`Input`][TextArea.js] and [`TextArea`][TextArea.js]. Fully controlled from CSS.
- Support for both controlled and uncontrolled component usages.

## Styles

Class Name | Description
--- | ---
`.text-input` | Root style class for both `Input` and `TextArea`
`.text-input--filled` | Added when component stores a non-empty value.
`.text-input--disabled` | Added when component is disabled.
`.text-input--fit-line-length` | Added when component should grow horizontally.
`.text-input--text` | Modifier that matches type of `input` control. For example, `input[type="password"]` would have `.text-input--password` specified.
`.text-input--text-area` | Added for `textarea` control.
`.text-input__control` | HTML UI element `input` or `textarea`.
`.text-input__placeholder` | Placeholder container. Content of the `placeholder` prop is rendered inside this container.
`.text-input__content` | Container that stores input text. Required for autogrow.

## License

The code is available under [MIT licence](LICENSE.txt).

[Input.js]: /src/main/TextArea.js
[TextArea.js]: /src/main/TextArea.js
