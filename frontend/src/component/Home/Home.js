import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  
  const dispatch = useDispatch();
  // 2- render the data in frontend using useSelector from store
  const { loading, error, products } = useSelector((state) => state.products);

  // 1- pull the data from backend to store console
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
          {products &&                          /*getting the product from apis*/
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

// const Home = ()=>{

//   const dispatch = useDispatch();
//     useEffect(() => {
 
//     dispatch(getProduct());
//   }, [dispatch]);
//   return(
//     <Fragment>
//       <MetaData title=" Sanny"/>
//       <div  className="banner">
//         <p>Welcome to Ecommerce</p>
//         <h1>FIND AMAZING PRODUCTS BELOW</h1>
//         <a href="#container">
//             <button> Scroll <CgMouse />
//             </button>
//         </a>
//       </div>
//       <h2 className="homeHeading">Featured Products</h2>
//       <div className="container" id="container">
//         <ProductCard product={product}/>
//         <ProductCard product={product}/>
//         <ProductCard product={product}/>
//         <ProductCard product={product}/>
//         <ProductCard product={product}/>
//         <ProductCard product={product}/>
//         <ProductCard product={product}/>
//         <ProductCard product={product}/>

//       </div>
//     </Fragment>
//   )
// }

export default Home;
