import React from 'react';

const {string, bool, any} = React.PropTypes;

export class GenericInput extends React.Component {

  static propTypes = {
    value: string,
    disabled: bool,
    placeholder: any
  };
  static defaultProps = {
    value: '',
    disabled: false
  };

  render () {
    const {value, disabled, placeholder, className, children, ...otherProps} = this.props;
    let classNames = ['text-input'];
    if (className) {
      classNames = classNames.concat(className);
    }
    if (disabled) {
      classNames.push('text-input--disabled');
    }
    if (value) {
      classNames.push('text-input--filled');
    }
    return (
      <div {...otherProps}
           className={classNames.join(' ')}>
        <div className="text-input__placeholder">{placeholder}</div>
        {children}
        <div className="text-input__content">{value}</div>
      </div>
    );
  }
}
