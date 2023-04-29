import { Dropdown } from 'react-bootstrap'
import React from 'react'
import i18n from '../i18n'

const LanguageDropdown = () => {
    let changeLanguage = (l)=>{
        //alert('Hello Everyone'+l);
        localStorage.setItem('curlng',l);
        i18n.changeLanguage(l)
    }
    return (   
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Language
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>{changeLanguage('en');}}>English</Dropdown.Item>
                <Dropdown.Item onClick={()=>{changeLanguage('hi');}}>Hindi</Dropdown.Item>
                <Dropdown.Item onClick={()=>{changeLanguage('ja');}}>Japaness</Dropdown.Item>
                <Dropdown.Item onClick={()=>{changeLanguage('ru');}}>Russian</Dropdown.Item>
                <Dropdown.Item onClick={()=>{changeLanguage('it');}}>Italian</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LanguageDropdown