import 'classlist-polyfill';

import React, {Component} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import './index.less';
import {Input} from '../main/Input';
import {TextArea} from '../main/TextArea';

class Demo extends Component {

  state = {
    value: ''
  };

  render() {
    return (
      <div className="container">
        <h1><span className="light">React</span> Text Input <span className="light">0.0.3</span></h1>
        <div className="row">
          <div className="col-md-4">

            <p>Unmanaged with default value and placeholder</p>
            <Input className="form-control" defaultValue="foooooo" placeholder="Baz"/>

            <p>Managed with placeholder</p>
            <Input className="form-control" value={this.state.value} placeholder="Baz" onChange={e => this.setState({value: e.target.value})}/>

            <p>Autogrowing input</p>
            <Input className="form-control" defaultValue="foooooo" placeholder="Baz" fitLineLength={true}/>

            <p>Autogrowing textarea</p>
            <TextArea className="form-control" defaultValue="foooooo" placeholder="Baz" fitLineLength={true}/>

            <p>Textarea that grows only vertically</p>
            <TextArea className="form-control" defaultValue="foooooo" placeholder="Baz"/>

            <p>Textarea that grows only vertically to maxHeight=200px</p>
            <TextArea className="form-control form-control--constraint" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." placeholder="Baz"/>

          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('demo'));
