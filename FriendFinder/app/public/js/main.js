$(document).ready(function() {

//      on submit click
    $("#submit").on("click", function (event) {
        event.preventDefault();
//      If choices and user info is valid and validate returns true, run
        if (checkValid() === true) {
            main();
        } else {
            alert("Please fill out the entire form before submitting");

        }
    });


//  function to check if all choices are valid
    function checkValid() {
        var validate = true;
//                check name and photo validate
        $(".validate").each(function () {
            if($(this).val() === "") {
                validate = false;
            }
        });
//                check choices are valid
        $(".choices").each(function () {
            if($(this).val() === "") {
                validate = false;
            }
        });
        return validate;
    };

//          Main function to hold and execute
    function main() {
//              Fill user info from field
        var newUser = {
            "name": $("#name").val().trim(),
            "photo": $("#photoImg").val().trim(),
            "scores": [
                $("#q1").val().substring(0,1),
                $("#q2").val().substring(0,1),
                $("#q3").val().substring(0,1),
                $("#q4").val().substring(0,1),
                $("#q5").val().substring(0,1),
                $("#q6").val().substring(0,1),
                $("#q7").val().substring(0,1),
                $("#q8").val().substring(0,1),
                $("#q9").val().substring(0,1),
                $("#q10").val().substring(0,1)
            ]
        };
        post(newUser);
    }   //  end main

    function post(variable) {
        $.post("/api/friends", variable, function (data) {

        clear();
    };

    function clear() {
        $("#name").val("");
        $("#photoImg").val("");
        $("#q1").val("");
        $("#q2").val("");
        $("#q3").val("");
        $("#q4").val("");
        $("#q5").val("");
        $("#q6").val("");
        $("#q7").val("");
        $("#q8").val("");
        $("#q9").val("");
        $("#q10").val("");
    }

});