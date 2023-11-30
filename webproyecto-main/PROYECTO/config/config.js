let dbConfig = {
    url : function(){
        // Asegúrate de reemplazar 'tu_contraseña' con tu contraseña real y 'tu_base_de_datos' con el nombre real de tu base de datos
        return `mongodb+srv://admin:pabs1234@myapp.hl9htyx.mongodb.net/`
    },
    jwtSecret: 'sPalabraSupersegura123'
}

module.exports = dbConfig;
