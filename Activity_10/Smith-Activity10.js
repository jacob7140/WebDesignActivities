$(document).ready(function() {


        // preload the image for each link
        $("#image_list a").each(function (){
        });

        // set up the event handlers for each link
        $("#image_list a").click(function (evt) {
                var target = evt.target;
                var nextImage = $(this).attr("href");
                var caption = $(this).attr("title")

                $("#image").fadeOut(3000, 
                        function() {
                        $("#image").attr("src", nextImage).fadeIn(3000);

                        $("#caption").fadeOut(3000, 
                                function() {
                                $("#caption").text(caption).fadeIn(3000);
                                $(this).animate({
                                        "font-size": "2em"
                                }, 3000)
                        })
                })

                evt.preventDefault();
        });



    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link


    // move the focus to the first link

}); // end ready