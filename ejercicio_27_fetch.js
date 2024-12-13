const URL = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/gamecovers.json';


function processData(data) {//data (en este caso) es un array
    //** FILTER */

    /*
    data.forEach(consola => {
        console.log(consola.name);
    });
    */
    /*
     const consolasVerticales =
         data.filter(consola => {
             return consola.orientation === 'portrait';
         });
 
     consolasVerticales.forEach(consola => {
         console.log(consola.name);
     });
     */

     /*
    const consolasNintendo = data.filter(consola => {
        return consola.name.toUpperCase().includes("NINTENDO");
    });
    consolasNintendo.forEach(consola => {
        console.log(consola.name);
    });
    */

    /*
    data.filter(consola => consola.name.toUpperCase().includes("NINTENDO")).
        forEach(element => console.log(element.name));
    */

    /** MAP */
    const consolas = data.map(consola=>{
        const sql = `insert into T_CONSOLAS set (name, value, orientation) values ('${consola.name}','${consola.value}','${consola.orientation}')`
        return sql;
    });
    console.log(consolas);

}

function doRequest(url) {
    fetch(url)
        .then((response) => {
            //if (!response.ok) {
            if (response.status != 200) {//200 es OK
                //console.error(response.status)
                throw new Error("Network response was not ok");
            }
            //return response.text();//Si estamos obteniendo texto
            return response.json();//Si estamos obteniendo json
        })
        .then((data) => {
            //En este punto es donde tenemos los datos que nos proporciona el servidor
            processData(data);
        })
        .catch((error) => console.error("Fetch error:", error));
}

doRequest(URL);