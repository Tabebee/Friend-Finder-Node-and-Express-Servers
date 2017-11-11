$(document).ready(function() {

//      on submit click
    $("#submit").on("click", function (event) {
        event.preventDefault();
//      If choices and user info is valid and validate returns true, run
        if (checkValid() === true) {
            main();
        } else {
            alert("Please fill out the entire form before submitting")
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
                $("#q1").val().trim(),
                $("#q2").val().trim(),
                $("#q3").val().trim(),
                $("#q4").val().trim(),
                $("#q5").val().trim(),
                $("#q6").val().trim(),
                $("#q7").val().trim(),
                $("#q8").val().trim(),
                $("#q9").val().trim(),
                $("#q10").val().trim()
            ]
        };
        post(newUser);
    }   //  end main

    function post(variable) {
        $.post("/api/friends", variable, function (data) {

        });


        clear();
    }

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