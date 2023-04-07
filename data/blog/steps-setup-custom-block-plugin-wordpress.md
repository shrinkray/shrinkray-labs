---
publishDate: "Mar 10 2023"
title: "Steps to setup a new block plugin for WordPress"
description: "Building WordPress custom block plugins are the way to deliver custom functionality to your customers"
excerpt: ""
image: "~/assets/images/progress-bar.jpg"
category: "Tutorials"
tags: [wordpress, javascript, blocks, plugin]
---

WordPress is one of the most popular content management systems (CMS) in the world, with millions of websites powered by the platform. One of the reasons for its popularity is the ability to extend its functionality through plugins.

In this blog post, we'll take a look at how to code a custom block plugin for WordPress. Block plugins allow developers to create custom blocks for the WordPress block editor, Gutenberg. Custom blocks can be used to add functionality to a website or to create custom layouts and designs.

Let's get started!

## Step 1: Set up your development environment

Before you start coding your custom block plugin, you'll need to set up your development environment. You'll need a local development server running WordPress, as well as a code editor. Here are the steps to follow:

1. Install a local development environment using [Local from Flywheel](https://localwp.com/help-docs/getting-started/installing-local/).
2. Using Local, it is possible to setup a local WordPress development environment to build and test your plugin.
3. Set up a code editor such as [Visual Studio Code](https://code.visualstudio.com/).

## Step 2: Create a new plugin

Once you have set up your development environment, you can create a new plugin for your custom block. Here are the steps to follow:

In your WordPress installation, navigate to the `wp-content/plugins` directory.
Create a new directory for your plugin, for example, `my-custom-block-plugin`.
Create a new PHP file in the directory, for example, `my-custom-block-plugin.php`.
In the PHP file, add the following code to define the plugin:

```php
<?php
/*
Plugin Name: My Custom Block Plugin
Plugin URI: https://example.com/
Description: A custom block for the Gutenberg editor
Version: 1.0
Author: Your Name
Author URI: https://example.com/
License: GPL2
*/

// Add your code here
```

This code defines the plugin name, description, author, and license. It also provides a placeholder for your code.

## Step 3: Register your custom block

Next, you'll need to register your custom block with WordPress. Here are the steps to follow:

In your PHP file, add the following code to register your block:

```php
Copy code
function my_custom_block_register_block() {
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

    register_block_type(
        'my-custom-block-plugin/my-custom-block',
        array(
            'editor_script' => 'my-custom-block-editor-script',
            'editor_style'  => 'my-custom-block-editor-style',
            'style'         => 'my-custom-block-style',
        )
    );
}
add_action( 'init', 'my_custom_block_register_block' );
```

This code registers your block with WordPress, defining the editor script, editor style, and block style.

Create a new directory in your plugin directory called 'blocks', and create a new file called 'my-custom-block.js' in that directory. This file will contain the code for your custom block.

## Step 4: Build your custom block

Now it's time to build your custom block. Here are the steps to follow:

In your `my-custom-block.js` file, add the following code to create your custom block:

```javascript
Copy code
const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;

registerBlockType( 'my-custom-block-plugin/my-custom-block', {
    title: 'My Custom Block',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'text',
            selector: '.my-custom-block-content',
        },
    },
    edit( { attributes, setAttributes } )

```
