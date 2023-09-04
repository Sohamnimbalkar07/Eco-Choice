import React, { useEffect, useState } from "react";

export default function FarmerviewProduct() {
  const [data, setData] = useState([]);
  const farmerId = sessionStorage.getItem("authenticatedUser");

  useEffect(() => {
    fetch(`http://localhost:9090/farmer/${farmerId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <div >
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v) => (
                <tr key={v.id}>
                  <td>
                    <img
                      src={`data:image/png;base64,${v.picture}`}
                      alt="Product"
                      className="img-fluid product-image"
                    />
                  </td>
                  <td>
                    <h5 className="product-title">{v.name}</h5>
                    <p className="product-description">{v.description}</p>
                  </td>
                  <td>₹{v.price_per_unit}.00</td>
                  <td>{v.totalUnits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
