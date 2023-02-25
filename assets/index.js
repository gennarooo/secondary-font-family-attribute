import { __ } from '@wordpress/i18n';

import { BlockControls } from '@wordpress/block-editor';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
const secondaryFontAttributeButton = ( { isActive, onChange, value } ) => {
	return (
		<BlockControls>
            <ToolbarGroup>
					<ToolbarButton
						icon="editor-textcolor"
						label={ __( 'Secondary font', 'secondary-font-family-attribute' ) }
						title={ __( 'Secondary font', 'secondary-font-family-attribute' ) }
						onClick={ () => {
							onChange(
								toggleFormat( value, {
										type: 'secondary-font/secondary-font-family-attribute',
								} )
							);
						} }
						isActive={ isActive }
					/>
				</ToolbarGroup>
		</BlockControls>
	);
};

// Register the Format.
registerFormatType( 'secondary-font/secondary-font-family-attribute', {
	className: 'secondary-font-family',
	edit     : secondaryFontAttributeButton,
	tagName  : 'span',
	title    : __( 'Secondary font', 'secondary-font-family-attribute' ),
} );