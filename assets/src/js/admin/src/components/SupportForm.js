import { __ } from '@wordpress/i18n';

function SupportForm() {

	function supportFormSubmit( e ) {
		e.preventDefault();
		const formData = new window.FormData();
		for ( let i = 1; i < e.target.length; i++ ) {
			formData.append( e.target[ i ].name, e.target[ i ].value );
		}

		formData.append( 'action', 'wp_bess_update_settings' );
		formData.append( 'security', elementify_blocks_settings.update_nonce );

		apiFetch( {
			url: elementify_blocks_settings.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			setSaved( 'saved' );
			setTimeout( () => {
				setSaved( '' );
				window.location.reload( false );
			}, 1000 );
		} );
	}

	return (
		<>
			<form
				action="#"
				method="POST"
				onSubmit={ supportFormSubmit }
			>
				<div className="elementify-blocks-supportform sm:overflow-hidden">
					<div className="px-4 py-5 bg-white space-y-6 sm:p-6">

						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700">
								{ __( 'Name', 'elementify-blocks' ) }
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="name"
									id="name"
									className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-2"
									placeholder={ elementify_blocks_settings.wp_bess_support_settings.name }
								/>
							</div>
						</div>

						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700">
								{ __( 'Email', 'elementify-blocks' ) }
							</label>
							<div className="mt-1">
								<input
									type="email"
									name="name"
									id="name"
									className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-2"
									placeholder={ elementify_blocks_settings.wp_bess_support_settings.email }
								/>
							</div>
						</div>

						<div>
							<label htmlFor="subject" className="block text-sm font-medium text-gray-700">
								{ __( 'Subject', 'elementify-blocks' ) }
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="subject"
									id="subject"
									className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-2"
									placeholder={ '' }
								/>
							</div>
						</div>

						<div>
							<label htmlFor="about" className="block text-sm font-medium text-gray-700">
								{ __( 'Description', 'elementify-blocks' ) }
							</label>
							<div className="mt-1">
								<textarea
								id="about"
								name="about"
								rows={3}
								className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
								placeholder={ '' }
								defaultValue={''}
								/>
							</div>
							<p className="mt-2 text-sm text-gray-500">
								Brief description for your query.
							</p>
						</div>

					</div>
					<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button
							type="submit"
							className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
						{ __( 'Send', 'wp-bess' ) }
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default SupportForm;
