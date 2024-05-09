<?php
/**
 * Admin class
 *
 * @package Elementify_Blocks
 * @since 1.0.0
 */

namespace Elementify_Blocks\Inc;

use Elementify_Blocks\Inc\Traits\Singleton;
use Elementify_Blocks\Inc\Utils\Helper;

/**
 * Admin class.
 *
 * Handles all admin related functionality.
 *
 * @since 1.0.0
 */
class Admin {

	use Singleton;

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	protected function __construct() {
		
		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'admin_menu', [ $this, 'add_admin_menu' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_admin_assets' ] );
	}

	/**
	 * Adds admin menu for settings page.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function add_admin_menu() {
		add_menu_page(
			esc_html__( 'Settings - Elementify Blocks', 'elementify-blocks' ),
			esc_html__( 'Elementify', 'elementify-blocks' ),
			'administrator',
			ELEMENTIFY_BLOCKS_NAME,
			[ $this, 'render_elementify_blocks' ],
			'data:image/svg+xml;base64,' . base64_encode(
				'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 222.873 222.884" enable-background="new 0 0 222.873 222.884" xml:space="preserve">
           <g>
               <g>
                   <g>
                       <path fill="#BFBFBF" d="M63.079,157.804c-0.872-1.744-1.663-3.805-2.421-6.306L57.443,141H23.146
                           c-1.21,0-1.812-0.604-1.812-1.812v-20.774H78.5c4.521,0,7.631,0.718,9.382,2.125L104.9,68.736
                           c0.033-0.102,0.077-0.183,0.111-0.284c-0.031-0.03-0.058-0.066-0.089-0.096c-4.044-3.809-10.854-5.714-20.427-5.714H4.182
                           C1.395,62.642,0,64.034,0,66.824v89.236c0,2.787,1.395,4.182,4.182,4.182h60.403C64.049,159.484,63.527,158.698,63.079,157.804z
                            M21.333,83.694c0-1.205,0.603-1.812,1.812-1.812h57.028c3.625,0,6.25,0.676,7.877,2.024c1.626,1.348,2.44,3.463,2.44,6.343v4.74
                           c0,2.697-0.836,4.74-2.51,6.135c-1.672,1.395-4.835,2.093-9.481,2.093H21.333V83.694z"/>
                   </g>
                   <g>
                       <g>
                           <path fill="#BFBFBF" d="M70.023,88.259H53.366c-2.685,0-4.606,2.596-3.82,5.164l1.046,3.415h22.014L70.023,88.259z"/>
                       </g>
                       <g>
                           <path fill="#BFBFBF" d="M216.716,63.617c-0.139-0.648-0.581-0.975-1.324-0.975h-18.824c-0.467,0-0.906,0.115-1.325,0.349
                               c-0.419,0.23-0.721,0.719-0.906,1.464l-22.029,75.013c-0.188,0.651-0.559,0.975-1.116,0.975h-0.836
                               c-0.557,0-0.93-0.324-1.115-0.975l-23.146-68.741c-1.025-2.971-2.348-5.064-3.974-6.272c-1.627-1.208-3.974-1.812-7.041-1.812
                               h-13.805c-2.508,0-4.601,0.557-6.273,1.672c-1.674,1.115-3.022,3.254-4.044,6.412L88.37,139.468
                               c-0.187,0.651-0.557,0.975-1.115,0.975h-0.698c-0.651,0-1.023-0.324-1.115-0.975l-4.419-14.677H78.5H59.15l7.609,24.854
                               c0.649,2.139,1.324,3.905,2.021,5.3c0.698,1.392,1.51,2.488,2.44,3.276c0.928,0.791,1.974,1.324,3.137,1.604
                               c1.162,0.277,2.532,0.417,4.114,0.417h15.895c2.695,0,4.81-0.744,6.343-2.23s2.999-4.276,4.392-8.368l22.17-66.228
                               c0.092-0.651,0.464-0.978,1.115-0.978h0.559c0.649,0,1.021,0.327,1.115,0.978l21.891,66.228
                               c1.394,4.092,2.857,6.882,4.392,8.368c1.534,1.485,3.647,2.23,6.343,2.23h16.313c2.695,0,4.832-0.719,6.414-2.161
                               c1.579-1.439,3.019-4.254,4.322-8.436l26.771-83.798C216.786,65.012,216.857,64.268,216.716,63.617z"/>
                       </g>
                   </g>
               </g>
               <g>
                   <g>
                       <path fill="#BFBFBF" d="M49.505,52.521c9.531-14.393,23.11-26.35,40.041-33.908c40.388-18.029,86.691-5.277,112.655,28.167
                           C179.193,14.543,139.694-4.378,97.635,0.869C62.965,5.194,34.027,25.022,16.869,52.521H49.505z"/>
                   </g>
                   <g>
                       <path fill="#BFBFBF" d="M222.004,97.647c-0.167-1.334-0.385-2.649-0.597-3.966c4.634,39.767-16.645,79.619-55.138,96.802
                           c-36.971,16.504-78.906,7.221-105.654-20.12H16.854c22.27,35.693,63.88,57.203,108.372,51.652
                           C186.294,214.397,229.623,158.715,222.004,97.647z"/>
                   </g>
               </g>
           </g>
           </svg>'
			),
			60
		);
	}

	/**
	 * Renders main div to implement tailwind UI.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function render_elementify_blocks() {
		Helper::get_template( 'admin',[], true );
	}

	/**
	 * Enqueue Admin Scripts
	 */
	public function enqueue_admin_assets() {

		wp_enqueue_style(
			'elementify-blocks-admin-css',
			ELEMENTIFY_BLOCKS_BUILD_PATH_URI . '/admin/index.css',
			[],
			filemtime( ELEMENTIFY_BLOCKS_BUILD_PATH . '/admin/index.css' ),
			'all'
		);


		// $asset_config_file = sprintf( '%s/admin/index.assets.php', untrailingslashit(ELEMENTIFY_BLOCKS_BUILD_PATH) );

		// if ( ! file_exists( $asset_config_file ) ) {
		// 	return;
		// }

		// $asset_config = include_once $asset_config_file;

		// if ( empty( $asset_config['js/editor.js'] ) ) {
		// 	return;
		// }

		// $editor_asset    = $asset_config['js/editor.js'];
		// $js_dependencies = ( ! empty( $editor_asset['dependencies'] ) ) ? $editor_asset['dependencies'] : [];
		// $version         = ( ! empty( $editor_asset['version'] ) ) ? $editor_asset['version'] : filemtime( $asset_config_file );

		// // Theme Gutenberg blocks JS.
		// if ( is_admin() ) {
		// 	wp_enqueue_script(
		// 		'af-blocks-js',
		// 		AQUILA_FEATURES_PLUGIN_BUILD_URL . '/js/editor.js',
		// 		$js_dependencies,
		// 		$version,
		// 		true
		// 	);
		// }

		// // Theme Gutenberg blocks CSS.
		// $css_dependencies = [
		// 	'wp-block-library-theme',
		// 	'wp-block-library',
		// ];

		
	}
}
