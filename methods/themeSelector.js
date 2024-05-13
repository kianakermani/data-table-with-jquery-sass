$(document).ready(function () {
  // Add options to the theme selector
  $("#theme-selector").append("<option value='light'>روشن</option>");
  $("#theme-selector").append("<option value='dark'>تیره</option>");

  // Set the default theme
  $("#theme-selector").val("light");

  // Handle theme change
  $("#theme-selector").change(function () {
    var theme = $(this).val();
    if (theme === "dark") {
      $("#stylesheet").attr('href', './styles/dark.css');
    } else {
      $("#stylesheet").attr('href', './styles/light.css');
    }
  });
});
