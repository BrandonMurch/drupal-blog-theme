export const searchBarHandler = () => {
  jQuery(".search-submit").on("mousedown", (e) => {
    // Stop blur if submit is pressed.
    e.preventDefault();
  });

  jQuery("#edit-keys--2").on("blur", () => {
    jQuery("#search-block-form")[0].reset();
  });

  jQuery(".search-icon").on('touchstart click', (event) => {
		event.preventDefault()

		if (document.activeElement != document.getElementById("edit-keys--2")) {
			jQuery("#edit-keys--2").focus();
		}
  })

};
