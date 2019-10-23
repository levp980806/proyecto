var firebaseConfig = {
    apiKey: "AIzaSyD358Lk5ctVAx8uPAft8-CG74Wzpb_9vgs",
    authDomain: "conexion-471aa.firebaseapp.com",
    databaseURL: "https://conexion-471aa.firebaseio.com",
    projectId: "conexion-471aa",
    storageBucket: "conexion-471aa.appspot.com",
    messagingSenderId: "948554067399",
    appId: "1:948554067399:web:017690c6218584c3edbde2",
    measurementId: "G-DZ6T424407"
  };

  var app = {

    inicio : function(){
        this.iniciaFastClick();
        this.iniciaFirebase();
    },

    iniciaFastClick: function(){
        FastClick.attach(document.body);
    },
 
    iniciaFirebase : function(){
        var proy = firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        document.getElementById('q').innerHTML=proy.name;
    },  

    registroFirebase : function(){
        var email=document.getElementById('email').value;
        var pass=document.getElementById('pass').value;
    
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        });
    },

}

function enviar(){
    app.registroFirebase();
};

if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded', function(){
    app.inicio();
}, false);
}
