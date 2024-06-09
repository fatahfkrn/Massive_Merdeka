/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "../css/SearchBar.css";
import { FaSearch } from "react-icons/fa";


export const SearchBar = ({ property1, className }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`search-bar ${state.property1} ${className}`}
            onClick={() => {
                dispatch("click");
            }}
        >
            {state.property1 === "default" && <FaSearch />}

            {state.property1 === "variant-2" && (
                <div className="overlap-group">
                    <FaSearch className="img" />
                    <div>
                        
                    </div>
                </div>
            )}
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "click":
            return {
                ...state,
                property1: "variant-2",
            };
    }

    return state;
}

SearchBar.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
