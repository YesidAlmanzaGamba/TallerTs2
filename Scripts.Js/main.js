import { data } from './data.js';

var seriesTbody = document.getElementById('series');
var TemporadasPromT =  document.getElementById('Temporadas');

var image = document.getElementById("card-image");
var info = document.getElementById("card-info");
var link = document.getElementById("card-link");
var name = document.getElementById("card-name");



renderSeriesInTable(data);


TemporadasPromT.innerHTML = "Promedio Temporadas: ".concat(getTemporadasProm(data));


function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bolder;\">".concat(s.id, "</td>\n <td style=\"color: #4895D9;\">").concat(s.nombre, "</td>\n<td>").concat(s.canal, "</td>\n  <td>").concat(s.temporada, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener("click", function() {return showCard(s); });
    });
}
function getTemporadasProm(series) {
    var TotalTemporadas = 0;
    var nSeries = 0;
    series.forEach(function (serie) {
        TotalTemporadas = TotalTemporadas + serie.temporada;
        nSeries++;


    });
    return TotalTemporadas / nSeries;
}


function showCard(serie){
    image.setAttribute('src',serie.imagen );
    link.setAttribute('href', serie.link );
    link.setAttribute('height', "300px" );
    link.setAttribute('width', "470px" );
    link.innerText = serie.link;
    name.innerText = serie.nombre;
    info.innerText = serie.info; 
    }
