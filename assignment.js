function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile();
console.log(result);
//woodCalculator
function woodCalculator(chair,table,bed){
     var chair = chair * 1;
     var table = table * 3;
     var bed = bed * 5;
     var totlalelements = chair + table + bed;
     return totlalelements;
}
var result= woodCalculator(4,6,5);
console.log(result);



//bricCalculator
function bricCalculator(floor){
    var feet = 1000;
    var f1;
    var f2;
    var f3;
    
    if(floor<=10){
       return(floor * 15 * 1000);
    }
    else if(floor>=11 && floor <=20){
        var f1 = 10*15*1000;
        var f2 = floor-10;
        return(f2*12*1000)+f1; 

        
    }
    else if(floor >= 21){   
        var f1 = 10*15*1000;
        var f2 = 10*12*1000;
        var f3 = floor - 20;
        return(f3*10*1000)+f1+f2;
    } 
}

console.log(bricCalculator(30));

//tinyFriends
function tinyFriends(names){
    var lowest = names[0];
    for(var i = 0; i < names.length; i++){
        if(names[i] < lowest ){
            lowest = names[i];
           
        }
    }
   
    return lowest;
}
var lowestname = tinyFriends(['Rahim','karim','Sami']);
console.log(lowestname);