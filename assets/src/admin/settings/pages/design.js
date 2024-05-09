/*WordPress*/
import {
    useContext,
} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {
    PanelBody,
    BaseControl,
    ToggleControl,
    SelectControl,
    ColorPalette
} from "@wordpress/components";

/*Inbuilt Context*/
import { SettingsContext } from '../../../context/SettingsContext.js';

const Design = () => {
    const { useSettings, useUpdateStateSettings } = useContext(SettingsContext);
    // Font Options
    const fontOptions = typeof blockwheelsBlocksBuild !== 'undefined' && blockwheelsBlocksBuild.allFonts 
    ? Object.keys(blockwheelsBlocksBuild.allFonts).map(( font ) => {
        return {label: blockwheelsBlocksBuild.allFonts[font].name, value: font};
    }) 
    : [];

    return (
        <>
            <PanelBody
                title={ __( 'Typography', 'blockwheels' ) }
                className="blockwheels-panelBody"
                initialOpen={false}
            >
                <div className="grid gap sm-grid-cols-1 md-grid-cols-2 grid-cols-3">
                    <div className="blockwheels-field-wrap">
                        <BaseControl
                            label={__('Base','blockwheels') }
                        >
                            <SelectControl
                                value={useSettings && useSettings['base_type']}
                                options={fontOptions}
                                onChange={newVal =>
                                    useUpdateStateSettings('base_type',newVal)
                                }
                            />
                        </BaseControl>
                    </div>
                    <div className="blockwheels-field-wrap">
                        <BaseControl
                            label={__('Heading','blockwheels') }
                        >
                            <SelectControl
                                value={useSettings && useSettings['heading_typo']}
                                options={fontOptions}
                                onChange={newVal =>
                                    useUpdateStateSettings('heading_typo',newVal)
                                }
                            />
                        </BaseControl>
                    </div>
                </div>
            </PanelBody>

            <PanelBody
                title={ __( 'Color Patterns', 'blockwheels' ) }
                className="blockwheels-panelBody"
                initialOpen={false}
            >
                <div className="grid gap sm-grid-cols-1 md-grid-cols-2 grid-cols-3">
                    <div className="blockwheels-field-wrap">
                        <BaseControl
                            label={__('Color 1','blockwheels') }
                        >
                            <ColorPalette
                                enableAlpha
                                value={ (useSettings && useSettings['color_1'])}
                                onChange={newVal =>
                                    useUpdateStateSettings('color_1',newVal)
                                }
                            />
                        </BaseControl>
                    </div>
                    <div className="blockwheels-field-wrap">
                        <BaseControl
                            label={__('Color 2','blockwheels') }
                        >
                            <ColorPalette
                                enableAlpha
                                value={ (useSettings && useSettings['color_2'])}
                                onChange={newVal =>
                                    useUpdateStateSettings('color_2',newVal)
                                }
                            />
                        </BaseControl>
                    </div>
                    <div className="blockwheels-field-wrap">
                        <BaseControl
                            label={__('Color 3','blockwheels') }
                        >
                            <ColorPalette
                                enableAlpha
                                value={ (useSettings && useSettings['color_3'])}
                                onChange={newVal =>
                                    useUpdateStateSettings('color_3',newVal)
                                }
                            />
                        </BaseControl>
                    </div>
                    <div className="blockwheels-field-wrap">
                        <BaseControl
                            label={__('Color 4','blockwheels') }
                        >
                            <ColorPalette
                                enableAlpha
                                value={ (useSettings && useSettings['color_4'])}
                                onChange={newVal =>
                                    useUpdateStateSettings('color_4',newVal)
                                }
                            />
                        </BaseControl>
                    </div>
                    <div className="blockwheels-field-wrap">
                        <BaseControl
                            label={__('Color 5','blockwheels') }
                        >
                            <ColorPalette
                                enableAlpha
                                value={ (useSettings && useSettings['color_5'])}
                                onChange={newVal =>
                                    useUpdateStateSettings('color_5',newVal)
                                }
                            />
                        </BaseControl>
                    </div>
                </div>
                
            </PanelBody>
            
        </>
    )
}

export default Design;