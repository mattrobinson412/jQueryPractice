


$(function () {
    $(".submit-button").on("click", function( evt ) {
        let moviesList = [];
        let currentId = 0;

        evt.preventDefault();
        let newTitle = $("input").eq(0).val();
        let newRating = $("input").eq(1).val();
        let movieData = { newTitle, newRating, currentId };
        

        currentId += 1;
        console.log(movieData);
        moviesList.push(movieData);

        let movieList = $("ul");
        let newLi = $("<li>");
        let removeBtn = $("<button>");
        removeBtn.addClass("remove-button");
        removeBtn.html("Remove");
        newLi.html(`${newTitle} - ${newRating}`); 
        movieList.append(newLi);
        newLi.append(removeBtn);

        $("#movie-input").trigger("reset");

        $(".remove-button").on("click", function(event ) {
            event.preventDefault();
            $(event.target).closest("li").remove();
            
            console.log(removeBtn);
    
        });
    });

    

});
