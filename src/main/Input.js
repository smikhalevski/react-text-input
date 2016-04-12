import React from 'react';
import {findDOMNode} from 'react-dom';
import {GenericInput} from './GenericInput';

const {any, bool} = React.PropTypes;

export class Input extends React.Component {

  static propTypes = {
    value: any,
    defaultValue: any,
    disabled: bool,
    placeholder: any,
    className: any,
    fitLineLength: bool
  };
  static defaultProps = {
    disabled: false,
    fitLineLength: false
  };

  state = {
    focused: false,
    value: this.props.defaultValue
  };

  onFocus = e => this.setState({focused: true});

  onBlur = e => this.setState({focused: false});

  onChange = e => {
    if ('defaultValue' in this.props) {
      this.setState({value: e.target.value});
    }
  };

  componentDidMount() {
    findDOMNode(this).addEventListener('focus', e => this.refs.input.focus());
  }

  render() {
    const {value, defaultValue, className, style, fitLineLength, ...rest} = this.props;
    let classNames = [];
    if (className) {
      classNames = classNames.concat(className);
    }
    if (this.state.focused) {
      classNames.push('text-input--focus');
    }
    if (fitLineLength) {
      classNames.push('text-input--fit-line-length');
    }
    let textValue = value;
    if (value == null) {
      textValue = this.state.value;
    }
    let listeners = {};
    for (let key in rest) {
      if (/^on[A-Z]/.test(key)) {
        listeners[key] = rest[key];
        delete rest[key];
      }
    }
    return (
      <GenericInput {...listeners}
                    {...rest}
                    style={style}
                    className={classNames}
                    value={textValue}>
        <input {...rest}
               ref="input"
               className="text-input__area text-input__control"
               value={value}
               defaultValue={defaultValue}
               onChange={this.onChange}
               onFocus={this.onFocus}
               onBlur={this.onBlur}/>
      </GenericInput>
    );
  }
}
