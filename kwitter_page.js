// Atividade: cole as informações do firebase
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
// Atividade: guardar numa variável o nome do usuário
user_name=localStorage.getItem("user_name");
// Atividade: guardar numa variável o nome da sala
room_name=localStorage.getItem("room_name");
// Atividade: crie a função send
function send(){

msg=document.getElementById("msg").value;
// codigo q guarda nu firebase
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
document.getElementById("msg").value="";
}


// Atividade: crie a função logout
function logout (){

      localStorage.removeItem("user_name");
    
      localStorage.removeItem("room_name");
    
      window.location="index.html";
    }
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//preencher
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";//guarda o nome como tag e a imagem do verificado
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";//guarda a mensagem como tag
         like_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(\"" + firebase_message_id + "\")'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";//guarda o desenho do like

        row = name_with_tag + message_with_tag +like_button + span_with_tag;// junta todas as tags feitas

        document.getElementById("output").innerHTML+=row;

      } });  }); }
getData();

// Atividade: crie a função updateLike

function updateLike(message_id){

button_id=message_id;

likes=document.getElementById(button_id).value;

update_likes=Number(likes)+1;

firebase.database().ref(room_name).child(button_id).update({
      like : update_likes  
 });
}

