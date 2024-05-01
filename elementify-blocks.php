<?php
/**
 * Plugin Name:       Elementify Blocks
 * Description:       Ultimate & Essentials block settings for every WordPress block.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Navanath Bhosale
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-bess
 *
 * @package           WP_Block_Essentials
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Set constants
 */
define( 'WP_BESS_FILE', __FILE__ );
define( 'WP_BESS_BASE', plugin_basename( WP_BESS_FILE ) );
define( 'WP_BESS_DIR', plugin_dir_path( WP_BESS_FILE ) );
define( 'WP_BESS_URL', plugins_url( '/', WP_BESS_FILE ) );
define( 'WP_BESS_VER', '1.0.0' );
define( 'WP_BESS_SETTINGS', 'wp_bess_setting' );
define( 'WP_BESS_SUPPORT_SETTINGS', 'wp_bess_support_settings' );

// Define things
define( 'ESSENTIAL_BLOCKS_FILE', __FILE__ );

require_once __DIR__ . '/autoload.php';

