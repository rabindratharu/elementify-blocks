<?php
/**
 * Plugin.
 *
 * @package Elementify_Blocks
 * @since 1.0.0
 */

namespace ElementifyBlocks;

use ElementifyBlocks\Traits\Singleton;
use ElementifyBlocks\Admin\Menu;

/**
 * Plugin
 *
 * @since 1.0.0
 */
final class Plugin {

	use Singleton;

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		$this->define_constants();
		$this->set_locale();

        add_action( 'plugins_loaded', [ $this, 'setup_classes' ] );
	}

	/**
     * Cloning is forbidden.
     *
     * @since 1.0.0
     */
    public function __clone() {
        _doing_it_wrong( __FUNCTION__, __( 'Cloning is forbidden.', 'elementify-blocks' ), '1.0.0' );
    }

    /**
     * Unserializing instances of this class is forbidden.
     *
     * @since 1.0.0
     */
    public function __wakeup() {
        _doing_it_wrong( __FUNCTION__, __( 'Unserializing instances of this class is forbidden.', 'elementify-blocks' ), '1.0.0' );
    }

	/**
     * Define constant if not already set.
     *
     * @param string      $name  Constant name.
     * @param mixed $value Constant value.
     *
     * @return void
     */
    private function define( $name, $value ) {
        if ( ! defined( $name ) ) {
            define( $name, $value );
        }
    }

	/**
     * Define CONSTANTS
     *
     * @since 1.0.0
     * @return void
     */
    public function define_constants() {
        $this->define( 'ELEMENTIFY_BLOCKS_VERSION', (float) get_bloginfo( 'version' ) );
        $this->define( 'ELEMENTIFY_BLOCKS_PATH', untrailingslashit( plugin_dir_path( ELEMENTIFY_BLOCKS_FILE ) ) );
        $this->define( 'ELEMENTIFY_BLOCKS_URL', untrailingslashit( plugin_dir_url( ELEMENTIFY_BLOCKS_FILE ) ) );
        $this->define( 'ELEMENTIFY_BLOCKS_BASENAME', plugin_basename( ELEMENTIFY_BLOCKS_FILE ) );
        $this->define( 'ELEMENTIFY_BLOCKS_SETTINGS', 'elementfy_blocks_setting');
        $this->define( 'ELEMENTIFY_BLOCKS_SUPPORT_SETTINGS', 'elementify_blocks_support_settings' );
    }

	/**
     * Setting the locale for translation availability
     * @since 1.0.0
     * @return void
     */
    public function set_locale() {
        add_action( 'init', [$this, 'load_textdomain'] );
    }

    /**
     * Loading Text Domain on init HOOK
     * @since 1.0.0
     *
     * @return void
     */
    public function load_textdomain() {
        load_plugin_textdomain( 'elementify-blocks', false, dirname( ELEMENTIFY_BLOCKS_BASENAME ) . '/languages' );
    }

    /**
	 * Include required classes.
	 */
	public function setup_classes() {

		if ( is_admin() ) {
			/* Setup Menu */
			Menu::get_instance();
		}
	}
}
