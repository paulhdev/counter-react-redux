import React from "react";
import { connect } from "react-redux";

import {
  MdSentimentVerySatisfied,
  MdSentimentVeryDissatisfied
} from "react-icons/md";
import { Container } from "reactstrap";

const DisplayCounter = ({ count }) => {
  return (
    <Container>
      {count > 0 && (
        <p className="d-flex flex-wrap justify-content-center mt-4">
          O contador está em: <strong>{count}</strong>.{" "}
          <span className="text-success">
            É um número positivo <MdSentimentVerySatisfied size={20} />
          </span>
        </p>
      )}
      {count < 0 && (
        <p className="d-flex flex-wrap justify-content-center mt-4">
          O contador está em: <strong>{count}</strong>.{" "}
          <span className="text-danger">
            É um número negativo <MdSentimentVeryDissatisfied size={20} />{" "}
          </span>
        </p>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(DisplayCounter);
