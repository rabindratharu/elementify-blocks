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

		return apply_filters( 'elementify_blocks_default_settings', [
			'setting_1' => esc_html__( 'Default Setting 1', 'wp-custom-gutenberg-blocks-boilerplate' ),
			'setting_2' => esc_html__( 'Default Setting 2', 'wp-custom-gutenberg-blocks-boilerplate' ),
			'setting_3' => false,
			'setting_4' => true,
			'setting_5' => 'option-1',
		]);
	}

	/**
	 * Get option value from database and retruns value merged with default values
	 *
	 * @param string $option option name to get value from.
	 * @return array
	 * @since 1.0.0
	 */
	public static function get_option( $option = '' ) {
		$get_settings       = get_option( 'wp_custom_gutenberg_blocks_boilerplate_options' );
		$default_settings	= self::get_defaults();

		if ( ! empty( $option ) ) {
			if ( isset( $get_settings[ $option ] ) ) {
				return $get_settings[ $option ];
			}
			return isset( $default_settings[ $option ] ) ? $default_settings[ $option ] : false;
		} else {
			if ( ! is_array( $get_settings ) ) {
				$get_settings = array();
			}
			return array_merge( $default_settings, $get_settings );
		}
	}
}
