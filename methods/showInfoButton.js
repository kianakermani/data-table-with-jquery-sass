$.fn.showInfoButton = function () {
  $(this).toggleClass("is-active");

  if ($(this).hasClass("is-active")) {
    // Find all checked checkboxes
    $("input[type='checkbox']:checked").each(function () {
      var checkbox = $(this);
      var tableRow = checkbox.closest("tr");
      tableRow.show(); // Show the checked row
    });

    $("input[type='checkbox']:not(:checked)").each(function () {
      var checkbox = $(this);
      var tableRow = checkbox.closest("tr");
      tableRow.hide();
    });
  } else {
    // Show all rows when "is-active" is removed
    $("tr").show();
  }
};
