import React from 'react';
import {findDOMNode} from 'react-dom';
import {GenericInput} from './GenericInput';

const {string, bool, any} = React.PropTypes;

export class Input extends React.Component {

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

  state = {
    focused: false,
    content: this.props.value || this.props.defaultValue
  };

  onFocus = e => this.setState({focused: true});

  onBlur = e => this.setState({focused: false});

  onChange = e => {
    if ('defaultValue' in this.props) {
      // Update content of uncontrolled component manually.
      this.setState({content: e.target.value});
    }
  };

  componentDidMount() {
    findDOMNode(this).addEventListener('focus', e => this.refs.input.focus());
  }

  render() {
    const {value, defaultValue, className, style, disabled, placeholder, fitLineLength, ...otherProps} = this.props;
    let classNames = [];
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
                    value={this.state.content}>
        <input {...otherProps}
               ref="input"
               className="text-input__area text-input__control"
               value={value}
               defaultValue={defaultValue}
               disabled={disabled}
               onChange={this.onChange}
               onFocus={this.onFocus}
               onBlur={this.onBlur}/>
      </GenericInput>
    );
  }
}
