
/*
                CONSULTAS
                                        */




// Cantidad total de artículos vendidos este día.

db.ventas.aggregate([

    {
        $group: {_id: "$vendedor", articulosVendidos: {$sum: "$unidades"} }
    }

]).pretty()




// Cantidad total de artículos vendidos por categoria.

db.ventas.aggregate([

    {
        $group: {_id: "$tipoproducto", articulosVendidos: {$sum: "$unidades"}}
    }

])




// Total coste de los articulos vendidos.

db.ventas.aggregate([

    {
        $group: {_id: "$vendedor", cantidadTotal: {$sum: "$precio_coste"} }
    }

]).pretty()




// Total dinero que hemos ganado hoy.

db.ventas.aggregate([

    {
        $group: {_id: "$vendedor", cantidadTotal: {$sum: "$pvp"} }
    }

]).pretty()




// Beneficios para la empresa por parte de cada vendedor.

db.ventas.aggregate([

    {
        $group: {_id: "$vendedor", beneficioTotal: { $subtract: [ { $add: [ "$pvp" ] }, "$precio_coste" ] } }
    }

]).pretty()




// Máxima y mínima compra que se haya hecho hoy de cada producto.

db.ventas.aggregate([

    {
        $group: {_id: "$tipoproducto", ventaMáxima: {$max: "$pvp"}, ventaMínima: {$min: "$pvp"} }
    }

]).pretty()




// Dinero total de cada producto vendido.

db.ventas.aggregate([
    
    {
        $group: {_id: "$tipoproducto", dineroTotalProducto: {$sum: {$multiply: ["$pvp", "$unidades"] } } } 
    }

]).pretty()




// Máximo número de objetos comprados por parte de cada cliente.

db.ventas.aggregate([

    {
        $group: {_id: "$cliente", maxCompra: {$sum: "$unidades"} }
    }

])




//Queremos saber el total de dinero y articulos vendidos que ha hecho el mejor vendedor, en este caso, Raúl.

db.ventas.aggregate([

    {
        $match: {vendedor: "Raúl"}
    },

    {
        $group: {_id: "$vendedor", beneficioTotal: { $subtract: [ { $add: [ "$pvp" ] }, "$precio_coste" ] }, articulosVendidos: {$sum: "$unidades"} }
    }

]).pretty()




// Artículos más vendidos.

db.ventas.aggregate([

    {
        $group: {_id: "$tipoproducto", ventas: {$sum: "$unidades"} }
    }

]).pretty()
