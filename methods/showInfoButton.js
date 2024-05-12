$.fn.showInfoButton = function () {
  $("#filterTable thead").show();
  $(this).toggleClass("is-active");
  if ($(this).hasClass("is-active")) {


    // Clear the new table before appending new rows
    newTable.children("tbody").empty();

    // Find all checkboxes
    $("input[type='checkbox']:checked").each(function () {
      var checkbox = $(this);
      var tableRow = checkbox.closest("tr");
      var newRow = tableRow.clone();
      newRow.children("td:nth-child(2)").text("");
      newRow.children("td:nth-child(11)").text("");
      newRow.appendTo(newTable);
    });

    // Append the new table to the "filteredResults" element
    newTable.appendTo("#filteredResults");
    window.scrollTo(0, document.body.scrollHeight);
  } else {
    // Clear any existing filtered results when "is-active" is removed
    $("#filteredResults").empty();
  }
};
