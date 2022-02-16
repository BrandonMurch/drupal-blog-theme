const disableHtmlHelpIfNotRestricted = () => {
  const selectedOption = jQuery("#edit-comment-body-0-format--2").children("option:selected").val();

  if (selectedOption == "restricted_html") {
    console.log("SHOW")
    jQuery("#formatter-help").show();
  } else {
    jQuery("#formatter-help").hide();
  }
}

export const formatterHelp = () => {
  // Comment section gets loaded dynamically via javascript.
  // This ensures that it is there before checking for the html type.
  setTimeout(() => {
    disableHtmlHelpIfNotRestricted();
    jQuery("#edit-comment-body-0-format--2").change(function () {
      disableHtmlHelpIfNotRestricted();
    })
  }, 1000);

}
