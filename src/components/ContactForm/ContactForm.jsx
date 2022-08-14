import { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, Label, Input, Button } from './ContactForm.styled';
import { Formik } from 'formik';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  onSubmitHandler = (value, { resetForm }) => {
    this.props.formSubmitHandler({ ...value, id: nanoid() });
    resetForm();
  };

  onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.onSubmitHandler}
      >
        <StyledForm>
          <Label htmlFor={this.nameInputId}>Name</Label>
          <Input
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label htmlFor={this.numberInputId}>Number</Label>
          <Input
            id={this.numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    );
  }
}

export default ContactForm;
