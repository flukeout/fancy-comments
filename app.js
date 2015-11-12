$(document).ready(function(){


    $(".editor-toggle").on("click",function(){
        $(".editor").toggleClass("original");
    })

    $(".comment").on("click",".bubble",function(){
        $(this).closest(".comment").toggleClass("expanded");
        $(this).closest(".comment").find(".comment-text").slideToggle();
    });


    //Hover states
    $(".comment:not(.expanded)").on("mouseenter",".bubble",function(){
        $(this).closest(".comment").addClass("hover");
    });
    $(".comment:not(.expanded)").on("mouseout",".bubble",function(){
        $(this).closest(".comment").removeClass("hover");
    });


    $(".comment").on("click",".close-comment",function(){
        $(this).closest(".comment").toggleClass("expanded");
        $(this).closest(".comment").find(".comment-text").slideToggle();
    });

    $(".comment-text").on("click","a",function(){

        $(this).closest(".comment").toggleClass("expanded");
        $(this).closest(".comment").find(".comment-text").slideToggle();

        var thisComment = parseInt($(this).closest(".comment").attr("comment-number"));
        if($(this).hasClass("next-comment")){
            if(thisComment == commentCount) {
                thisComment = 0;
            }
            openComment(thisComment + 1);
        } else {
            if(thisComment == 1) {
                thisComment = commentCount + 1;
            }
            openComment(thisComment - 1);
        }
        return false;
    });

    $(".comment").each(function(){
        commentCount++;
        $(this).find(".this-comment").text(commentCount);
        $(this).attr("comment-number",commentCount);
    })

    $(".comment").find(".total-comments").text(commentCount);
});

var commentCount = 0;;


function openComment(number){

    var newComment = $("[comment-number="+number+"]");

    if(newComment.hasClass("expanded")){

    } else {
        newComment.find(".comment-text").slideToggle();
        newComment.toggleClass("expanded");
    }
}