<?php

namespace ElementifyBlocks\Traits;

trait Singleton {
	/**
	 * Holds the plugin instance.
	 *
	 * @since 1.0.0
	 * @access private
	 * @static
	 *
	 * @var static
	 */
	protected static $instances = array();
	/**
	 * Sets up a single instance of the plugin.
	 *
	 * @since 1.0.0
	 * @access public
	 * @var mixed $args
	 *
	 * @static
	 *
	 * @return static An instance of the class.
	 */
	public static function get_instance( ...$args ) {
		if ( ! isset( self::$instances[ static::class ] ) ) {
			self::$instances[ static::class ] = ! empty( $args ) ? new static( ...$args ) : new static();
		}

		return self::$instances[ static::class ];
	}

	protected function __construct( ...$args ) {}
}