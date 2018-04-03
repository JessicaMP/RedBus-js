const bancos = [{name: 'bcp', id: 1, img: 'assets/images/logo-bcp.svg', paso1: 'Select the option Payment of Services > COMPANIES > PAGOEFECTIVO > PAGOEFECTIVOSOLES' },
    { name: 'bbva', id: 2, img: 'assets/images/logo-bbva.svg', paso1: 'Select the option Payment of Services > From Institutions and Companies > Search by name > PAGOEFECTIVO > PAGOEFECTIVOSOLES' },
    { name: 'interbank', id: 3, img: 'assets/images/logo-interbank.svg', paso1: 'Select the option Payment to Institutions or Company > Company PAGOEFECTIVO > Service PAGOEFECTIVO' },
    { name: 'scotiabank', id: 4, img: 'assets/images/logo-scotiabank.svg', paso1: 'Select the option Payments > Other Institutions> Others > Search by Company / Service: PAGOEFECTIVO > Select: PAGOEFECTIVO SOLES' },
    { name: 'banbif', id: 5, img: 'assets/images/logo-banbif.svg', paso1: 'Select the option Payment of Services > Search by Company and type EFFECTIVE PAYMENT > Select the company PAGOEFECTIVO' }
]

const agentes = [
    { name: 'bcp', id: 1, att1: '(*)',img: 'assets/images/logo-bcp.svg', info1: 'BCP Agents: Provide the company code 02186', att2: '(*)',info2: 'BCP agencies: Additional cost: S / 1.00' },
    { name: 'bbva', id: 2,  att1: '',img: 'assets/images/logo-bbva.svg', info1: '', att2: '',info2: '' },
    { name: 'interbank', id: 3,att1: '(*)', img: 'assets/images/logo-interbank.svg', info1: 'Interbank Agents: Provides company code 2735001', att2: '(*)',info2: 'Interbank Market Agencies: Additional cost: S / 2.00' },
    { name: 'banbif', id: 4, att1: '', img: 'assets/images/logo-banbif.svg', info1: '',att2: '', info2: '' },
    { name: 'fullcarga', id: 5,att1: '(*)', img: 'assets/images/logo-fullcarga.svg',info1: 'You can find FullCarga in geocery stores, farmacies, internet cafés and parlors',att2: '',info2: '' },
    { name: 'scotiabank', id: 6,  att1: '',img: 'assets/images/logo-scotiabank.svg', info1: '', att2: '', info2: '' },
    { name: 'westerUnion', id: 7, att1: '', img: 'assets/images/logo-westerUnion.svg', info1: '', att2: '', info2: '' },
    { name: 'kasnet', id: 8, att1: '', img: 'assets/images/logo-kasnet.svg', info1: '', att2: '', info2: '' }
]
  

    const arrayPasos = bancos.map(function(obj){ 

        $('img').click(function(){
            const $img = $(this);
            if ($img.attr('alt') == obj.name){
                $('.datos').remove()
                $('.pasos').append( `<p class='datos text-secondary'> <img src="assets/images/one.svg" alt="Number One" class="numbers"> ${obj.paso1}</p> <p class='datos text-secondary'> <img src="assets/images/two.svg" alt="Number Two" class="numbers text-secondary"> Enter your CIP code:9125682 and folow the instructions</p> ` 
                )
            }              
          });       
     });
    
     const arrayInfo = agentes.map(function(obj){ 

        $('img').click(function(){
            const $img = $(this);
            if ($img.attr('alt') == obj.name){
                $('.informacion').remove()
                $('.info').html('');
                const insert = ( `<p class="informacion col-md col-12 text-secondary"><span class="c-orange">${obj.att1}</span> ${obj.info1}</p> <p class="informacion col-md col-12 pay-cash text-secondary"><span class="c-orange">${obj.att2}</span> ${ obj.info2}</p>`)
                $('.info').append(insert);
            }              
          });       
     });
    


