<?php
/**
 * Helper.
 *
 * @package Elementify_Blocks
 * @since 1.0.0
 */

namespace ElementifyBlocks\Utils;

use ElementifyBlocks\Traits\Singleton;

/**
 * Helper
 *
 * @since 1.0.0
 */
class Helper {

	use Singleton;

	/**
	 * Keep default values of all settings.
	 *
	 * @var array
	 * @since 1.0.0
	 */
	public function get_defaults() {
		$user           = wp_get_current_user();
		$site_user_name = $user->display_name;

		return [
			ELEMENTIFY_BLOCKS_SETTINGS  => [
				'enable_width'          => true,
				'enable_custom_css'     => true,
				'enable_display'        => true,
				'enable_layout_options' => true,
				'enable_spacings'       => true,
				'enable_background'     => true,
				'enable_border'         => true,
				'enable_transform'      => true,
				'enable_motion_effects' => true,
			],
			ELEMENTIFY_BLOCKS_SUPPORT_SETTINGS => [
				'name'     => ucfirst( $site_user_name ),
				'email'    => $user->user_email,
				'site_url' => '#',
			],
		];
	}

	/**
	 * Get option value from database and retruns value merged with default values
	 *
	 * @param string $option option name to get value from.
	 * @return array
	 * @since 1.0.0
	 */
	public function get_option( $option ) {
		$db_values = get_option( $option, [] );
		return wp_parse_args( $db_values, $this->get_defaults()[ $option ] );
	}

	/**
	 * Get plugin template.
	 *
	 * @param string $template  Name or path of the template within /templates folder without php extension.
	 * @param array  $variables pass an array of variables you want to use in template.
	 * @param bool   $echo      Whether to echo out the template content or not.
	 *
	 * @return string|void Template markup.
	 */
	public function get_template( string $template, array $variables = [], bool $echo = false ) {

		$template_file = sprintf( '%1$s/templates/%2$s.php', ELEMENTIFY_BLOCKS_PATH, $template );

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
}
