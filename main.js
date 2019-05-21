
// init controller
	var controller = new ScrollMagic.Controller({
		// Below are the current defaults.
		// http://scrollmagic.io/docs/ScrollMagic.Controller.html#constructor
	/*
		contianer:'window',
		vertical:true,
		globalSceneOptions:{},
		loglevel:2,
		refreshInterval: 100
		*/
	});

var animateElements = document.getElementsByClassName("animated");
for (var i=0; i<animateElements.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
    //  duration:'150',  // how long this will last
    triggerElement: animateElements[i], // class is pulled by array id.
    offset: '0', // delay the start a little later
    triggerHook:'0.5', // range [0-1] 0.1 Trigger sits near the top.    0.9 the trigger sits near the bottom
    reverse:'true',  // make it so that it removes the element on reverse.
    loglevel:'2' // error log.
  })
    .setClassToggle(animateElements[i], "fadeIn")//animateElements[i].attributes.rel.value) // add class toggle
    .addIndicators({// add indicators (requires plugin)
    name: "animate " + (i+1),
    colorTrigger:'#000000',
    indent:'100',
    colorStart:'green',
    colorEnd:'red'}) // add indicators (requires plugin)
    .addTo(controller);
}






/*
function callback (event) {
        console.log("Event fired! ");
	      //console.log("Event fired! (" + event.type + ")");
}
// add listeners
scene.on("change update", callback);
// remove listeners
scene.off("change update", callback);
*/
