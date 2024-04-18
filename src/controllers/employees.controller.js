import { connection } from "../db.js";

// extraigo las funciones con las que manejare la logica para las rutas del servicio

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM employees");
    res.status(200).send(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    // se busca en los params ya que la peticion recibe por los query params el id a consultar
    const { id } = req.params;
    const [result] = await connection.query(
      "SELECT * FROM employees WHERE id = ?",
      [id]
    );
    console.log(result.length);
    if (result.length === 0)
      res
        .status(404)
        .json({ message: "No existe ningun usuario con el id: " + id });
    else res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const postEmployee = async (req, res) => {
  try {
    // se busca en el body porque las peticiones post reciben informacion en el cuerpo de la peticion http
    const { nombre, salary } = req.body;
    const [result] = await connection.query(
      "INSERT INTO employees (nombre, salary) VALUES (?, ?)",
      [nombre, salary]
    );
    res.status(200).send({
      id: result.insertId,
      nombre,
      salary,
    });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

// put seria lo mismo que actualizar
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    const [result] = await connection.query(
      "UPDATE employees SET nombre = IFNULL(?, nombre), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result?.affectedRows === 1) {
      const employeeUpdated = await connection.query(
        "SELECT * FROM employees WHERE id = ?",
        [id]
      );

      res.status(204).json({
        employee: employeeUpdated[0],
        message: "employee updated",
      });
    } else {
      res.status(404).json({ message: "No se pudo actualizar al empleado" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteEmployee = async (req, res) => {
  // manejo de errores encapsulando el bloque del codigo dentro de un try catch
  try {
    // aqui recibimos el id por parametros pero tambien podriamos recibirlo por el body de la peticion http
    const { id } = req.params;
    const [result] = await connection.query(
      "SELECT * FROM employees WHERE id = ?",
      [id]
    );

    if (result[0]?.id == id) {
      connection.query("DELETE FROM employees WHERE id = ?", [id]);
      res.status(204).json({
        id,
        result,
        message: "Eliminado exitosamente.",
      });
    } else {
      res.status(404).json({
        message: "No existe un registro actualmente en la Bd con id: " + id,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
