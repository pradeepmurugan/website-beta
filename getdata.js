$(document).ready(function () {
    $("#createform").hide();
    $("#create").click(function () {
        $("#createform").show();
    });
    var contextroot = ""
    $("#createform").submit(function (e) {
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

