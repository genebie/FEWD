var score = 0

$('#increase-5').on('click', function() {
    score += 5;
    $('#score').text(score);
});

$('#decrease-5').on('click', function(){
    score -= 5;
    $('#score').text(score);

    if (score < 0){
        score = 0;
        $('#score').text(score);
    }
    else {
        $('#score').text(score);
    }
});

$('#submit-custom-score').on('click', function(event){
    event.preventDefault();
    var customScore = $('#custom-score').val();
    $('#score').text(customScore);
});