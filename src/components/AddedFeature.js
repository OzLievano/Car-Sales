import React from 'react';
import { connect } from 'react-redux';
import {addFeature} from '../actions/index'

const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapToStateProps = state => {
  return {
    name:state.feature.name
  }
}

export default connect(mapToStateProps,{addFeature})(AddedFeature);
