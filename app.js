// response.addHeader("Access-Control-Allow-Origin", "https://script.google.com/macros/s/AKfycbwq8rLGvQOVhNfROC9bjNoV_26OLxqz5Obpkdxf7cScuLjuZTPo/exec");
// Access-Control-Allow-Origin; https://script.google.com/macros/s/AKfycbwq8rLGvQOVhNfROC9bjNoV_26OLxqz5Obpkdxf7cScuLjuZTPo/exec


// document.getElementById("toggle").addEventListener("click", dosomething);
// function dosomething() {
//     if (document.getElementById("board").getAttribute("state")=== "visible"){
//            document.getElementById("board").style.display="none"
//            document.getElementById("board").setAttribute("state", "hidden")
//     } else {
//         document.getElementById("board").style.display="block"
//         document.getElementById("board").setAttribute("state", "visible")
//     }

   
}

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Feedback/Comments' + recipient)
    modal.find('.modal-body input').val(recipient)
    
  })
  
document.getElementById("footer-image").addEventListener("click",dosomething);


  

