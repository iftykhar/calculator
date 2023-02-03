function insertNumber(numb){
    var existNumb = $('#result').val();
    $('#result').val(existNumb + numb);

}

function clearform(){
    $('#result').val('');
}

function calc(){
    var result = eval($('#result').val());
    $('#result').val(result);
}