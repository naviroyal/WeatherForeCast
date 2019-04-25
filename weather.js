$(document).ready(function(){
    $('#submitWeather').click(function(){
        
        var city=$('#city').val();
        if(city!='')
            {
                $.ajax({
                    url:'http://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric'+'&APPID=f1388105a2e61e8c513fe53b39c51166',
                    success : function(data){
//                        console.log(data);
                        var widget = show(data);
                        
                        $("#show").html(widget);
                        
                        $("#city").val('');
                    }
                });           
            }
        else{
            $('#error').html("<div id='errorCity' style='margin-top:80px;' class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button>Field Cannot be empty</div>");
        }
        
    });    
});

function show(data){
    return "<h3 style='font-size:40px;font-weight:bold;' class='text-center'>Current Weather for "+ data.name +", "+ data.sys.country +"</h3>"+
    "<h3 style='padding-left:40px;'><strong>Weather</strong>:"+ data.weather[0].main +"</h3>" + 
        "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+data.weather[0].description +"</h3>" +
        "<h3 style='padding-left:40px;'><strong>Temperature</strong>:"+ data.main.temp +"&deg;C</h3>"+
        "<h3 style='padding-left:40px;'><strong>Pressure</strong>:"+ data.main.pressure +" hPa</h3>" +
        "<h3 style='padding-left:40px;'><strong>Humidity</strong>:"+ data.main.humidity +"%</h3>" +
        "<h3 style='padding-left:40px;'><strong>Min. Temperature</strong>:"+ data.main.temp_min +"&deg;C</h3>" +
        "<h3 style='padding-left:40px;'><strong>Max. Temperature</strong>:"+ data.main.temp_max +"&deg;C</h3>" +
        "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>:"+ data.wind.speed +" m/s</h3>" +
        "<h3 style='padding-left:40px;'><strong>Wind Direction</strong>:"+ data.wind.deg +"&deg;</h3>";
}