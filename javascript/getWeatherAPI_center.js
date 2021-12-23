window.addEventListener("load" , function() {
    getTrainList();
});

function getTrainList() {
    var CityNumber = "460100";   // 鹿児島県
    var kasoshimaAPI_url = "https://www.jma.go.jp/bosai/forecast/data/forecast/" + String(CityNumber) + ".json";   // 遅延情報のJSON
    
    fetch(kasoshimaAPI_url)
    .then(function (data) {
        return data.json();
    })
    .then(function (json) {

        /*
            ["areas"][X] 
                鹿児島   : 0
                阿久根   : 1
                枕崎     : 2
                鹿屋     : 3
                種子島   : 4
                名瀬     : 5
                沖永良部 : 6
        */
        var placeName = json[0]["timeSeries"][2]["areas"][0]["area"]["name"]   // 地点名
        var temps = json[0]["timeSeries"][2]["areas"][0]["temps"];   // temps[0] : 最低気温 , [1] : 最高気温
        var weather = json[0]["timeSeries"][0]["areas"][0]["weathers"][0];   //
        var weather_firstElement = weather.split(" ")[0];
        
        document.getElementById("place").innerHTML = placeName;
        document.getElementById("tempreture").innerHTML = String(temps[0]) +"℃ / " + String(temps[1])+ "℃";
        document.getElementById("weather").innerHTML = weather;

        switch (weather_firstElement) {
            case "晴れ":
                document.getElementById("weatherIcon").innerHTML = '<img src="../Pic/sunny.png" style="display: block; margin: auto;"　alt="雨" title="雨" class="image-vw"></img>';
                break;

            case "曇り":
                document.getElementById("weatherIcon").innerHTML = '<img src="../Pic/cloudy.png" style="display: block; margin: auto;"　alt="雨" title="雨" class="image-vw"></img>';
                break;

            case "雨":
                document.getElementById("weatherIcon").innerHTML = '<img src="../Pic/rainny.png" style="display: block; margin: auto;"　alt="雨" title="雨" class="image-vw"></img>';
                break;
        }

        console.log(weather_firstElement);
        //row.insertCell().textContent = temps;
    });
}