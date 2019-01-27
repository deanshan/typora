$(document).ready(function() {
    onLoadpage('#left1', 'pages/left1')
    onLoadpage('#left2', 'pages/left2')
    onLoadpage('#middle', 'pages/middle')
    onLoadpage('#right1', 'pages/right1')
    onLoadpage('#right2', 'pages/right2')
});

function onLoadpage(el, page) {
	$.get(page + ".html", function (reHtml) {
		$(el).html(reHtml);
	}, "html");
};