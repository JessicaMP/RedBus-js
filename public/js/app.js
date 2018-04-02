const bancos = [{ name: 'bcp', id: 1, img: 'assets/images/logo-bcp.svg', paso1: 'Selecciona la opción Pago de Servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES' },
    { name: 'bbva', id: 2, img: 'assets/images/logo-bbva.svg', paso1: 'Selecciona la opción Pago de Servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES' },
    { name: 'interbank', id: 3, img: 'assets/images/logo-interbank.svg', paso1: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa PAGOEFECTIVO > Servicio PAGO EFECTIVO' },
    { name: 'scotiabank', id: 4, img: 'assets/images/logo-scotiabank.svg', paso1: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES' },
    { name: 'banbif', id: 5, img: 'assets/images/logo-banbif.svg', paso1: 'Selecciona la opción Pago de Servicios > Busca por Empresa y escribe PAGO EFECTIVO > Seleciona la empresa PAGO EFECTIVO' }
    ]
  

    const arrayPasos = bancos.map(function(obj){ 

        $('img').click(function(){
            var $img = $(this);
            if ($img.attr('alt') == obj.name){
                $('.datos').remove()
                $('.pasos').append( `<p class=datos>Ingresa tu codigo CIP:9125682 y sigue los pasos</p> <p class=datos>${obj.paso1}</p>` )
            }              
          });       
     });
    


