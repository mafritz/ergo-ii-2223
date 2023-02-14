// If it is the page about the programme
if (window.location.pathname.includes("programme.html")) {
  // Init local storage
  let db = window.localStorage;

  // Get all activities
  let activities = document.querySelectorAll("input.form-check-input");

  // Iterate through activities
  activities.forEach(function (el) {
    //Add listener to checkboxes
    el.addEventListener("click", function (event) {
      let checkbox = event.target;
      // Set the status for the item (must be transformed because local storage stores strings)
      db.setItem(event.target.id, Number(event.target.checked));
    });

    //Define if it is checked or not (must be transformed because local storage stores strings)
    el.checked = Boolean(Number(db.getItem(el.id)));
  });
}
