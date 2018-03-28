// Set the date we're counting down to
var countDownDate = new Date("Apr 30, 2018 10:00:00").getTime();
var getNow = new Date().getTime();

$(document).ready(function() {
    $('.countdown').final_countdown({
        start:0 ,
        end: countDownDate,
        now: getNow,
    }, function() {
        // Finish callback
    });
});