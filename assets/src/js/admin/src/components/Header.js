import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import Icons from './Icons';
import { Link, useLocation } from 'react-router-dom';

function classNames( ...classes ) {
	return classes.filter( Boolean ).join( ' ' );
}

function Header() {
	const [ tab, setTab ] = useState( 'main' );
	const navigation = [
		{
			name: __( 'Settings', 'elementify-blocks' ),
			slug: 'elementify_blocks_settings',
			path: '',
		},
		{
			name: __( 'Support', 'elementify-blocks' ),
			slug: 'elementify_blocks_settings',
			path: 'support',
		},
	];

	const query = new URLSearchParams( useLocation()?.search );
	const activePage = query.get( 'page' )
		? query.get( 'page' )
		: cartflows_admin.home_slug;
	const activePath = query.get( 'path' ) ? query.get( 'path' ) : '';

	return (
		<div className="sticky top-[30px] right-0 bg-white border-b -ml-5 px-2 py-2 border-t border-gray-200 sm:px-6 z-10">
			<div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
				<h2 className="text-lg leading-6 font-medium text-gray-500">
					<span className="inline-block align-middle mr-2">{ Icons.wordpress }</span>
					<span className="align-middle"> { __( 'Block Essentials', 'elementify-blocks' ) } </span>
				</h2>
				<div className="py-2 px-2 sm:px-6 lg:py-2 lg:px-0 lg:col-span-3">
					<nav className="flex">
						{ navigation.map( ( menu ) => (
							<Link
								key={ `?page=${ menu.slug }&path=${ menu.path }` }
								to={ {
									pathname: 'admin.php',
									search: `?page=${ menu.slug }${
										'' !== menu.path ? '&path=' + menu.path : ''
									}`,
								} }
								className={ classNames(
									activePage === menu.slug && activePath === menu.path
										? 'bg-gray-50 text-wpcolor fill-wpcolor elementify-blocks-menu--active'
										: 'text-gray-900 fill-gray-900 hover:text-gray-900 hover:bg-gray-50 elementify-blocks-menu',
									'group cursor-pointer rounded-md px-3 py-2 flex items-center text-sm font-medium mx-1'
								) }
							>
								{ menu.name }
							</Link>
						) ) }
					</nav>
				</div>
				<div className="relative flex rounded-md shadow-sm">
						<a href="https://github.com/imnavanath" title={ __( 'GitHub Profile', 'elementify-blocks' ) } target="_blank" id="github" className="cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.github }
						</a>
						<a href="https://www.linkedin.com/in/navanath-bhosale" title={ __( 'Connect via LinkedIn', 'elementify-blocks' ) } target="_blank" id="linkedin" className="cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.linkedin }
						</a>
						<a href="mailto:navanath.bhosale95@gmail.com" title={ __( 'Email me', 'elementify-blocks' ) } target="_blank" id="email" className="cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.email }
						</a>
						<a href="https://www.facebook.com/navnath.bhosale.3/" title={ __( 'Connect via Facebook', 'elementify-blocks' ) } target="_blank" id="facebook" className="cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.facebook }
						</a>
						<a href="https://www.paypal.com/paypalme/NavanathBhosale" title={ __( 'Donation', 'elementify-blocks' ) } target="_blank" id="paypal" className="cursor-pointer shadow-sm px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.paypal }
						</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
