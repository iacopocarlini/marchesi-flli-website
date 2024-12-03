// Menu
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
menuIcon.onclick = () => {
  window.scrollTo(0, 0);
  menu.classList.toggle("menu-active");
}


// Slider
const slidesContainer1 = document.getElementById("slides-container#1");
const slidesContainer3 = document.getElementById("slides-container#3");
const slide = document.querySelector(".slide");

function slideNext(slidesContainer) {
  if (slidesContainer == null) return;
  const slideWidth = slide?.clientWidth;
  const maxScrollLeft = slidesContainer?.scrollWidth - slidesContainer?.clientWidth;

  if (slidesContainer?.scrollLeft >= maxScrollLeft) {
    slidesContainer.scrollLeft = 0;
  } else {
    slidesContainer.scrollLeft += slideWidth;
  }
}

function slidePrev(slidesContainer) {
  if (slidesContainer == null) return;
  const slideWidth = slide?.clientWidth;
  const maxScrollLeft = slidesContainer?.scrollWidth - slidesContainer?.clientWidth;

  if (slidesContainer?.scrollLeft >= maxScrollLeft) {
    slidesContainer.scrollLeft = 0;
  } else {
    slidesContainer.scrollLeft += slideWidth;
  }
}

const homeSliderInterval = setInterval(() => slideNext(slidesContainer1), 3000);
const companySliderInterval = setInterval(() => slideNext(slidesContainer3), 3000);

// Modal
const expandedModalText = {
  '1': "Marchesi Flli progetta e realizza attrezzature meccaniche avanzate per il settore agricolo, come sollevatori posteriori, lame da neve, spargisale autocaricanti e telai di sicurezza. Ogni prodotto è progettato per offrire robustezza, affidabilità e prestazioni elevate, resistendo alle condizioni di lavoro più difficili.<br><br>I nostri telai di sicurezza per trattrici agricole cingolate e gommate immesse sul mercato prima del 1996, sono prodotti con con kit di montaggio che non richiedono il trasporto in officina.Inoltre, le lame da neve sono realizzate con materiali alto resistenziali per ridurre il peso e migliorare la velocità, mentre i nostri spargisale autocaricanti hanno controllo elettronico proporzionale, garantendo un'applicazione precisa in base alla velocità.Infine, abbiamo sviluppato soluzioni con baricentro basso per aumentare la stabilità delle trattrici su terreni collinari.<br><br>Collaboriamo con grandi marchi internazionali, come Claas, per il sistema di livellamento posteriore, una tecnologia che rappresenta l'eccellenza della meccanica agricola.<br><br>Con la nostra esperienza e innovazione, offriamo soluzioni sicure ed efficienti per i nostri clienti, infatti, siamo certificati ISO 9001 e ci siamo adeguati alle disposizioni della Legge 81 del 2008 in tema di sicurezza sul lavoro.",
  '2': "Il nostro servizio di assemblaggio meccanico è progettato per garantire la massima precisione e qualità in ogni fase del processo. Offriamo soluzioni di assemblaggio su misura, in grado di rispondere alle esigenze specifiche dei nostri clienti, sia per progetti di piccole che di grandi dimensioni. Ogni componente viene assemblato con cura e attenzione ai dettagli, per assicurare l'affidabilità e la durabilità del prodotto finale.<br><br>Specializzati nell'assemblaggio di kit per livellamento longitudinale e trasversale e kit sollevatori posteriori per mietitrebbie Claas, seguiamo rigorosamente le linee guida del costruttore per garantire un montaggio preciso e un collaudo completo. Questo ci permette di offrire prodotti finiti che rispondono agli standard più elevati di qualità e sicurezza.<br><br>Inoltre, disponiamo di un ampio spazio e di attrezzature specializzate, tra cui una officina attrezzata di carroponte, che ci consente di gestire e spostare macchinari di grandi dimensioni con facilità e sicurezza.<br><br>Offriamo anche un supporto tecnico completo, pronto a risolvere qualsiasi esigenza durante il processo di assemblaggio e nel successivo utilizzo dei prodotti.",
  '3': "Da oltre trent’anni, nei mesi estivi, ci dedichiamo alla mietitrebbiatura in collina e in pianura, un’attività che ci ha permesso di maturare una conoscenza approfondita e diretta del settore. Il nostro parco macchine è dotato di mietitrebbie auto, equipaggiate con barre da taglio per cereali, piselli, girasoli e semi di barbabietola da zucchero, progettate per affrontare ogni tipo di terreno e coltura con la massima efficienza.<br><br>Da sempre, offriamo il servizio di mietitura conto terzi utilizzando macchine moderne e altamente performanti, per garantire raccolti perfetti e tempestivi. Grazie alla nostra esperienza e al nostro impegno, combiniamo efficienza e qualità, massimizzando la produttività e rispondendo alle necessità specifiche del settore.",
  '4': "Il nostro ufficio tecnico è il cuore pulsante dell’innovazione di Marchesi Flli. Grazie a un avanzato sistema di progettazione 3D, siamo in grado di seguire ogni commessa con cura e precisione, dalla fase iniziale di ideazione fino alla consegna finale.<br><br>Collaboriamo al 100% con i nostri clienti, lavorando fianco a fianco per comprendere appieno le loro esigenze e tradurle in soluzioni personalizzate.Il nostro approccio garantisce precisione millimetrica e un controllo ottimale durante tutte le fasi del processo.<br><br>Affidarsi al nostro studio tecnico significa scegliere un team capace di trasformare ogni richiesta in soluzioni concrete e innovative per il settore agricolo e industriale.",
}

function closeModal() {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.modal').style.display = 'none';
  document.getElementById('modal-title').textContent = '';
  document.getElementById('modal-content').innerHTML = ''
  document.body.style.overflow = 'auto';
}

function openModal(title, textSelector) {
  window.scrollTo(0, 0);
  document.querySelector('.overlay').style.display = 'block';
  document.querySelector('.modal').style.display = 'block';
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-content').innerHTML = expandedModalText[textSelector]
  document.body.style.overflow = 'hidden';

  document.querySelector('.overlay').addEventListener('click', (event) => {
      closeModal();
  });
}
