import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Icons from './Icons';

function Footer( props ) {
	const [ status, setStatus ] = useState( '' );

	useEffect( () => {
		setStatus( props.saved );
	}, [ props.saved ] );

	function processing() {
		setStatus( 'processing' );
	}

	return (
		<div className="fixed bottom-0 right-0 left-0 bg-white border-b ml-[160px] px-2 py-2 border-t border-gray-200 sm:px-6 z-10">
			<div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
				<p className="mt-1 text-sm text-gray-500">
					{ __( 'Thank you for using WP Block Essentials.', 'elementify-blocks' ) }
				</p>
				<div className="relative">
					<div className="relative container flex justify-center items-center">
						<button
							type="submit"
							onClick={ () => {
								processing();
							} }
							className="w-32 justify-center inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-wpcolor"
						>
							{ '' === status && (
								<>{ __( 'Save', 'elementify-blocks' ) }</>
							) }
							{ 'processing' === status && (
								<>
									<span>{ Icons.spinner }</span>
									{ __( 'Saving', 'elementify-blocks' ) }
								</>
							) }
							{ 'saved' === status && (
								<>
									<span className="pr-2">
										{ Icons[ 'checked-circle' ] }
									</span>
									{ __( 'Saved', 'elementify-blocks' ) }
								</>
							) }
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
