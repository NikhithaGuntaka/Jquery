$(document).ready(()=>{
    var count=[0,0,0,0,0]
    $("#div1").click(()=>{
        count[0]++;
        if(count[0]%2===0){

            $("#div1").css("background-color","white");
        }
        else{
            $("#div1").css("background-color","yellow");
        }
    })
    $("#div2").click(()=>{
        count[1]++;
        if(count[1]%2===0){

            
            $("#div2").css("background-color","white");
        }
        else{
            
            $("#div2").css("background-color","green");
        }
    })
    $("#div3").click(()=>{
        count[2]++;
        if(count[2]%2===0){

            
            $("#div3").css("background-color","white");
        }
        else{
            
            $("#div3").css("background-color","red");
        }
    })
    $("#div4").click(()=>{
        count[0]++;
        if(count[0]%2===0){
            $("#div4").css("background-color","white");
        }
        else{
           
            $("#div4").css("background-color","pink");
        }
    })
    var vara=$("table").html();
    $("button").click(()=>{
        count[4]++;
        
        
        if(count[4]%2===0){
            
                $("table").html(vara);
        }
        else {
            $("table").empty();
        }   
    })
})