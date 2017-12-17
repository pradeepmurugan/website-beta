$(document).ready(function () {
    $("#createform").hide();
    $("#create").click(function () {
        $("#createform").show();
    });
    var contextroot = ""
    $("#createform").submit(function (e) {
        e.preventDefault();
        var createform = $(this);
        var action = createform.attr("action");
        var data = createform.serializeArray();
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

