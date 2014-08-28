PopularTags
===========

This jquery plugin renders tags(font-size, color) based upon their priority. 


DOCUMENTATION
===========
Just below code to start and you're done !

$(document).ready(function(){
				
				var fontMin = 20, fontMax = 45;
				
				// each tag should have a priority as well as an id through which they can be distinguished among each other
				var items = [
				{
					id: 1,
					title: "Rain",
					priority: 4
				},
				{
					id: 2,
					title: "Food",
					priority: 4
				},
				{
					id: 3,
					title: "LOVE",
					priority: 1
				},
				{
					id: 5,
					title: "Linux",
					priority: 0
				},
				{
					id: 4,
					title: "Blog",
					priority: 1
				}];

        //passon json as data and font-range to setTags()
				$('#tagContainer').setTags(items, fontMin, fontMax);
	});
	
	![](http://oi57.tinypic.com/ff73hf.jpg)
