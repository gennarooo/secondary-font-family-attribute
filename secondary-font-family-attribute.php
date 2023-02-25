<?php 
/**
 * Plugin Name: Secondary Font Family Attribute for the Paragraph Block Editor
 * Plugin URI: https://github.com/gennarooo
 * Description: Add a custom attribute to the text formatting toolbar in the block editor.
 * Version: 1
 * Author: Gennaro Cestrone
 * Author URI: https://github.com/gennarooo
 * text-domain: secondary-font-family-attribute
 */

function font_attr_enqueue_block_editor_assets() {
	wp_enqueue_script( 'font-family-attribute-script',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-dom', 'wp-dom-ready', 'wp-edit-post', 'wp-element', 'wp-i18n', 'wp-block-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
		true
	);
	wp_set_script_translations( 'font-family-attribute-script', 'secondary-font-family-attribute' );

	wp_enqueue_style( 'font-attribute-style',
		plugins_url( 'build/index.css', __FILE__ ),
		[],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'font_attr_enqueue_block_editor_assets' );

function font_attribute_set_script_translations() {
	wp_set_script_translations( 'secondary-font-family-attribute', 'secondary-font-family-attribute' );
}
add_action( 'init', 'font_attribute_set_script_translations' );
