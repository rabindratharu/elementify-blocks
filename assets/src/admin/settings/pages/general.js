/*WordPress*/
import {
    useContext,
} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {
    PanelBody,
    BaseControl,
    ToggleControl,
    TextControl
} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const General = () => {
    const { useSettings, useUpdateStateSettings } = useContext(SettingsContext);
    return (
        <>
            <PanelBody
                title={ __( 'Gutenberg Editor', 'blockwheels' ) }
                className="blockwheels-panelBody"
                initialOpen={false}
            >
                <div className="blockwheels-field-wrap">
                    <BaseControl
                        label={__('Enable On','blockwheels') }
                    >
                        <ToggleControl
                            label={ __('Posts','blockwheels')  }
                            checked={ (useSettings && useSettings['post_enable'])}
                            onChange={ () => {
                                useUpdateStateSettings('post_enable', !(useSettings && useSettings['post_enable']))
                            } }
                        />
                        <ToggleControl
                            label={ __('Pages','blockwheels')  }
                            checked={ (useSettings && useSettings['page_enable'])}
                            onChange={ () => {
                                useUpdateStateSettings('page_enable', !(useSettings && useSettings['page_enable']))
                            } }
                        />
                    </BaseControl>
                </div>
            </PanelBody>
            <PanelBody
                title={ __( 'Google Map', 'blockwheels' ) }
                className="blockwheels-panelBody"
                initialOpen={false}
            >
                <div className="blockwheels-field-wrap">
                    <BaseControl
                        label={__('Map API Key','blockwheels') }
                    >
                        <TextControl
                            labelPosition={ __('Map API Key','blockwheels')  }
                            value={ (useSettings && useSettings['map_key'])}
                            onChange={newVal =>
                                useUpdateStateSettings('map_key',newVal)
                            }
                        />
                    </BaseControl>
                </div>
            </PanelBody>
        </>
    )
}

export default General;
