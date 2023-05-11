import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

import { Header, Form, Button, SearchIcon, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchValue = this.state.value.trim();

    if (searchValue === '') {
      toast.error(
        'The search field cannot be empty. Please enter a query and try again.'
      );
      return;
    }

    this.props.onSubmit(searchValue);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="search"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <Button type="submit" aria-label="Search">
            <SearchIcon size={24} />
          </Button>
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
