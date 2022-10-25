import { data } from './data.js';

var seriesTbody = document.getElementById('series');
var TemporadasPromT =  document.getElementById('Temporadas');
renderSeriesInTable(data);


TemporadasPromT.innerHTML = "Promedio Temporadas: ".concat(getTemporadasProm(data));


function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bolder;\">".concat(s.id, "</td>\n <td style=\"color: #4895D9;\">").concat(s.nombre, "</td>\n<td>").concat(s.canal, "</td>\n  <td>").concat(s.temporada, "</td>");
        seriesTbody.appendChild(trElement);
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