
function Clear() {
    document.form.textview.value = "";
}
function insert(num) {
    var x = document.form.textview.value;
    if (x == 0) {
        first = 0;
    }
    if (x == "ERROR") {
        document.form.textview.value = num;
        first++;
    }
    else {
        document.form.textview.value = document.form.textview.value + num;
        first++;
    }

}
function back() {
    var x = document.form.textview.value;
    
    document.form.textview.value = x.substring(0, x.length - 1);
}
function equal() {
    var x = document.form.textview.value;
    if (x[x.length - 1] == "*" || x[x.length - 1] == "/" || x[x.length - 1] == "%") {
        document.form.textview.value = "ERROR"
    }
    var first=0;
    var second=0;
    var m;
    for(var i=0;i<x.length;i++){
        if(x[i]=="/"||x[i]=="*"||x[i]=="+"||x[i]=="-"||x[i]=="%"){
            var l=i;
            m=l;
            while(++l!==x.length){
                second++;
            }
            break;
        }
        first++;
    }
    
    var firstNum = x.substring(0,first);
    var secondNum = x.substring(m+1,x.length);
    if(x[m]=="-"){
        document.form.textview.value = firstNum-secondNum;
    }
    else if(x[m]=="+"){
        document.form.textview.value = firstNum+secondNum;
    }
    else if(x[m]=="*"){
        document.form.textview.value = firstNum*secondNum;
    }
    else if(x[m]=="/"){
        if(firstNum==0)document.form.textview.value = "ERROR";
        else document.form.textview.value = firstNum/secondNum;
    }
    else if(x[m]=="%"){
        document.form.textview.value = firstNum%secondNum;
    }
}