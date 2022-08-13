import PropTypes from 'prop-types';
import { Item, Info, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  return (
    <Item>
      <Info>
        {name}: {number}
      </Info>
      <Button
        type="button"
        onClick={() => {
          console.log(id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}.isRequired;

export default ContactItem;
