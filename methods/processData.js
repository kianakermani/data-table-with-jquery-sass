(function ($) {
  $.fn.processData = function (xml) {
    const xml2 = $.parseXML(xml);
    var items = $(xml2).find("Receive");

    items.each(function (index) {
      var SenderName = $(this).find("Sender").attr("SenderName");
      var RoleName = $(this).find("Sender").attr("RoleName");
      var EntityTypeName = $(this).find("EntityTypeName").text();
      var Title = $(this).find("Title").text();
      var ActionName = $(this).find("ActionCode").attr("ActionName");
      var EntityNumber = $(this).find("EntityNumber").text();
      var ReceiveDate = $(this).find("ReceiveDate").text();
      var FollowingType = $(this).find("FollowingType").text();
      var ID = $(this).attr("ReceiverCode"); //as uniqueKey

      $("<tr>")
        .attr("uKey", ID)
        .append($("<td><input class='checked' type='checkbox'></td>"))
        .append($("<td id='rowCount'>").text(index + 1))
        .append($("<td>").text(SenderName))
        .append($("<td>").text(RoleName))
        .append($("<td>").text(EntityTypeName))
        .append($("<td>").text(Title))
        .append($("<td>").text(ActionName))
        .append($("<td>").text(EntityNumber))
        .append($("<td>").text(ReceiveDate))
        .append($("<td>").text(FollowingType))
        .append(
          '<td> <button class="btn-action"><i class="fa-solid fa-circle-info "></i></button></td>' //the icon button
        )
        .append(
          '<div id="popup' +
            ID +
            '" class="popup"><ul><li><a href="#" id="info_' +
            ID +
            '">نمایش سطر انتخاب شده</a></li><li><a href="#" id="remove_' +
            ID +
            '">حذف سطر انتخاب شده</a></li></ul></div>' //customize popup for every tr
        )
        .addClass("pointer")
        .data("uniqueKey", ID)
        .appendTo("#table-container #table");

      //click on info(first) icon button
      $("#info_" + ID + "").click(function () {
        event.preventDefault();
        $(this).toggleClass("is-active");
        $("#filterTable tbody").empty();
        var clickedElement = $(this).parents("tr");

        if ($(this).hasClass("is-active")) {
          var selectedCells = clickedElement.find("td");
          var newRow = $("<tr></tr>");

          selectedCells.each(function (index) {
            var cellData = $(this).text();
            var newCell = $("<td></td>").text(cellData);
            // Create new cell with data

            newRow.append(newCell); // Add the new cell to the new row
            if (index) {
              newRow.attr("ukey", ID);
            }
            newRow.appendTo(newTable);
          });
          

          // Clear any existing content in the "filteredResults" element

          // Append the new table to the "filteredResults" element
          newTable.appendTo("#filteredResults");
          window.scrollTo(0, document.body.scrollHeight);
        }
      });
      // Click on remove(second) icon button
      $("#remove_" + ID + "").click(function () {
        event.preventDefault();
        var currentID = $(this).closest("tr").data("uniqueKey"); // Get the uniqueKey

        // Remove rows from both tables
        $("#table tr, #filterTable tr").each(function () {
          if ($(this).attr("ukey") == currentID) {
            $(this).remove();
          }
        });
        if ($("#filterTable tbody tr").length === 0) {
          $("#filterTable thead").hide();
        }

        // Update rowCount
        $("#table tr , #filterTable tr").each(function (i) {
          $(this)
            .find("#rowCount")
            .text(i - 1);
        });
      });
    });
  };
})(jQuery);
