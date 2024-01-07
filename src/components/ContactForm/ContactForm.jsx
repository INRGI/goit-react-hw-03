import { nanoid } from 'nanoid';
import { useState } from "react";
import { Button, Container, Form, Input, Label } from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameId = nanoid();
    const numberId = nanoid();

    const handleSubmit = event => {
        event.preventDefault();

        onSubmit({ name, number });
        setName('');
        setNumber('');
    };

    const handleChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    return (
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor={nameId}>
                        Name
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    
                    <Label htmlFor={numberId}>
                        Number
                        <Input
                            type="tel"
                            name="number"
                            value={number}
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    
                    <Button type='submit'>Add contact</Button>
                </Form>
            </Container>
        );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;