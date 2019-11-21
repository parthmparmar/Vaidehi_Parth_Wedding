$(".images").on("click", function(){
    var source = $(this).attr("src");
    $(".modal-image").attr("src", source);
    $('#myModal').modal('show');
})