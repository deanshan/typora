
function pageL1() {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: handleResponse,
        error: function() {

        }
    })
}