import React from 'react'
import Container from '../components/container'
import Layout from '../containers/layout'
import Accordion from '../components/Accordion'

export default () => (
  <Layout>
    <Container>

      <h1>Vedtekter for Øreåsen borettslag</h1>
      <br />
      <Accordion
        title='1	Innledende bestemmelser'
        content='<ul><li class="lead">1.1	Borettslagets firma og formål</li><br />
        <p class="lead">Borettslagets navn er [Må inneholde borettslag eller BRL]. Lagets forretningskontor er i [xxxx] kommune.</p>
        <br />
        <p class="lead">Lagets formål er å gi andelseierne bruksrett til egen bolig i lagets eiendom. Laget kan også drive annen virksomhet som har sammenheng med boretten. Laget kan oppføre andre bygninger eller anlegg, for eksempel garasjer, til andelseiernes felles benyttelse.</p>
        </li><br />
        <li class="lead">1.2	Ansvarsbegrensning </li><br /> <p class="lead">Andelseierne hefter ikke overfor kreditorene for borettslagets gjeld.</p>
        <li class="lead">1.3	Diskriminering </li><br /> <p class="lead">Det kan ikke settes vilkår for å være andelseier som tar hensyn til trosbekjennelse, hudfarge, språkkunnskaper, nasjonalt eller etnisk opphav eller seksuell legning eller orientering, og slike omstendigheter kan ikke regnes som saklig grunn til å nekte godkjenning av en andelseier eller bruker, eller ha vekt ved bruk av forkjøpsrett.</p>
        </ul>'
      />
      <Accordion
        title='2	Andeler, andelseiere og eierskifte'
        content='<ul><li class="lead">2.1	Andeler </li><br />
        <p class="lead">Borettslaget består av [xxx] andeler, pålydende kr [xxxxxx]. Det skal være knyttet en andel til hver bolig. Hver andelseier kan bare eie en andel, og kun fysiske personer kan være andelseie-re .</p>
        <br />
        <p class="lead">Flere personer kan eie en andel sammen. Dersom en av disse ikke bor i leiligheten, anses det som om bruken er overlatt til de som bor, og man må følge reglene for overlating av bruk, se punkt 3.</p>
      
        </ul>'
      />
      <Accordion
        title='3	Bruk av andelen'
        content='<ul><li class="lead">3.1	Andelseiers rett til bruk</li><br />
        <p class="lead">Hver andel gir enerett til bruk av en bolig i laget og rett til å bruke fellesarealer på vanlig måte.</p>
        <br />
        <li class="lead">3.2	Overlating av bruk til andre</li><br />
        <p class="lead">En andelseier som selv bor i boligen, kan overlate bruken av deler av boligen til andre.</p>
       
        </ul>'
      />

    </Container>
  </Layout>

)
