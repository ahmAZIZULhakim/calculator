var resultfield=$("#result");



function insertnumber(number){
var existingnumber = resultfield.val();

resultfield.val(existingnumber + number)

}

function clearresult(){
    resultfield.val('')
}
function calculat(){
var result= eval(resultfield.val())
resultfield.val(result)
}

function deletenumber()
{
    var pvalue=resultfield.val()
    if(pvalue!=""){
        resultfield.val(pvalue.slice(0,-1));
    }

}