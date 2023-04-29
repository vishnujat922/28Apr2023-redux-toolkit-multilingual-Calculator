import React, { useEffect } from 'react'
import i18n from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
import { Link } from 'react-router-dom';
import LanguageDropdown from '../componets/LanguageDropdown';


/*
//object.method()
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "this Calculator design by me!": "This Calculator Design By Me!"
                }
            },
            hi: {
                translation: {
                    "this Calculator design by me!": "यह कैलकुलेटर मेरे द्वारा डिजाइन किया गया है !"
                }
            },
            ru: {
                translation: {
                    "this Calculator design by me!": "этот дизайн калькулятора от меня !"
                }
            },
            ja: {
                translation: {
                    "this Calculator design by me!": "私がデザインしたこの電卓!"
                }
            },
            it: {
                translation: {
                    "this Calculator design by me!": "私がデザインしたこの電卓!"
                }
            },
        },

        lng: "it", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });*/


const Calculator = () => {

    //2.1 Hooks Area

    const { t } = useTranslation();


    useEffect(() => {
       var cl = localStorage.getItem('curl');
       i18n.changeLanguage(cl)
    }, [])
    //2.2 Function Definition Area
    let changeLanguage = (l)=>{
        //alert('Hello Everyone'+l);
        localStorage.setItem('curlng',l);
        i18n.changeLanguage(l)
    }
    //2.3 Return Statement
    return (
        <>
           <LanguageDropdown />
            <h1>Calculator Design Using HTML Layout</h1>
            <div className="container">
                <div className="header">{t('this Calculator design by me!')}</div>
                <input type="text" className="result" />
                <div className="first-row">
                    <input type="button" name defaultValue="√" className="global" />
                    <input type="button" name defaultValue="(" className="global" />
                    <input type="button" name defaultValue=")" className="global" />
                    <input type="button" name defaultValue="%" className="global" />
                </div>
                <div className="second-row">
                    <input type="button" name defaultValue={7} className="global" />
                    <input type="button" name defaultValue={8} className="global" />
                    <input type="button" name defaultValue={9} className="global" />
                    <input type="button" name defaultValue="/" className="global" />
                </div>
                <div className="third-row">
                    <input type="button" name defaultValue={4} className="global" />
                    <input type="button" name defaultValue={5} className="global" />
                    <input type="button" name defaultValue={6} className="global" />
                    <input type="button" name defaultValue="X" className="global" />
                </div>
                <div className="fourth-row">
                    <input type="button" name defaultValue={1} className="global" />
                    <input type="button" name defaultValue={2} className="global" />
                    <input type="button" name defaultValue={3} className="global" />
                    <input type="button" name defaultValue="-" className="global" />
                </div>
                <div className="conflict">
                    <div className="left">
                        <input type="button" name defaultValue={0} className=" big" />
                        <input type="button" name defaultValue="." className=" small" />
                        <input type="button" name defaultValue="Del" className=" red small white-text top-margin" />
                        <input type="button" name defaultValue="=" className=" green white-text big top-margin" />
                    </div>
                    <div className="right">
                        <input type="button" name defaultValue="+" className="global grey plus" />
                    </div>
                </div>
            </div>
            <Link to="/" className='Link'>Goto Home</Link>
        </>
    )
}

export default Calculator