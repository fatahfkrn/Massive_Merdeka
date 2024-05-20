import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LanguageSwitcher = ({ languages, handleSelect }) => {
    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="language-dropdown">
                Language
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {languages.map((language) => (
                    <Dropdown.Item key={language.code} eventKey={language.code}>
                        {language.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

LanguageSwitcher.propTypes = {
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleSelect: PropTypes.func.isRequired,
};

export default LanguageSwitcher;