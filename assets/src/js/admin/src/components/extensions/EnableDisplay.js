import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Switch } from '@headlessui/react';
import classNames from '../Helper';

export default function EnableDisplay() {
	const [ enable, setEnable ] = useState(
		wp_bess_settings.wp_bess_setting.enable_display
	);
	return (
		<div className="bg-white px-4 py-5 border-r sm:px-6">
			<div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
				<div className="ml-4 mt-4">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						{ __( 'Enable Display', 'wp-bess' ) }
					</h3>
					<p className="mt-1 text-sm text-gray-500">
						{ __( 'Enable Display related block options.', 'wp-bess' ) }
					</p>
				</div>
				<div className="ml-4 mt-4 flex-shrink-0">
					<Switch
						checked={ enable }
						value={ enable }
						name="wp_bess_setting[enable_display]"
						onChange={ setEnable }
						className={ classNames(
							enable ? 'bg-wpcolor' : 'bg-gray-200',
							'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wpcolor'
						) }
					>
						<span className="sr-only"></span>
						<span
							aria-hidden="true"
							className={ classNames(
								enable ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
							) }
						/>
					</Switch>
				</div>
			</div>
		</div>
	);
}
