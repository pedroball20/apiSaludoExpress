const getUserData = async (userId) => {
  try {
    const user = await getUserFromDatabase(userId); 
    console.log("Usuario:", user);
  } catch (err) {
    console.error("Error al obtener los datos del usuario:", err);
  }
};
