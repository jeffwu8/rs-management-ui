import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import ProductActions from "../../actions/productActions";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      description: "",
      category: "",
      department: "",
      photo_url: "",
      wholesale_price_cents: 0,
      retail_price_cents: 0,
      discountable: false,
      stock: 0,
      deleted: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleCreate() {
    let product = {
      name: this.state.name,
      description: this.state.description
    };
    this.props.toggle();
    ProductActions.createProduct(product);
  }

  handleUpdate() {
    let product = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description
    };
    this.props.toggle();
    ProductActions.updateProduct(product);
  }

  componentDidMount() {
    if (this.props.item) {
      const {
        id,
        name,
        description,
        category,
        department,
        photo_url,
        wholesale_price_cents,
        retail_price_cents,
        discountable,
        stock,
        deleted
      } = this.props.item;
      this.setState({
        id,
        name,
        description,
        category,
        department,
        photo_url,
        wholesale_price_cents,
        retail_price_cents,
        discountable,
        stock,
        deleted
      });
    }
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="first">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={this.handleNameChange}
            value={this.state.name === null ? "" : this.state.name}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="last">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            onChange={this.handleDescriptionChange}
            value={
              this.state.description === null ? "" : this.state.description
            }
            required
          />
        </FormGroup>
        <Button
          color="primary"
          onClick={this.state.id === 0 ? this.handleCreate : this.handleUpdate}
          disabled={!this.state.name || !this.state.description}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

ProductForm.propTypes = {
  toggle: PropTypes.func,
  type: PropTypes.string,
  item: PropTypes.object
};

export default ProductForm;
