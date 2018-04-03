const bancos = [{name: 'bcp', id: 1, img: 'assets/images/logo-bcp.svg', paso1: 'Selecciona la opción Pago de Servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES' },
    { name: 'bbva', id: 2, img: 'assets/images/logo-bbva.svg', paso1: 'Selecciona la opción Pago de Servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES' },
    { name: 'interbank', id: 3, img: 'assets/images/logo-interbank.svg', paso1: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa PAGOEFECTIVO > Servicio PAGO EFECTIVO' },
    { name: 'scotiabank', id: 4, img: 'assets/images/logo-scotiabank.svg', paso1: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES' },
    { name: 'banbif', id: 5, img: 'assets/images/logo-banbif.svg', paso1: 'Selecciona la opción Pago de Servicios > Busca por Empresa y escribe PAGO EFECTIVO > Seleciona la empresa PAGO EFECTIVO' }
]

const agentes = [
    { name: 'bcp', id: 1, img: 'assets/images/logo-bcp.svg', att1: '(*)', info1: 'Agentes BCP: Brinda el código de empresa 02186', att2: '(*)', info2: 'Agencias BCP: Costo adicional: S/1.00' },
    { name: 'bbva', id: 2, img: 'assets/images/logo-bbva.svg', att1: '', info1: '', att2: '', info2: '' },
    { name: 'interbank', id: 3, img: 'assets/images/logo-interbank.svg', att1: '(*)', info1: 'Agentes Interbank: Brinda el código de empresa 2735001', att2: '(*)',info2: 'Agencias Market de Interbank: Costo adicional: S/2.00' },
    { name: 'banbif', id: 4, img: 'assets/images/logo-banbif.svg', att1: '', info1: '', att2: '', info2: '' },
    { name: 'fullcarga', id: 5, img: 'assets/images/logo-fullcarga.svg', att1: '(*)', info1: 'Encuentra a Full Carga en Bodegas, Farmacias, cabinas de internet y Locutorios', att2: '', info2: '' },
    { name: 'scotiabank', id: 6, img: 'assets/images/logo-scotiabank.svg', att1: '', info1: '', att2: '', info2: '' },
    { name: 'westerUnion', id: 7, img: 'assets/images/logo-westerUnion.svg', att1: '', info1: '', att2: '', info2: '' },
    { name: 'kasnet', id: 8, img: 'assets/images/logo-kasnet.svg', att1: '', info1: '', att2: '', info2: '' }
]
  

    const arrayPasos = bancos.map(function(obj){ 

        $('img').click(function(){
            const $img = $(this);
            if ($img.attr('alt') == obj.name){
                $('.datos').remove();
                $('.pasos').append( `<p class=datos><img src="assets/images/one.svg" alt="Number One" class="numbers"> Ingresa tu codigo CIP:9125682 y sigue los pasos</p> <p class=datos> <img src="assets/images/two.svg" alt="Number Two" class="numbers"> ${obj.paso1}</p>`);
            }              
          });       
     });
    
     const arrayInfo = agentes.map(function(obj){ 

        $('img').click(function(){
            const $img = $(this);
            if ($img.attr('alt') == obj.name){
                $('.informacion').remove()
                $('.info').html('');
                const insert = ( `<p class="informacion col"><span class="c-orange">${obj.att1}</span> ${obj.info1}</p> <p class="informacion col text-right"><span class="c-orange">${obj.att2}</span> ${ obj.info2}</p>`)
                $('.info').append(insert);
              }              
          });       
     });
    


