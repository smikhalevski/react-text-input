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

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: props.defaultValue
    };
  }

  onFocus = e => this.setState({focused: true});

  onBlur = e => this.setState({focused: false});

  onChange = e => {
    if (this.props.value == null) {
      this.setState({value: e.target.value});
    }
  };

  componentDidMount() {
    findDOMNode(this).addEventListener('focus', e => findDOMNode(this.refs.input).focus());
  }

  render() {
    const {value, defaultValue, className, style, fitLineLength, placeholder, id, type = 'text', ...rest} = this.props;
    let classNames = ['text-input--' + type];
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
                    value={textValue}
                    placeholder={placeholder}>
        <input {...rest}
               ref="input"
               id={id}
               type={type}
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
