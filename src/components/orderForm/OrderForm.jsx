import { useState } from "react";

const OrderForm = ({onChange}) => {

   return <form>

       <div>
           <label htmlFor="name">Nombre</label>
           <input type="text" id="name" name="name" onChange={onChange} />
       </div>
       <div>
            <label htmlFor="phone">Teléfono</label>
            <input type="number" id="phone" name="phone" onChange={onChange} />
       </div>
       <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" onChange={onChange} />
       </div>
   </form>
}

export default OrderForm;