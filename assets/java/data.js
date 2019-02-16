  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAStBNXN1rPhZ_CKUB-9hB1Q6_vu6ynOfE",
    authDomain: "portfoliocontacts-34381.firebaseapp.com",
    databaseURL: "https://portfoliocontacts-34381.firebaseio.com",
    projectId: "portfoliocontacts-34381",
    storageBucket: "portfoliocontacts-34381.appspot.com",
    messagingSenderId: "99191228823"
  };
  firebase.initializeApp(config);

  $("#user-info").on("click", function(event) {
      event.preventDefault();

      var name = $("#name").val().trim();
      var email = $("#email").val().trim();
      var message = $("#message").val().trim();

      console.log(name);
      console.log(email);
      console.log(message);

      sessionStorage.clear();

      sessionStorage.setItem("name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("message", message);


  });