var numbers = [];
var newnumb;

function enter() {
    newnumb = parseInt(document.getElementById("inputnumb").value);
    numbers.push(newnumb);
    console.log(numbers);
    document.getElementById("totalNumbers").innerHTML = numbers;

}

function sort(){
    var num = numbers[0] + numbers[1];
    for(var x=0; x<numbers.length; x++){
        for(var y=0; y<numbers.length; y++){
            if(numbers[x]<numbers[y]){
                var place= numbers[x];
                numbers[x] = numbers[y];
                numbers[y] = place;
            }
        }
    }   
    document.getElementById("ascend").innerHTML = numbers;
}