$(document).ready(function () {
    $("#createform").hide();
    $("#removeform").hide();
    $("#displayform").hide();
    $("#create").click(function () {
        $("#createform").show();
        var contextroot = ""
        $("#form").submit(function (e) {
            e.preventDefault();
            var form = $(this);
            var action = form.attr("action");
            var data = form.serializeArray();
            $.ajax({
                url: contextroot + action,
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(getFormData(data)),
                success: function (data) {
                    console.log("DATA POSTED SUCCESSFULLY" + data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        });
    });
    
    $("#remove").click(function () {
        $("#removeform").show();
        var contextroot = ""
        $("#form").submit(function (e) {
            e.preventDefault();
            var form = $(this);
            var action = form.attr("action");
            var data = form.serializeArray();
            $.ajax({
                url: contextroot + action,
                dataType: 'json',
                type: 'DELETE',
                contentType: 'application/json',
                data: JSON.stringify(getFormData(data)),
                success: function (data) {
                    console.log("DATA POSTED SUCCESSFULLY" + data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        });
    });
    $("#display").click(function () {
        $("#displayform").show();
        var contextroot = ""
        $("#form").submit(function (e) {
            e.preventDefault();
            var form = $(this);
            var action = form.attr("action");
            var data = form.serializeArray();
            $.ajax({
                url: contextroot + action,
                dataType: 'json',
                type: 'GET',
                contentType: 'application/json',
                data: JSON.stringify(getFormData(data)),
                success: function (data) {
                    console.log("DATA POSTED SUCCESSFULLY" + data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        });
    });
});

