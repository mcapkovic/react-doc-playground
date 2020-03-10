import React from 'react';
import PropTypes from 'prop-types';

function Test(props) {
  return (
    <div className="App">
        test
    </div>
  );
}

export default Test;


Test.propTypes = {
  name: PropTypes.string
};