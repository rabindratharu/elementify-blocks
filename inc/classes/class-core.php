<?php
/**
 * Core class
 *
 * @package Elementify_Blocks
 * @since 1.0.0
 */

namespace Elementify_Blocks\Inc;

use Elementify_Blocks\Inc\Traits\Singleton;

/**
 * Core class.
 *
 * Loads the core of the plugin.
 *
 * @since 1.0.0
 */
class Core {

	use Singleton;

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	protected function __construct() {

		$this->load_class();

		if ( is_admin() ) {
			$this->admin();
		};
	}

	/**
	 * Loads the main class.
	 *
	 * @since 1.0.0
	 */
	private function load_class() {
		
	}

	/**
	 * Loads the main Admin class.
	 *
	 * @since 1.0.0
	 */
	private function admin() {
		
	}
}
