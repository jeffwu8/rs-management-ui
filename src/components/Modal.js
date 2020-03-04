import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import ProductForm from "./forms/ProductForm";
import ProductActions from "../actions/productActions";

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
      ProductActions.deleteProduct(this.props.id);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    const label = this.props.buttonLabel;

    let button = "";
    let content = "";
    let modal_title = "";

    if (label === "Delete") {
      button = (
        <Button
          color="danger"
          onClick={this.toggle}
          style={{ float: "left", marginRight: "10px" }}
        >
          {label}
        </Button>
      );
      modal_title = "Delete " + this.props.type;
      content = (
        <React.Fragment>
          <ModalBody>Delete {this.props.type} Forever?</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.handleDelete}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </React.Fragment>
      );
    } else if (label === "Edit") {
      button = (
        <Button
          color="warning"
          onClick={this.toggle}
          style={{ float: "left", marginRight: "10px" }}
        >
          {label}
        </Button>
      );
      modal_title = "Edit " + this.props.type;
      content = (
        <ModalBody>
          <ProductForm toggle={this.toggle} item={this.props.item} />
        </ModalBody>
      );
    } else {
      button = (
        <Button
          color="success"
          onClick={this.toggle}
          style={{ float: "left", marginRight: "10px" }}
        >
          {label}
        </Button>
      );
      modal_title = "Add New " + this.props.type;
      content = (
        <ModalBody>
          <ProductForm toggle={this.toggle} item={this.props.item} />
        </ModalBody>
      );
    }

    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            {modal_title}
          </ModalHeader>
          {content}
        </Modal>
      </div>
    );
  }
}

ModalForm.propTypes = {
  item: PropTypes.object,
  buttonLabel: PropTypes.string.isRequired,
  id: PropTypes.number,
  type: PropTypes.string
};

export default ModalForm;
