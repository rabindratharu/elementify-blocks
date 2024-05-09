<?php
/**
 * Helper class
 *
 * @package Elementify_Blocks
 * @since 1.0.0
 */

namespace Elementify_Blocks\Inc\Utils;

/**
 * Utilities Helper class.
 *
 * @since 1.0.0
 */
class Helper {

	/**
	 * Get plugin template.
	 *
	 * @param string $template  Name or path of the template within /templates folder without php extension.
	 * @param array  $variables pass an array of variables you want to use in template.
	 * @param bool   $echo      Whether to echo out the template content or not.
	 *
	 * @return string|void Template markup.
	 */
	public static function get_template( string $template, array $variables = [], bool $echo = false ) {

		$template_file = sprintf( '%1$s/templates/%2$s.php', untrailingslashit(ELEMENTIFY_BLOCKS_PATH), $template );
	
		if ( ! file_exists( $template_file ) ) {
			return '';
		}
	
		if ( ! empty( $variables ) && is_array( $variables ) ) {
			extract( $variables, EXTR_SKIP ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract -- Used as an exception as there is no better alternative.
		}
	
		ob_start();
	
		include $template_file; // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.UsingVariable
	
		$markup = ob_get_clean();
	
		if ( ! $echo ) {
			return $markup;
		}
	
		echo $markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output escaped already in template.
	
	}

	/**
	 * Keep default values of all settings.
	 *
	 * @var array
	 * @since 1.0.0
	 */
	public static function get_defaults() {

		$default_theme_options = array(
			'post_enable' 	=> true,
			'page_enable' 	=> true,
			'map_key' 		=> '',
			'heading_typo' 	=> 'inherit',
			'base_type' 	=> 'inherit',
			'color_1' 		=> '#000000',
			'color_2' 		=> '#565656',
			'color_3' 		=> '#abb8c3',
			'color_4' 		=> '#f9f8f8',
			'color_5' 		=> '#ffffff'
		);
	
		return apply_filters( 'blockwheels_default_options', $default_theme_options );
	}

	/**
	 * Get option value from database and retruns value merged with default values
	 *
	 * @param string $option option name to get value from.
	 * @return array
	 * @since 1.0.0
	 */
	public static function get_option( $key = '' ) {
		$options         = get_option( 'blockwheels_options' );
		$default_options = self::get_defaults();

		if ( ! empty( $key ) ) {
			if ( isset( $options[ $key ] ) ) {
				return $options[ $key ];
			}
			return isset( $default_options[ $key ] ) ? $default_options[ $key ] : false;
		} else {
			if ( ! is_array( $options ) ) {
				$options = array();
			}
			return array_merge( $default_options, $options );
		}
	}
}
