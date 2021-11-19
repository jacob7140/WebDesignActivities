$(document).ready(function() {
	$("#nav_list li").click(function() {
        var title = $(this).children("a").attr("title");
        console.log(title + ".json");

        $.ajax({
            type: "get",
            url: "json_files/" + title + ".json",
        
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $("main h1").html("");
                $("main h2").html("");
                $("main h3").html("");
                $("main p").html("");
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("main h1").append(value.title);
                        $("main h2").append(value.month);
                        $("main h3").append(value.speaker);
                        $("main p").append(value.text);
                        $("main img").attr("src", value.image);
                    })
                })
            }
        });
    });
}); // end ready