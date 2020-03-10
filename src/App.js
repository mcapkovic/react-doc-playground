import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import PropsTable from 'react-docgen-props-table'
import './App.css';
import ComponentsDoc from './ComponentsDoc';
import components from './docs/components.json'

const docgenInfo = {
  "description": "General component description.",
  "displayName": "MyComponent",
  "methods": [],
  "props": {
    "foo": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": "Description foo."
    },
    "bar": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Description bar.\n\n- markdown list-item 1\n- markdown list-item 2",
      "defaultValue": {
        "value": "'bar'",
        "computed": false
      }
    },
    "baz": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Description baz."
    }
  }
}

function App(props) {
  return (
    <div className="App">

     <ComponentsDoc components ={components}/> 
    </div>
  );
}

export default App;


App.propTypes = {
  name: PropTypes.string
};