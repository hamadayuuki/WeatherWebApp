window.addEventListener("load" , function() {
    getTrainList();
});

function getTrainList() {
    var kagoshimaCityNumber = "4620100";
    var kasoshimaAPI_url = "https://www.jma.go.jp/bosai/forecast/data/forecast/460100.json";   // 遅延情報のJSON
    
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
        var temps = json[0]["timeSeries"][2]["areas"][0]["temps"];   // temps[0] : 最低気温 , [1] : 最高気温
        var row = document.getElementById("train-list").insertRow();
        console.log(temps);
        row.insertCell().textContent = temps;
    });
}