import PropTypes from 'prop-types';
import { Container, Input, Label } from './Filter.styled';

const Filter = ({value, onFilterChange}) => {
    return (
        <Container>
            <Label>
                Find contacts by name
                <Input type="text" value={value} onChange={onFilterChange}/>
            </Label>
        </Container>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
}

export default Filter;