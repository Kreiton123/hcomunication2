// Atividade: cole o link do firebase aqui
const firebaseConfig = {
  apiKey: "AIzaSyA6uJkilDdMfwZ1xgitTxuyA1l7bQ_r7Ns",
  authDomain: "hcomunication2.firebaseapp.com",
  databaseURL: "https://hcomunication2-default-rtdb.firebaseio.com",
  projectId: "hcomunication2",
  storageBucket: "hcomunication2.appspot.com",
  messagingSenderId: "640960092744",
  appId: "1:640960092744:web:e0fae4413492f17545567d"
};

firebase.initializeApp(firebaseConfig);

//Atividade: guardar numa variável o nome do usuário
user_name=localStorage.getItem("user_name");

function addRoom()
{
//Atividade: guardar numa variável o nome da sala
room_name=document.getElementById("room_name").value;
window.location="kwitter_page.html";
  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("room_name", room_name);

}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("nome-da-sala"+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;
    });
  });

}
//Atividade: chamar a função getData
getData();




//Atividade: criar a função redirectToRoomName
function redirectToRoomName(name){

  localStorage.setItem("room_name",name);


window.location="kwitter_page.html";

}
//Atividade: criar a função logout

function logout (){

  localStorage.removeItem("user_name");

  localStorage.removeItem("room_name");

  window.location="index.html";
}

