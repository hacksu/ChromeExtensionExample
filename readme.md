# ChromeExtensionExample

An example of a Chrome extension. Here it demonstrates two functions of Chrome extensions: the ability to add information
to pages, and the ability to save data.

# Instructions

# Setup

Go to http://bit.ly/ChromeHacKSU and download the repository either through git, or by clicking the Download Zip button on
the upper right just below the yellow bar and unziping the file.

Open this folder in your text editor of choice and then go into Chrome and navigate to `More Tools/Extensions` in the menu
to the right of the url bar. You should see a screen listing any extensions you might have installed. Click on the `Developer Mode`
check box in he upper right and you should see additional options. Click the `Load unpacked extension...` button in the 
upper left and navigate to the directory where you downloaded the repository and open it. 

Your extension should now show up in the top of the list where you can reload it or get details about its permissions or id

# Experiment

Load any page, https://www.google.com/ works well, and press `control shift L` (command on OSX). You should see in the Console
`Hello World`. Lets figure out why. Our project is really only made up of two files at this point. `helloWorld.js` and `manifest.json`

* `manifest.json` tells Chrome what to do with our extension. You might recognize it as a JSON file which is a common way 
to serialize object like data structures for transmission between server's and storage. It's essentially a dictionary, where each
value is given a name. The manifest provided here provides a minimalistic implementation.
* `manifest_version` informs Chrome that the plugin was written with version 2 in mind. Currently version 2 is the newest version
* `name` tells Chrome what to call our extension
* `version` tells Chrome what the current version number for the extension is. Keep this value small as the plugin will only
get updated when uploaded to the Chrome Store when the version number grows larger.
* Finally `content_scripts` gets into the meat of our plugin. It may also look slightly strange compared to other entries in
this document. It's an array of object. Each object defines scripts and pages that should be loaded into a page.
    * `matches` defines the urls this script will be loaded into.
    * `js` This is an array of JavaScript files. They are loaded into any pages that match the url as if they were included
    directly, though with slightly different security restrictions

So we see that `helloWorld.js` is being loaded into all pages by our plugin. When we open it up we can see that it has
only one line `console.log("Hello World");`. So that's our starting point. A plugin that prints Hello World.
