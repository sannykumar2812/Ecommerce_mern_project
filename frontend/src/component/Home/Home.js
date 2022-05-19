import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
// import MetaData from "../layout/MetaData";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";

// const Home = () => {
//   const alert = useAlert();
//   const dispatch = useDispatch();
//   const { loading, error, products } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//     dispatch(getProduct());
//   }, [dispatch, error, alert]);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title="ECOMMERCE" />

//           <div className="banner">
//             <p>Welcome to Ecommerce</p>
//             <h1>FIND AMAZING PRODUCTS BELOW</h1>

//             <a href="#container">
//               <button>
//                 Scroll <CgMouse />
//               </button>
//             </a>
//           </div>

//           <h2 className="homeHeading">Featured Products</h2>

//           <div className="container" id="container">
//             {products &&
//               products.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };
const product={
  name:"Blue Tshirts",
  images:[{url:"data:image/jpeg;base64,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"}],
  price:"43000",
  _id: "sanny"

}
const Home = ()=>{
  return(
    <Fragment>
      <div  className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
            <button> Scroll <CgMouse />
            </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>

      </div>
    </Fragment>
  )
}

export default Home;
