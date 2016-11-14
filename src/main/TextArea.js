import React from 'react';
import {findDOMNode} from 'react-dom';
import {GenericScrollBox, ScrollAxes} from 'react-scroll-box';
import {GenericInput} from './GenericInput';

const {string, bool, any} = React.PropTypes;

export class TextArea extends React.Component {

  static propTypes = {
    value: string,
    defaultValue: string,
    disabled: bool,
    className: string,
    placeholder: any,
    fitLineLength: bool,
    propagateWheelScroll: bool
  };
  static defaultProps = {
    disabled: false,
    fitLineLength: false,
    propagateWheelScroll: true
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

  componentDidMount () {
    findDOMNode(this).addEventListener('focus', e => findDOMNode(this.refs.textarea).focus());
  }

  render () {
    const {value, propagateWheelScroll, defaultValue, className, style, fitLineLength, placeholder, onViewportScroll, ...rest} = this.props;
    let classNames = ['text-input--text-area'];
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
        <GenericScrollBox {...rest}
                          captureKeyboard={false}
                          propagateWheelScroll={propagateWheelScroll}
                          outset={false}
                          onViewportScroll={onViewportScroll}
                          className="text-input__area scroll-box--wrapped">
          <textarea {...rest}
                    ref="textarea"
                    className="text-input__control scroll-box__viewport"
                    value={value}
                    defaultValue={defaultValue}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}/>
        </GenericScrollBox>
      </GenericInput>
    );
  }
}
