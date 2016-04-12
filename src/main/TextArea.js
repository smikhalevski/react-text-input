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
    fitLineLength: bool
  };
  static defaultProps = {
    disabled: false,
    fitLineLength: false
  };

  state = {focused: false};

  onFocus = e => this.setState({focused: true});

  onBlur = e => this.setState({focused: false});

  componentDidMount () {
    findDOMNode(this).addEventListener('focus', e => this.refs.textarea.focus());
  }

  render () {
    const {value, defaultValue, className, style, disabled, placeholder, fitLineLength, onChange, onFocus, onBlur, ...otherProps} = this.props;
    let classNames = ['text-input--text-area'];
    if (className) {
      classNames = classNames.concat(className);
    }
    if (this.state.focused) {
      classNames.push('text-input--focused');
    }
    if (fitLineLength) {
      classNames.push('text-input--fit-line-length');
    }
    return (
      <GenericInput style={style}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={classNames}
                    value={value || defaultValue}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    tabIndex="-1">
        <GenericScrollBox axis={ScrollAxes.Y}
                          captureKeyboard={false}
                          className="text-input__area scroll-box--wrapped">
          <textarea {...otherProps}
                    ref="textarea"
                    className="text-input__control scroll-box__viewport"
                    value={value}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    onChange={onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}/>
        </GenericScrollBox>
      </GenericInput>
    );
  }
}
