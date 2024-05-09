<?php
/**
 * Elementify Blocks Plugin
 *
 * @package           Elementify_Blocks
 * @author            Elementify Themes
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Elementify Blocks
 * Plugin URI:        https://github.com/elemetnifythemes/elementify-blocks
 * Description:       Gutenberg blocks that will help you build amazing pages with the new WordPress Gutenberg editor.
 * Version:           1.0.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            Elementify Themes
 * Author URI:        https://github.com/elemetnifythemes
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       elementify-blocks
 * Domain Path:       /languages
 */

namespace Elementify_Blocks;

defined( 'ABSPATH' ) || exit;

/**
 * Set constants
 */
define( 'ELEMENTIFY_BLOCKS_NAME', 'elementify-blocks' );
define( 'ELEMENTIFY_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define( 'ELEMENTIFY_BLOCKS_PATH_URI', plugin_dir_url( __FILE__ ) );
define( 'ELEMENTIFY_BLOCKS_INC_PATH', ELEMENTIFY_BLOCKS_PATH . 'inc/' );
define( 'ELEMENTIFY_BLOCKS_BUILD_PATH', ELEMENTIFY_BLOCKS_PATH . 'assets/build/' );
define( 'ELEMENTIFY_BLOCKS_BUILD_PATH_URI', ELEMENTIFY_BLOCKS_PATH_URI . 'assets/build/' );

require_once ELEMENTIFY_BLOCKS_INC_PATH . 'autoloader.php';

function elementify_blocks_get_instance() {
	\Elementify_Blocks\Inc\Plugin::get_instance();
}
elementify_blocks_get_instance();