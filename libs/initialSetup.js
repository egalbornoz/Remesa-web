const Role = require('../models/role');
 const crearRoles = async () => {
    try {
        const countRoles = await Role.estimatedDocumentCount();
        if (countRoles > 0) return;

        const values = await Promise.all([
            new Role({ name: USER_ROLE }).save(),
            new Role({ name: ADMIN_ROLE }).save(),
            new Role({ name: VENTAS_ROLE }).save()
        ]);

    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    crearRoles,
}