import React, { useEffect, useState } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";

function ProductPage() {
  const[products,setproducts]=useState([])
  const[totalPages,settotalPages]=useState(1)
  const[sortBy,setsortBy]=useState("asc")
  const[limit,setlimit]=useState(5)
  const[page,setpage]=useState(1)
  const[error,seterror]=useState(false)
  
  useEffect(()=>{
    getProducts({page,limit,sortBy})
    .then(res=>{
      setproducts(res.data)
      settotalPages(res.totalPages)
    })
    .catch(err=>{
      console.log(err)
      seterror(true)
      
    })
  },[page,limit,sortBy])
  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button  data-testid="low-to-high" disabled={sortBy==="asc"} onClick={()=>setsortBy("asc")}>Sort low to high</button>
      <button data-testid="high-to-low" disabled={sortBy==="desc"} onClick={()=>setsortBy("desc")}>Sort high to low</button>
      <div>
        <label>Per page</label>
        <select value={limit} onChange={e=>Number(setlimit(e.target.value))} data-testid="limit-select">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <Pagination current={page} totalPages={totalPages} onChange={page=>setpage(page)}  />
      {/* map products */}
      <ProductList products={products} />
    </div>
  );
}


export default ProductPage;
