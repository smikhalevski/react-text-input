import 'classlist-polyfill';

import React, {Component} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import './index.less';
import {Input} from '../main/Input';

class Demo extends Component {

  render() {
    return (
      <div className="container">
        {/*<h1><span className="light">React</span> Text Input <span className="light">0.0.1</span></h1>*/}
        <div className="row">
          <div className="col-md-4">

            <Input className="form-control" defaultValue="foooooo" placeholder="Baz"/>

          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('demo'));
