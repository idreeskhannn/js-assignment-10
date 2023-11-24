alert("hello world  ")





      //chap 49 -52
 
 
               //question 1

function submit(){
    var a = document.getElementById("text")
    var b = document.getElementById("tix")
    document.write("name  = " +" "+a.value +"<br>" +"password  = " +" "+ b.value)
}

//question 2\
function read(){
    var hmm = document.getElementById("readme")
hmm.innerHTML ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque placeat dolores eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque placeat dolores eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque placeat dolores eaque.<a href =''>hide<a/>"
}


// question =3 

function delet(){
    document.getElementById("td1").innerHTML=""
}

function delet1(){
    document.getElementById("td2").innerHTML=""
}
function delet2(){
    document.getElementById("td3").innerHTML=""
}
function delet3(){
    document.getElementById("td4").innerHTML=""

}
function edit(){
var user =prompt("enter name")
var user1 =prompt("enter class")
var user2 =prompt("enter position")

    document.getElementById("nam").innerHTML=user
    document.getElementById("cll").innerHTML=user1
    document.getElementById("pos").innerHTML=user2
    
}
function edit1(){
    var user =prompt("enter name")
    var user1 =prompt("enter class")
    var user2 =prompt("enter position")
    
        document.getElementById("nam1").innerHTML=user
        document.getElementById("cll2").innerHTML=user1
        document.getElementById("pos3").innerHTML=user2
        
    }
    function edit2(){
        var user =prompt("enter name")
        var user1 =prompt("enter class")
        var user2 =prompt("enter position")
        
            document.getElementById("nam4").innerHTML=user
            document.getElementById("cll5").innerHTML=user1
            document.getElementById("pos6").innerHTML=user2
            
        }