import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import Header from './Header';
import Footer from './Footer';
import Main from '../pages/Main';
import Support from '../pages/Support';

function EntryContent() {
	const [ saved, setSaved ] = useState( '' );

	function handleFormSubmit( e ) {
		e.preventDefault();
		const formData = new window.FormData();
		for ( let i = 0; i < e.target.length; i++ ) {
			formData.append( e.target[ i ].name, e.target[ i ].value );
		}

		formData.append( 'action', 'wp_bess_update_settings' );
		formData.append( 'security', wp_bess_settings.update_nonce );

		apiFetch( {
			url: wp_bess_settings.ajax_url,
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

	const query = new URLSearchParams( useLocation().search );
	const page = query.get( 'page' );
	const path = query.get( 'path' );

	return (
		( 'wp_bess_settings' === page ) &&
			<>
				<form
					className="wpBlockSettings"
					id="wpBlockSettings"
					method="post"
					onSubmit={ handleFormSubmit }
				>
					<Header saved={ saved } />
					<main className="max-w-[80rem] px-1 py-1 mx-auto mt-[2.5rem] bg-white rounded-lg shadow">
						<div className="lg:grid lg:gap-x-0">
							<div className="relative m-0 sm:px-6 lg:px-0 lg:col-span-9">
								{ ( 'main' === path || null === path ) && (
									<>
										<Main />
									</>
								) }
								{ 'support' === path && (
									<>
										<Support />
									</>
								) }
							</div>
						</div>
					</main>
					<Footer saved={ saved } />
				</form>
			</>
	);
}

export default EntryContent;
