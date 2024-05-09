/**
 * SCSS
 */
import './style.scss';

/*WordPress*/
import {
    render,
    useContext,
} from '@wordpress/element';

import {
    Spinner,
} from "@wordpress/components";

/*Inbuilt Context Provider*/
import SettingsContextProvider, {SettingsContext} from '../../context/SettingsContext.js';

/*Router*/
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

/*Inbuilt Components*/
import General from "./pages/general";
import Design from "./pages/design";
import Header from "./organisms/header";
import Footer from "./organisms/footer";

const SettingRouters = () => {
    const { useSettings } = useContext(SettingsContext);
  
    if (!Object.keys(useSettings).length) {
        return (
            <Spinner className="blockwheels-page-loader" />
        )
    }
    return  (
        <section className="blockwheels-section">
            <Header />
            <main className='blockwheels-main'>
                <Routes>
                    <Route exact path='/general' element={<General />} />
                    <Route exact path={'/design'} element={<Design />} />

                    <Route path="/" element={<Navigate replace to={'/general'} />} />
                </Routes>
            </main>
            <Footer />
        </section>
    )
}

const InitSettings = () => {
    return  (
        <HashRouter basename="/">
            <SettingsContextProvider>
                <SettingRouters />
            </SettingsContextProvider>
        </HashRouter>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    if ('undefined' !== typeof document.getElementById(blockwheelsBlocksBuild.root_id) && null !== document.getElementById(blockwheelsBlocksBuild.root_id)) {
        render(<InitSettings />, document.getElementById(blockwheelsBlocksBuild.root_id));
    }
});