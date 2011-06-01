# Scalable.gs
The Scalable Grid System or scalable.gs for short, is a device independent and cross screen size web development framework.

It follows up on the main ideas from the [960.gs](http://960.gs), but makes it fluid like [cssgrid.net](http://cssgrid.net).


## Howto

### CSS
<ol>
<li>Select your system, 3/4/10/12/20/24</li>
<li>Add the .scalable class to your wrapper.</li>
<li>Add grid_your-system, e.g. grid_3-10 until the row adds up to the last number in the class name.</li>
<li>If you have nested tags that needs to be grid aligned inside an already grid aligned element, you need to use an alpha class on the first nested element. You then use the omega class on the last of the nested elements. This is done to remove the double margin nested grids create.</li>
<li>For further information check out the dev file for code comments.</li>
</ol>


#### Customise:
Customise the minimum and maximum width of the .scalable class container to sett the minimum and maximum boundaries of your application.


### SASS & compass-gem (alpha state)
<ul>
	<li>gem install compass-scalablegs-plugin</li>
	<li>or</li>
	<li>see dev/scalablegs.sass</li>	
</ul>

#### GEM source
The compass-scalablegs-plugin source is available on [github](https://github.com/KDN/compass-scalablegs-plugin).


## Changelog:

### v0.9.2 : June 2nd, 2011 : release candidate

* Check the checkin of code for all the changes. The core naming of the grids stays the same, but the framework has shifted to a small screen first design process together with dynamic loading of CSS with JavaScript on large projects.

### v0.8.9 : April 7th, 2011 : Second beta
* Extracted each of the grid system setups into their own files for easier implentation.
    * Each grid system setup are now named with a dash and the max system number, scalablegs-12.css / scalablegs-12.less etc.
		* The /example folder still include a combined LESS/CSS file with all the combinations for easy testing and examples.
* Added SASS in form of a scalablegs.sass file in the /dev folder
    * The framework now has a gem in alpha mode, the SASS file represented in this release is the core of that gem.
        * gem install compass-scalablegs-plugin
    * The SASS framework enables you to generate your desired setup on the fly.


### v0.8.0 : April 5th, 2011 : First beta release
* Bumping the version number as we get closer to release

### v0.2.0 : April 2nd, 2011
* Fixed an issue with media-query stacking.
* Fixed a couple of typos
* Added GPL v3 license to the license.md info file

### v0.1.0 : February 8th, 2011
* Converted the work file over to LESS
    * Added accuracy since sizes are calculated
    * Added the compressed version, saves 30% space
* Added the 12, 20 and 24 grid system configurations.
* Every configuration has @media-query scaling for handheld devices
    * Might need some adjustments as the framework get tested more

### v0.0.2 : February 3rd, 2011
* Major name change from column to grid on class names
* Formatting change of how the grid system is structured 
* Updated the example files to the naming convention
* The 3, 4 and 10 grid systems are "done"

### v0.0.1 : February 2nd, 2011
First release, check out the website at [http://scalable.gs](http://scalable.gs)

Check out example/index.html and example/css/scalablegs.css

The minified version is not available yet since the system is still in a very early stage.


#### Todo:

* Create a website for the framework
    * Create a configuration tool to minimise the compressed version with only the bits you want to download


## License:
Scalable.gs is under a GNU General Public License V3.0


### Example folder:
Major components:

* Modernizr: MIT/BSD license
* jQuery: MIT/GPL license
* DD_belatedPNG: MIT license
* YUI Profiling: BSD license
* HTML5Doctor CSS reset: Public Domain
* CSS Reset Reloaded: Public Domain
* Adapt.js: GPL license

Everything else from the HTML5 Boilerplate:
* [The Unlicense](http://unlicense.org) (aka: public domain) 


## Summary:

This is a framework that intend to ease the creation of cross screen size web applications.


## Releases

Watch the framework development in the github repository: [http://github.com/KDN/scalable.gs/](http://github.com/KDN/scalable.gs/)