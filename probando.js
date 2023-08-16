const locales =[
    {
        id:'coyote.nqn',
        nombre:'Coyote',
        categoria:'Comida Rapida',
        direccion:'almirante brown 1231',
        img:'https://picsum.photos/200'
    },
    {
        id:'francisfafafa',
        nombre:'La Fafafa de Francis',
        categoria:'agricultura',
        direccion:'roca 786',
        img:'https://picsum.photos/200'
    }]
const input = "Coyote"
const busqueda= (locales, input) =>{ 

    const coincidencia= ""
    locales.forEach( (local)=> { 
        if (input === local.nombre){
            console.log(local)

        }
    } )


 
}
busqueda(locales, input)

//estoy cansada, quiero que esto concluya en algo, quiero ir a casa 












//espero no extrañar la escuela que es una poronga
