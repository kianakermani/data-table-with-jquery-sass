const newTable = $(
  "<table id='filterTable' class='styled-table'><thead><tr><th></th><th></th><th>Sender Name</th><th>Role Name</th><th>Entity Type Name</th><th>Title</th><th>Action Name</th><th>Entity Number</th><th>Receive Date</th><th>Following Type</th><th></th></tr></thead><tbody></tbody></table>"
).addClass("table table-hover");

function createTableCell(titleAttribute, textContent) {
  return $("<td>", { class: "dataCell", title: titleAttribute }).text(
    textContent
  );
}
