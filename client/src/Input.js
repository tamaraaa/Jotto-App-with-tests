import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from './actions'

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
          data-test="input-box"
        />
        <button
          type="submit"
          data-test="submit-button"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}
const mapStateToProps = ({ success }) => {
  return { success };
};
export default connect(mapStateToProps, { guessWord})(Input);
