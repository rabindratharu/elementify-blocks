<?php
/**
 * Elementify Blocks Plugin
 *
 * @package Elementify_Blocks
 * @author  Elementify Themes
 *
 * @wordpress-plugin
 * Plugin Name:       Elementify Blocks
 * Plugin URI:        https://elementifythemes.com/elementify-blocks/
 * Description:       Gutenberg blocks that will help you build amazing pages with the new WordPress Gutenberg editor.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Elementify Themes
 * Author URI:        https://elementifythemes.com/about/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       elementify-blocks
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define things
define( 'ELEMENTIFY_BLOCKS_FILE', __FILE__ );

/**
 * Bootstrap the plugin.
 */
require_once 'vendor/autoload.php';

function elementify_blocks() {
    
    return ElementifyBlocks\Plugin::get_instance();
}
elementify_blocks();

