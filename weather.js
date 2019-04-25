$(document).ready(function(){
    console.log("svsdvdsvdsvsd");
    $('#submitWeather').click(function(){
        
        var city=$('#city').val();
        console.log(city);
       
        if(city!='')
            {
                $.ajax({
                    url:'http://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric'+'&APPID=f1388105a2e61e8c513fe53b39c51166',
                    success : function(data){
                        console.log(data);
                    }
                });
//                $.ajax({                    url:'http://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric'+'&APPID=f1388105a2e61e8c513fe53b39c51166',
//                    type:'GET',
//                    dataType:'jsonp',
//                    success:function(data){
//                        console.log(data);
//                    }   
//                });
//                
            }
        else{
            $('#error').html('Field cant empty');
        }
        
    });
    
    
});