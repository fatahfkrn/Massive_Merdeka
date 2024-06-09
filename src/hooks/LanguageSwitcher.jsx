/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import { Navbar, Dropdown } from "react-bootstrap";
import "../css/LanguageSwitcher.css";

const languages = [
    { code: "default", name: "ID" },
    { code: "variant-3", name: "EN" },

];

const LanguageSwitcher = () => {
    const [selectedLanguage, dispatch] = useReducer(reducer, "default");

    const handleSelect = (eventKey) => {
        dispatch(eventKey);
    };

    return (
        <Navbar.Collapse className="pembungkus">
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="light" className={`language ${selectedLanguage}`}>
                    {languages.find((l) => l.code === selectedLanguage).name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {languages.map((language) => (
                        <Dropdown.Item eventKey={language.code} key={language.code}>
                            {language.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </Navbar.Collapse>
    );
};

function reducer(state, action) {
    return action;
}

export default LanguageSwitcher;