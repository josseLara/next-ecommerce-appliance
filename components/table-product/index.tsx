import React from "react";

function TableProduct() {
     return (
          
          <table className="table-product">
               <caption>Caracteristicas del producto</caption>
               <tbody>
                    <tr>
                         <th>Marca</th>
                         <td>Blade</td>
                    </tr>
                    <tr className="highlight">
                         <th>Marca</th>
                         <td>ZTE</td>
                    </tr>
                    <tr>
                         <th>Modelo</th>
                         <td>V40 Design</td>
                    </tr>
                    <tr className="highlight">
                         <th>Modelo</th>
                         <td>V40 Design</td>
                    </tr>
               </tbody>
          </table>
     );
}

export default TableProduct;