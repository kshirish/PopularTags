jQuery.fn.extend({
	setTags: function(jsonData, fontMin, fontMax){
 
 		// check if the jsonData provided or not
  		if(typeof arguments[0] === "object"){
  			var fontMin = fontMin || 20, fontMax = fontMax || 45, fontDiff = fontMax - fontMin, totalPriorities=5,
				i=0, that = this;		


			// priority of an item ranges from 0 to 4	
		  	var priorityTable = [
			{
				fontSize: fontMin+(fontDiff/totalPriorities)*1,
				color: "rgb("+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+")"
			},
			{
				fontSize: fontMin+(fontDiff/totalPriorities)*2,
				color: "rgb("+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+")"
			},
			{
				fontSize: fontMin+(fontDiff/totalPriorities)*3,
				color: "rgb("+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+")"
			},
			{
				fontSize: fontMin+(fontDiff/totalPriorities)*4,
				color: "rgb("+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+")"
			},
			{
				fontSize: fontMin+(fontDiff/totalPriorities)*5,
				color: "rgb("+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+","+Math.floor(Math.random() * (256))+")"
			}];

			// generating tags 
			!function loop(){
				if(i >= jsonData.length)
					return;

				$('<span>')
					.text(" "+jsonData[i].title)
					.attr("rel",jsonData[i].id)
					.css({"display":"none", "color":priorityTable[jsonData[i].priority].color,"font-size":priorityTable[jsonData[i].priority].fontSize+"px"})
					.appendTo(that)
					.fadeIn(1000, loop);
				i++;	
			}();	
  		}else{
  			console.log("Data for tagging hasn't been given.");
  		} 		
  	}
});
