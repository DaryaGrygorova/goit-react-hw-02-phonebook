import PropTypes from 'prop-types';
import { Box } from '../Box';
import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <Box as="ul" padding="15px">
      {contacts.map(({ name, number, id }) => (
        <Box as="li" key={id} marginBottom="10px">
          <ContactItem name={name} number={number} id={id} />
        </Box>
      ))}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
}.isRequired;

export default ContactList;
