import 'classlist-polyfill';

import React, {Component} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import './index.less';
import packageJson from '../../package.json';
import {Input} from '../main/Input';
import {TextArea} from '../main/TextArea';

function toPositiveInteger(val) {
  return Math.max(0, val / 1);
}

class Demo extends Component {

  state = {
    type: 'textarea',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    disabled: false,
    fitLineLength: false,
    maxWidth: 200,
    maxHeight: 292,
    placeholder: 'Placeholder'
  };

  onInputChange = e => {
    this.setState({value: e.target.value});
  };

  onKeyPressNumbersOnly(e) {
    if (e.charCode < 48 || e.charCode > 57) {
      e.preventDefault();
    }
  }

  render() {
    const {type, maxWidth, maxHeight, disabled, fitLineLength, placeholder} = this.state;

    let style = {
      maxWidth: maxWidth + 'px',
      maxHeight: maxHeight + 'px'
    };

    let control;
    if (type == 'textarea') {
      control = <TextArea style={style} disabled={disabled} placeholder={placeholder} fitLineLength={fitLineLength} className="form-control text-input--example" value={this.state.value} onChange={this.onInputChange}/>;
    } else {
      control = <Input style={style} disabled={disabled} placeholder={placeholder} fitLineLength={fitLineLength} className="form-control text-input--example" value={this.state.value} onChange={this.onInputChange}/>;
    }

    return (
      <div className="container">
        <h1><span className="light">React</span> Text Input <span className="light">v{packageJson.version}</span></h1>
        <div className="row example">{control}</div>
        <div className="row">
          <div className="col-md-4">

            <fieldset className="form-group">
              <p>Control type</p>
              <div className="radio">
                <label>
                  <input type="radio"
                         name="type"
                         checked={this.state.type === 'textarea'}
                         onChange={e => this.setState({type: 'textarea'})}/>
                  <code>TextArea</code>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio"
                         name="native-scroll"
                         checked={this.state.type === 'input'}
                         onChange={e => this.setState({type: 'input'})}/>
                  <code>Input</code>
                </label>
              </div>
            </fieldset>

            <fieldset className="form-group">
              <p><code className="prop__type">{'{boolean}'}</code> <code className="prop__name">disabled</code></p>
              <div className="checkbox">
                <label>
                  <input type="checkbox"
                         checked={this.state.disabled}
                         onChange={e => this.setState({disabled: e.target.checked})}/>
                  Disable scroll box
                </label>
              </div>
            </fieldset>

            <fieldset className="form-group">
              <p><code className="prop__type">{'{boolean}'}</code> <code className="prop__name">fitLineLength</code></p>
              <div className="checkbox">
                <label>
                  <input type="checkbox"
                         checked={this.state.fitLineLength}
                         onChange={e => this.setState({fitLineLength: e.target.checked})}/>
                  Fit line length
                </label>
              </div>
            </fieldset>

            <fieldset className="form-group">
              <p><code className="prop__type">{'{int}'}</code> <code className="prop__name">style.maxWidth</code> <code className="prop__name">style.maxHeight</code></p>
              <p>Control size constraints can be set from CSS.</p>
              <div className="input-group">
                <div className="input-group-addon">X</div>
                <input type="number"
                       className="form-control"
                       value={maxWidth}
                       onKeyPress={this.onKeyPressNumbersOnly}
                       onChange={e => this.setState({maxWidth: toPositiveInteger(e.target.value)})}/>
                <div className="input-group-addon">px</div>
              </div>
              <div className="input-group">
                <div className="input-group-addon">Y</div>
                <input type="number"
                       className="form-control"
                       value={maxHeight}
                       onKeyPress={this.onKeyPressNumbersOnly}
                       onChange={e => this.setState({maxHeight: toPositiveInteger(e.target.value)})}/>
                <div className="input-group-addon">px</div>
              </div>
            </fieldset>

          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('demo'));
