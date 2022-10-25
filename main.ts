import { Serie } from "./serie";
import { data } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!; 
const TemporadasPromT: HTMLElement = document.getElementById("Temporadas")!;

renderSeriesInTable(data);
TemporadasPromT.innerHTML = `${getTemporadasProm(data)}`

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.nombre}</td>
                           <td>${s.canal}</td>
                           <td>${s.temporadas}</td>`;

    seriesTbody.appendChild(trElement);
  });
}

function getTemporadasProm(series: Serie[]): number {
  let totalTemporadas: number = 0;
  let nSeries: number = 0;
  series.forEach((serie) => {
      totalTemporadas = totalTemporadas + serie.temporadas;
      nSeries++;
  });
  return totalTemporadas/nSeries;
}