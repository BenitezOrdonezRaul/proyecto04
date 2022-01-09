db.ventas.insertOne (

    {
        tipoproducto: "Camiseta",
        _id: 1,
        nombre: "Camiseta Logo The Beatles",
        artista: "The Beatles",
        color: "Blanco",
        unidades: 1,
        pvp: 20.00,
        precio_coste: 12.00,
        cliente: "Jose Luis Garcia",
        vendedor: "Raúl",
        fecha_compra: new Date("2021-12-24T13:52:00Z")

    }

)

db.ventas.insertMany ( [

    {
        tipoproducto: "Sudadera",
        _id: 2,
        nombre: "Sudadera Logo The Beatles",
        artista: "The Beatles",
        color: "Negro",
        unidades: 1,
        pvp: 35.00,
        precio_coste: 22.00,
        cliente: "Fátima Lebrón",
        vendedor: "Raúl",
        fecha_compra: new Date("2021-12-24T12:30:00Z")

    },

    {tipoproducto: "Camiseta", _id: 3, nombre: "Camiseta AC/DC", artista: "AC/DC", color: "Negro", unidades: 2, pvp: 10.99, precio_coste: 5.95, cliente: "Marta Baena", vendedor: "Begoña", fecha_compra: new Date("2021-12-24T17:32:00Z")},
    {tipoproducto: "Camiseta", _id: 4, nombre: "Camiseta The Rolling Stones Classic Tongue", artista: "The Rolling Stones", color: "Blanco", unidades: 1, pvp: 15.05, precio_coste: 8.95, cliente: "Sergio Sánchez", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T11:22:00Z")},
    {tipoproducto: "Camiseta", _id: 5, nombre: "Camiseta Guns N' Roses Design: Appetite for Destruction", artista: "Guns N' Roses",  color: "Negro", unidades: 1, pvp: 17.05, precio_coste: 10.95, cliente: "Sergio Sánchez", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T11:01:00Z")},
    {tipoproducto: "Camiseta", _id: 6, nombre: "Camiseta The Beatles Abbey Road", artista: "The Beatles", color: "Negro", unidades: 2, pvp: 25.00, precio_coste: 19.99, cliente: "Adrián Pineda", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T10:05:00Z")},
    {tipoproducto: "Camiseta", _id: 7, nombre: "Camiseta Beatles Hamburg 1962 Poster", artista: "The Beatles", color: "Negro", unidades: 1, pvp: 20.00, precio_coste: 15.95, cliente: "Ana Bizcocho", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T14:00:00Z")},
    {tipoproducto: "Sudadera", _id: 8, nombre: "Sudadera AC/DC", artista: "AC/DC", color: "Negro", unidades: 1, pvp: 30.99, precio_coste: 25.95, cliente: "Marta Baena", vendedor: "Begoña", fecha_compra: new Date("2021-12-24T18:04:00Z")},
    {tipoproducto: "Sudadera", _id: 9, nombre: "Sudadera The Rolling Stones Classic Tongue", artista: "The Rolling Stones", color: "Blanco", unidades: 2, pvp: 35.05, precio_coste: 27.99, cliente: "Maria Bizcocho", vendedor: "Begoña", fecha_compra: new Date("2021-12-24T17:54:00Z")},
    {tipoproducto: "Sudadera", _id: 10, nombre: "Sudadera Guns N' Roses Design: Top Hat", artista: "Guns N' Roses", color: "Negro", unidades: 1, pvp: 37.95, precio_coste: 31.95, cliente: "Esperanza Nuñez", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T10:24:00Z")},
    {tipoproducto: "Sudadera", _id: 11, nombre: "Sudadera The Beatles Abbey Road", artista: "The Beatles", color: "Blanco", unidades: 1, pvp: 37.95, precio_coste: 30.95, cliente: "Carmen Saborido", vendedor: "Begoña", fecha_compra: new Date("2021-00-00T19:03:00Z")},
    {tipoproducto: "Chapa", _id: 12, nombre: "Chapita Guns N' Roses Design: Lyrics & Logos", artista: "Guns N' Roses", color: "Negro", unidades: 5, pvp: 3.00, precio_coste: 0.95, cliente: "Sergio Sánchez", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T10:17:00Z")},
    {tipoproducto: "Chapa", _id: 13, nombre: "Chapita John Lennon 440459", artista: "John Lennon", color: "Blanco", unidades: 3, pvp: 3.00, precio_coste: 0.95, cliente: "Fátima Lebrón", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T11:47:00Z")},
    {tipoproducto: "Chapa", _id: 14, nombre: "Set Chapitas The Rolling Stones", artista: "The Rolling Stones", color: "Multicolor", unidades: 2, pvp: 10.00, precio_coste: 3.95, cliente: "Rocío Acebedo", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T10:50:00Z")},
    {tipoproducto: "Chapa", _id: 15, nombre: "Set Chapitas The Beatles", artista: "The Beatles", color: "Multicolor", unidades: 1, pvp: 10.00, precio_coste: 3.95, cliente: "Marta Baena", vendedor: "Begoña", fecha_compra: new Date("2021-12-24T17:33:00Z")},
    {tipoproducto: "Llavero", _id: 16, nombre: "Llavero Pink Floyd The Dark Side of The Side", artista: "Pink Floyd", color: "Negro", unidades: 2, pvp: 7.00, precio_coste: 2.95, cliente: "Gonzalo García", vendedor: "Begoña", fecha_compra: new Date("2021-12-24T18:09:00Z")},
    {tipoproducto: "Llavero", _id: 17, nombre: "Llavero AD/DC Devil Angus", artista: "AD/DC", color: "Negro", unidades: 1, pvp: 5.00, precio_coste: 2.99, cliente: "Ana Bizcocho", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T13:55:00Z")},
    {tipoproducto: "Llavero", _id: 18, nombre: "Llavero John Lennon 345976", artista: "John Lennon", color: "Verde", unidades: 3, pvp: 8.00, precio_coste: 4.05, cliente: "Alejandra Pineda", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T11:21:00Z")},
    {tipoproducto: "Taza", _id: 19, nombre: "Taza Pink Floyd", artista: "Pink Floyd", color: "Negro", unidades: 1, pvp: 15.00, precio_coste: 9.99, cliente: "Alejandro Fernández", vendedor: "Begoña", fecha_compra: new Date("2021-12-24T20:05:00Z")},
    {tipoproducto: "Taza", _id: 20, nombre: "Taza John Lennon War Is Over", artista: "John Lennon", color: "Blanco", unidades: 2, pvp: 12.00, precio_coste: 10.99, cliente: "Carmen Saborido", vendedor: "Begoña", fecha_compra: new Date("2021-12-24T20:30:00Z")},
    {tipoproducto: "Taza", _id: 21, nombre: "Taza The Black Eyed Peas", artista: "The Black Eyed Peas", color: "Blanco", unidades: 1, pvp: 7.00, precio_coste: 3.95, cliente: "Esther Torres", vendedor: "Raúl", fecha_compra: new Date("2021-12-24T10:34:00Z")}

])