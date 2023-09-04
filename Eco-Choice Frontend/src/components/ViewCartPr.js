import React from 'react';
import { useEffect,useState } from 'react';


export default function ViewOrder() {
const customer_id=sessionStorage.getItem('authenticatedUser');
const [data, setData] = useState([]);
console.log(customer_id);

useEffect(() => {
    fetch(`http://localhost:9090/customer/${customer_id}`)
      .then(resp => resp.json())
      .then((obj) => {
        if (obj) {
          setData(obj); // Set the fetched data to the state
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [customer_id,data]);
  
  const calculateTotalPrice = () => {
    let total = 0;
    data.forEach(v => {
     // x=v.product.price_per_unit
      total += v.product.price_per_unit * v.quantity;
    });
    return total;
  }
  return (
    <div  className="container-fluid mt-5 col-8 border bg-white ">
    <h2 className="text-center"><b>Cart Details</b></h2>
    <table className="table table-striped">
        <tr>
             <th className="text-center">Productname</th>
             <th className="text-center">Description</th>
             <th className="text-center">Qunatity</th>
             <th className="text-center">PricePerProduct</th>
        </tr>
        {
                data.map((v)=> {
                    return (
                        <tr>
                             <td className="text-center">
                                {
                                v.product.name
                            }</td>
                            <td className="text-center">
                                {
                                v.product.description
                            }</td>
                            <td className="text-center">
                                {
                                v.quantity
                            }</td>
                             <td>₹{v.product.price_per_unit}.00</td>
                        </tr>   
                    )
                })
   
            } 
      </table>
      <div className="mt-3">
      {data.length > 0 && (
        <div className="mt-3">
          <strong>Total Price: ₹{calculateTotalPrice()}</strong>
        </div>
      )}
    </div>
    </div>
  );
}

	




