# Scalable.gs? [http://scalable.gs](http://scalable.gs)
The Scalable Grid System or scalable.gs for short, is a device independent and cross screen size web development framework.

It follows up on the main ideas from the 960.gs, but makes it fluid like cssgrid.net. It is topped off with some of the thoughts behind jQuery Mobile in addition to some custom mobile UX design.


## Howto
<ol>
<li>Add the .scalable class to your wrapper.</li>
<li>Add column_your-configuration, eks column_3-10 until the row adds up to the last number in the class name.</li>
<li>If you have nested tags that needs to be grid aligned inside an already grid aligned element, you need to use an alpha class on the first nested element. You then use the omega class on the last of the nested elements. This is done to remove the double margin nested grids create.</li>
<li>For further information check out the dev file for code comments.</li>
</ol>


### Customise:
Customise the minimum and maximum width of the scalable class container on line 2 of the compressed file and line 3 on the dev file. 


### Tip
Check out the example.html file in the example folder for a test file with a few different setups.


## Changelog:
### v.0.0.1 : February 2nd, 2011
First release, check out the website at [http://scalable.gs](http://scalable.gs)
Check out example/index.html and example/css/scalablegs.css
The minified version is not available yet since the system is still in a very early stage.


#### Todo:

<ul>
<li>Finish the 3,4 and 10 grid configurations</li>
<li>Add 12 and 24 grid configurations</li>
<li>Add the new box model with fallback to the floating model for IE.</li>
<li>Add Javascript functionality to enhance the mobile experience.</li>
<li>Create multiple demos to showcase the framework.</li>
<li>Create a website for the framework.
<ul>
<li>Create a configuration tool to minimise the compressed version with only the bits you want to download.</li>
</ul>
</li>
<li>Add support for RTL (do it with the modernizr?)</li>
</ul>

## License:
Scalable.gs is under a GNU General Public License V3.0
*common components might be under a different license


### Example:
Major components:

* Modernizr: MIT/BSD license
* jQuery: MIT/GPL license
* DD_belatedPNG: MIT license
* YUI Profiling: BSD license
* HTML5Doctor CSS reset: Public Domain
* CSS Reset Reloaded: Public Domain

Everything else from the HTML5 Boilerplate:
* [The Unlicense](http://unlicense.org) (aka: public domain) 


## Summary:

This is a framework that intend to ease the creation of cross screen size web applications.


## Releases 
There are two releases: a commented version that you find in the dev folder and a stripped version you can find in the compressed folder.

Watch the framework development in the github repository: [http://github.com/KDN/scalable.gs/](http://github.com/KDN/scalable.gs/)