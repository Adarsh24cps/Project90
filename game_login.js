function adduser(){
    var player1name=document.getElementById("player1input").value;
    var player2name=document.getElementById("player2input").value;
    localStorage.setItem("p1",player1name);
    localStorage.setItem("p2",player2name);
    window.location="game_page.html";
}