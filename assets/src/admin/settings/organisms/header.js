/*WordPress*/
import {useContext} from "@wordpress/element";
import {__} from "@wordpress/i18n";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext';

/*Inbuilt Components*/
import SettingsNotice from "../molecules/notice";
import Navlist from "../molecules/navlist";

const SettingsHeader = () => {
    const { useIsPending, useNotice } = useContext(SettingsContext);
    return (
        <>
            <header className="blockwheels-header blockwheels-header-sticky">
                <div className="flex justify-content-between">
                    <div className="blockwheels-title">
                        <h1>{__('BlockWheels Settings', 'blockwheels')}</h1>
                    </div>
                    {useNotice && !useIsPending && <SettingsNotice />}
                </div>               
            </header>
            <Navlist />
        </>
    );
};

export default SettingsHeader;