
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../FarmerWelcome.css";

function FarmerWelcome() {
  const [prodArr, setProdArr] = useState([]);
  const farmerId = sessionStorage.getItem("authenticatedUser");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:9090/farmer/${farmerId}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProdArr(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [farmerId]);

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:9090/farmer/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Update the product list by filtering out the deleted product
      setProdArr(prodArr.filter((product) => product.id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link to="/Farmer">
        <button type="button" className="btn btn-success1">
          Add Product
        </button>
      </Link>
      <br />
      <Link to="/FarmerviewProduct">
        <button type="button" className="btn btn-success2">
          View All Products
        </button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {prodArr.map((ProdArr) => (
            <tr key={ProdArr.id}>
      
              <td>{ProdArr.name}</td>
              <td>{ProdArr.description}</td>
              <td>{ProdArr.price_per_unit}</td>
              <td>{ProdArr.totalUnits}</td>
              <td>
                 <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(ProdArr.id)}
                >
                  Delete
                </button>
                <Link to={`/updateProduct/${ProdArr.id}`}>
                  <button type="button" className="btn btn-info">
                    Update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FarmerWelcome;
