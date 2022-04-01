var player1name=localStorage.getItem("p1");
var player2name=localStorage.getItem("p2");
var player1score=0;
var player2score=0;
document.getElementById("player1name").innerHTML=player1name+" : ";
document.getElementById("player2name").innerHTML=player2name+" : ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="Question Turn - "+player1name;
document.getElementById("playeranswer").innerHTML="Answer Turn - "+player2name;
var word="";
function send(){
    var getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log(word);
    var alpha1=word.charAt(1);
    console.log(alpha1);
    var lenght_divied_2=Math.floor(word.length/2);
    alpha2=word.charAt(lenght_divied_2);
    console.log(alpha2);
    lenght_minus_1=word.length-1;
    var alpha3=word.charAt(lenght_minus_1);
    console.log(alpha3);
    var remove_alpha1=word.replace(alpha1,"_");
    var remove_alpha2=remove_alpha1.replace(alpha2,"_");
    var remove_alpha3=remove_alpha2.replace(alpha3,"_");
    console.log(remove_alpha3);

    var questionword="<h4 id='word_dispay'>Q. "+remove_alpha3+"</h4>";
    var input_box="<br>Answer : <input type='text' id='input_answer'>";
    var check_button="<br> <button class='btn btn-info' onclick='check()'>Check</button>";
    var row=questionword+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
 var question_turn="player1";
 var answer_turn="player2";
 function check(){
     var get_answer=document.getElementById("input_answer").value;
     var answer= get_answer.toLowerCase();
     console.log(answer);
     if(answer==word){
         if(answer_turn=="player1"){
             player1score=player1score+1;
             document.getElementById("player1score").innerHTML=player1score;
         }
         else{
             player2score=player2score+1;
             document.getElementById("player2score").innerHTML=player2score;
         }
     }
     if(question_turn=="player1"){
         question_turn="player2";
         document.getElementById("playerquestion").innerHTML="Question Turn - "+player2name;
     }
     else{
         question_turn="player1";
         document.getElementById("playerquestion").innerHTML="Question Turn - "+player1name;
     }
     if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("playeranswer").innerHTML="Answer Turn - "+player2name;
    }
    else{
        answer_turn="player1";
        document.getElementById("playeranswer").innerHTML="Answer Turn - "+player1name;
    }
    document.getElementById("output").innerHTML="";
 }