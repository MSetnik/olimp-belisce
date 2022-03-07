import "./index.css";
import React, { useEffect, useRef } from "react";

import img from "../../../assets/main-container/logo.png";
import { isInViewport } from "../../../helpers";

const About = () => {
  return (
    <div id='about' className='container about-container scroll-content'>
      <div className='about-title-div'>
        <h1>TKO SMO MI?</h1>
        <h5>NAJBOLJA TERETANA U VALPOVŠTINI</h5>
      </div>

      <div className='row about-content'>
        <div className='col col-8 about-content-text-div'>
          <p>Fitness centar Olimp osnovan je u listopadu 2016.godine.
            Vrlo brzo nakon osnivanja postaje jedan od vodećih fitness centara u Belišću.
              Brojimo oko 1000 članova,od kojih je 300-tinjak redovno aktivnih.
              Centar je opremljen novim i modernim spravama,dvoranom za pilates, aerobic,trx/girje,cardio dvoranom,te fitness dijelom koji se prostire na 500-tinjak m2.
              Uz učestalo nadopunjavanje sadržaja,pokušavamo našim članovima omogućiti najkvalitetnije vježbanje. Usmjereni smo na rekreaciju, rehabilitaciju, kondicijske treninge te grupne treninge.
            Naše educirano stručno osoblje je tu kako bi vas što prije doveli u formu te se brinuli o vašoj sigurnosti, ili vas jednostavno uputili u ispravno izvođenje vježbi.
            Nudimo nekoliko programa, od početničkih sve do onih za malo ozbiljnije rekreativce, ali i profesionalne sportaše.
            Ostvarili smo uspješnu sportsku suradnju sa više sportskih udruga u gradu Belišću, a cilj nam je taj broj povećati.
            U sklopu partnerstva često imamo promotivne akcije za naše članove. Također, povremeno organiziramo edukacijska predavanja vezana uz vježbanje, odnosno zdravi život.</p>
        </div>
        <div className='col col-4 about-content-img-div'>
          <img src={img} />
        </div>
      </div>

    </div>
  );
};

export default About;
