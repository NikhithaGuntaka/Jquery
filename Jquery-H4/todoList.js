$(document).ready(()=>{
    
   
    var tasks=$("#msg");
    var ele="";
    $("button").click(()=>{
        var task= $("#task").val();
        if(task){
            ele=ele+"<p>"+task+"</p>";
            tasks.html(ele);
        }
        else{
            alert("Enter the Task");
        }
    })
})