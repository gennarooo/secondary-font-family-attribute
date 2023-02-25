# Secondary Font Attribute for the Wordpress Block Editor

Add a new button to the Wordpress block editor to change the font family for the selected text within the same paragraph.

![](/assets/secondary-font-button.png)

## How to Use
Install and activate the plugin.

The selected text will be wrapped within a span with the class "secondary-font-family"

    <span class="secondary-font-family">selected text</span>

Just add to your theme a css declarartion with your styles for the secondary font:

	.secondary-font-family {
		font-family: serif;
	}
