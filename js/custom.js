// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
			 //  "images/tm-bg-slide-1.jpg", 
			 "images/tm-bg-slide-2.jpg", 
	 		// "https://images.squarespace-cdn.com/content/v1/5811623ed2b8577822ce1f3d/1560525842970-JU39ZZWRB73S7E3G8ZDB/ke17ZwdGBToddI8pDm48kHbpLL0g0sXyvord4vH3I_4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcxBE4siokTVp63N0DY0Zpzhx6ZdwKVSs5_pqGwJ_UYuQHTuRauuEPPK2O9Nl7RCtq/bamboo+plants",
			//  "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})