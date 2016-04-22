# React Text Input

[![npm version](https://badge.fury.io/js/react-text-input.svg)](https://www.npmjs.com/package/react-text-input)

[**Live Demo**](http://smikhalevski.github.io/react-text-input/)

- Use arbitrary markup in `placeholder` even icons, animation etc.
- Customize scrollbars for [`TextArea`][TextArea.js]. Done with help of [`react-scroll-box`](http://github.com/smikhalevski/react-scroll-box).
- Enable vertical and horizontal autogrow that is fully controlled from CSS for [`Input`][TextArea.js] and [`TextArea`][TextArea.js].
- Use components in either controlled or uncontrolled way.

## Styles

Class Name | Description
--- | ---
<code>.text&#8209;input</code> | Root style class for both `Input` and `TextArea`
<code>.text&#8209;input&#8209;&#8209;filled</code> | Added when component stores a non-empty value.
<code>.text&#8209;input&#8209;&#8209;disabled</code> | Added when component is disabled.
<code>.text&#8209;input&#8209;&#8209;fit&#8209;line&#8209;length</code> | Added when component should grow horizontally.
<code>.text&#8209;input&#8209;&#8209;text</code> | Modifier that matches type of `input` control. For example, `input[type="password"]` would have <code>.text&#8209;input&#8209;&#8209;password` specified.
<code>.text&#8209;input&#8209;&#8209;text&#8209;area</code> | Added for `textarea` control.
<code>.text&#8209;input__control</code> | HTML UI element `input` or `textarea`.
<code>.text&#8209;input__placeholder</code> | Placeholder container. Content of the `placeholder` prop is rendered inside this container.
<code>.text&#8209;input__content</code> | Container that stores input text. Required for autogrow.

## License

The code is available under [MIT licence](LICENSE.txt).

[Input.js]: /src/main/TextArea.js
[TextArea.js]: /src/main/TextArea.js
