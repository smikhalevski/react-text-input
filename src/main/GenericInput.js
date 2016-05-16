import React from 'react';
import {findDOMNode} from 'react-dom';

const {any, bool} = React.PropTypes;

export class GenericInput extends React.Component {

  static propTypes = {
    value: any,
    disabled: bool,
    placeholder: any,
    className: any
  };
  static defaultProps = {
    disabled: false
  };

  getSubstringBoundingClientRect(start, end) {
    let el = findDOMNode(this.refs.content),
        value = el.textContent;
    el.innerHTML = `${value.substring(0, start)}<span>${value.substring(start, end)}</span>${value.substring(end)}`;
    return el.firstElementChild.getBoundingClientRect();
  }

  componentDidMount() {
    findDOMNode(this.refs.placeholder).addEventListener('mousedown', e => findDOMNode(this).focus());
  }

  render () {
    const {value, disabled, placeholder, className, children, ...rest} = this.props;
    let textValue = String(value),
        tabIndex = -1;
    if (value == null) {
      textValue = '';
      tabIndex = null;
    }
    let classNames = ['text-input'];
    if (className) {
      classNames = classNames.concat(className);
    }
    if (disabled) {
      classNames.push('text-input--disabled');
    }
    if (textValue) {
      classNames.push('text-input--filled');
    }
    return (
      <div {...rest}
           className={classNames.join(' ')}
           tabIndex={tabIndex}>
        <div ref="placeholder" className="text-input__placeholder">{placeholder}</div>
        {children}
        <div ref="content" className="text-input__content">{textValue}</div>
      </div>
    );
  }
}
