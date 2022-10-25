import { Serie } from "./serie";
import { data } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!; 
const TemporadasPromT: HTMLElement = document.getElementById("Temporadas")!;


const image: HTMLElement = document.getElementById("card-image")!;
const info: HTMLElement = document.getElementById("card-info")!;
const link: HTMLElement = document.getElementById("card-link")!;
const name: HTMLElement = document.getElementById("card-name")!;


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
    trElement.addEventListener("click", () => showCard(s))
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


function showCard(serie: Serie){
  image.setAttribute('src',serie.imagen );
  link.setAttribute('href', serie.link );
  link.setAttribute('height', "300px" );
  link.setAttribute('width', "470px" );
  link.innerText = serie.link;
  name.innerText = serie.nombre;
  info.innerText = serie.info; 
  }