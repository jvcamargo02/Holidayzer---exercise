import express from 'express';

const app = express();


const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "3/1/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" }
];

app.get('/holidays', (req, res) => {

  res.send("Feriados <hr> Dia: 01/01/2022 Confraternização mundial  <br/> Dia: 03/01/2022 Carnaval <br/> Dia: 04/17/2022 Páscoa <br/> Dia: 04/21/2022 Tiradentes <br/> Dia: 05/01/2022 Dia do trabalho <br/> Dia: 06/16/2022 Corpus Christi <br/> Dia: 09/07/2022 Indepedência Do Brasil <br/> Dia: 10/12/2022 Nossa Senhora Aparecida <br/> Dia: 11/02/2022 Finados <br/> Dia: 11/15/2022 Proclamação da República <br/> Dia: 12/25/2022 Natal");
});

app.get('/is-today-holiday', (req, res) => {



  const hoje = new Date();

  function itsHoliday() {

    let holidayToday = "Não, hoje não é feriado"

    holidays.map((holiday) => {
      if (holiday.date === hoje) {
        holidayToday = `Sim, hoje é ${holiday.name}`
      }
    })
    return holidayToday
  }

  res.send(itsHoliday());
});

app.listen(5000);