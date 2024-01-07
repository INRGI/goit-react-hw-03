import { Formik, Field } from 'formik';
import { ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import PropTypes from 'prop-types';
import { Button, Container, FormBlock, Input, Label } from './ContactForm.styled';
import Error from '../Error/Error';
import { ToastContainer } from 'react-toastify';

const initialValues = {
  name: "",
  number: ""
};

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const ContactForm = ({onSubmit}) => {
    const nameId = nanoid();
    const numberId = nanoid();


    const handleSubmit = (values, actions) => {
        console.log(values);
        onSubmit(values);
        
        actions.resetForm();
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <FormBlock>
                    <Container>
                        <Label htmlFor={nameId}>Name</Label>
                        <Field as={Input} type="text" name="name" id={nameId} />
                        <ErrorMessage name="name">{msg => <Error msg={msg} />}</ErrorMessage>
                    </Container>
                    <Container>
                        <Label htmlFor={numberId}>Number</Label>
                        <Field as={Input} type="number" name="number" id={numberId} />
                        <ErrorMessage name="number">{msg => <Error msg={msg} />}</ErrorMessage>
                    </Container>
                    <Button type='submit'>Add contact</Button>
                </FormBlock>
            </Formik>
            <ToastContainer />
        </>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
