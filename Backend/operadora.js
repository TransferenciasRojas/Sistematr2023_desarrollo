
/**  getOperadora: consulta operadoras
 * 
 * RETURN 
 * 
 * resul = {
 * [
 * id,
 * operadora,
 * status
 * ]}
*/

function getOperadora() {
    let resultado = Bakendtr.getOperadora();
   
   return resultado;
  }

/** insertOperadora: 
 * 
 * REQUEST 
 * datos {
 * operadora: string
 * user: string (email)
 * }
 */
  function insertOperadora(datos) {
    let resultado = Bakendtr.insertOperadora(datos);
   
   return resultado;
  }

  /** searchOperadora: buscador por idOperadora
 * 
 * REQUEST
 * idOperadora: Number
 * 
 * RETURN 
 * TRUE 
 * 
 * resul = {
 * status: true,
 * idOperadora: Number,
 * operadora: String,
 * statusOperadora: Boolean
 * }
 * 
 * FALSE
 * 
 * resul = {
 * status: false,
 * mensaje: "Dato no encontrado",
 * idOperadora: Number
 * }
 */
   function searchOperadora(idOperadora) {
    let resultado = Bakendtr.searchOperadora(idOperadora);
   
   return resultado;
  }

  /** updateOperadora
   * 
   * REQUEST 
   * 
   * datos = {
   * idOperadora: Number,
   * operadora: String,
   * user: string (email),
   * status: true or false
   * }
   */
  function updateOperadora(datos) {
    let resultado = Bakendtr.updateOperadora(datos);
   
   return resultado;
  }

    /** deleteOperadora
   * 
   * REQUEST 
   * 
   * 
   * idOperadora: Number
   * 
   */
  function deleteOperadora(idOperadora) {
    let resultado = Bakendtr.deleteOperadora(idOperadora);
   
   return resultado;
  }