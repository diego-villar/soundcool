import React from "react";
import { changeBlock } from "./actions";
import { connect } from "react-redux";

const Filter = ({ blockInfo, changeBlock }) => {
  // let {} = blockInfo;
  return (
    <React.Fragment>
      <div
        className=""
        style={{
          width: "288px",
          height: "188px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "263px",
            height: "168px",
            top: "10px",
            left: "10px",
            backgroundColor: "#DCDEE0"
          }}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
}
export default connect(
  mapStateToProps,
  { changeBlock }
)(Filter);
