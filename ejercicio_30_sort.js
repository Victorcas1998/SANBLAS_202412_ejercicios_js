const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const numeros = [8, 10, -3, 2, 200, 4];

numeros.sort();
console.log(numeros);//[-3, 10, 2, 200, 4, 8]

dias.sort();
console.log(dias);//['Domingo', 'Jueves', 'Lunes', 'Martes', 'Miércoles', 'Sábado', 'Viernes'];

numeros.sort((a,b)=> {
    if (a<b) return -1;
    if (a>b) return 1;
    return 0;
})
console.log(numeros);

const coche1 = {
    nombre : 'Seat 600',
    capacidad : 4,
    velocidad : 98
}

const coche2 = {
    nombre : 'Ferrari F40',
    capacidad : 2,
    velocidad : 280
}

const coche3 = {
    nombre : 'Skoda Fabia',
    capacidad : 5,
    velocidad : 145
}

let coches = [coche1, coche2, coche3];
//Extendido
/*
coches.sort((c1, c2)=>{
    return c1.velocidad - c2.velocidad;
}).reverse();
coches.forEach(c=>{
    console.log(c.nombre);
});
*/
coches.sort((c1,c2)=>c1.velocidad - c2.velocidad).reverse().forEach(coche => {
    console.log(coche);
});