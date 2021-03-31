$(document).ready(()=>{
    var sum=0;
    var array= new Array;
    var values=[$("#sub1"),$("#sub2"),$("#sub3"),$("#sub4"),$("#sub5"),$("#sub6")];
    
    //console.log(values);
    for (let i = 0; i < 6; i++) {
        
        values[i].focusout(()=>{
            array.push(values[i].val())
            sum=sum+parseFloat(array[i]);
            $("#result").text(sum.toFixed(2));
            
           
        })
        
    }
})