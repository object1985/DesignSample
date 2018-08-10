$(document).ready(function () {
	//tooltipを利用可能にする
	$('[data-toggle="tooltip"]').tooltip();

	//Bootstarap4でのFilter機能お試し
	$("#searchInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#myTable tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
})
