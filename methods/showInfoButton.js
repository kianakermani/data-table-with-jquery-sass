$.fn.showInfoButton = function () {
  $(this).toggleClass("is-active");
  if ($(this).hasClass("is-active")) {
    $("#filterTable tbody").empty();
    // Find all checkboxes
    $("input[type='checkbox']:checked").each(function () {
      var checkbox = $(this);
      var tableRow = checkbox.closest("tr");
      var newRow = tableRow.clone();
      newRow.appendTo(newTable);
    });

    debugger;
    // Clear any existing content in the "filteredResults" element

    // Append the new table to the "filteredResults" element
    newTable.appendTo("#filteredResults");
    window.scrollTo(0, document.body.scrollHeight);
  } else {
    // Clear any existing filtered results when "is-active" is removed
    $("#filteredResults").empty();
  }
};
