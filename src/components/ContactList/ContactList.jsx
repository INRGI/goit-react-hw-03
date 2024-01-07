import PropTypes from 'prop-types';
import { Button, Contact, Container } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
    <Container>
        {contacts.map(contact => (
            <Contact key={contact.id}>
                {contact.name + ' : ' + contact.number}
                <Button
                    type='button'
                    name='delete'
                    onClick={() => onDeleteContact(contact.id)}
                >
                    Delete
                </Button>
            </Contact>
        ))}
    </Container>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;