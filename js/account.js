// document.querySelectorAll('a, button').forEach(function(element) {
//     element.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent the default action (e.g., following a link)
//         alert('Account restricted');
//     });
// });

     // Get the modal
     var modal = document.getElementById("myModal");

     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];

     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
         modal.style.display = "none";
     }

     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }

     // Prevent default action and show the modal
     document.querySelectorAll('a, button').forEach(function(element) {
         element.addEventListener('click', function(event) {
             event.preventDefault(); // Prevent the default action (e.g., following a link)
             modal.style.display = "block"; // Show the modal
         });
     });