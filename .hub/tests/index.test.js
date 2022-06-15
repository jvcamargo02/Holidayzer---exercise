const childProcess = require("child_process");
const http = require('http');

describe("Exercício Meu Primeiro Servidor",  () => {

  it("deveria iniciar o servidor na porta 5000 ", async () => {
    
    const options = {
      host: 'localhost',
      port:5000,
      path: '/hello',
    };

    const body = [];
    http.request(options, res => {
      res.on('data', ck => {
        body.push(ck)
      });

      res.on('end', () => {
        expect(body.toString()).toEqual('Meu primeiro servidor, yay!');
      })
    }).end();

  });


});
