import { Dropdown } from 'react-bootstrap'
import React from 'react'

const LanguageDropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Language
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Hindi</Dropdown.Item>
                <Dropdown.Item href="#">Japaness</Dropdown.Item>
                <Dropdown.Item href="#">Russian</Dropdown.Item>
                <Dropdown.Item href="#">Italian</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LanguageDropdown