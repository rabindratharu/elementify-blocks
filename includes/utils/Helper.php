<?php
/**
 * Helper.
 *
 * @package Elementify_Blocks
 * @since 1.0.0
 */

namespace ElementifyBlocks\Utils;

/**
 * Helper
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
