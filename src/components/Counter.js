import React from "react";
import { connect } from "react-redux";

import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete
} from "react-icons/md";
import { Container, Button } from "reactstrap";

import { increment, decrement, clean } from "../store/actions";

const Counter = ({ count, increment, decrement, clean }) => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 className="mt-4 mb-4 h3">Contador: React + Redux</h1>
      <h2 className="mb-4">
        Contador: <strong>{count}</strong>
      </h2>
      <div className="mt-2 mb-2">
        <Button className="m-2" color="primary" onClick={increment}>
          <MdAddCircleOutline size={24} color="white" />
        </Button>
        <Button className="m-2" color="secondary" onClick={decrement}>
          <MdRemoveCircleOutline size={24} color="white" />
        </Button>
        <Button className="m-2" color="danger" onClick={clean}>
          <MdDelete size={24} color="white" />
        </Button>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement),
    clean: () => dispatch(clean)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
