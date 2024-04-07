import React, { useEffect, useState } from "react";
import db from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addMensProduct, addWomensProduct } from "../ReduxStore/productSlice";

const Product = ({ param, limit }) => {
  const dispatch = useDispatch();
  const womendataProduct = useSelector((state) => state.product.womensProduct);
  const menDataProduct = useSelector((state) => state.product.mensProduct);
  const gender = useSelector((state) => state.user.gender);

  const [producttoShow, setProductToShow] = useState([]);

  // Fetch data from Firestore only if it's not already in Redux store
  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      // Check if men products are already loaded
      if (menDataProduct.length === 0) {
        const querySnapshotMen = await getDocs(collection(db, "maleProduct"));
        const fetchedDataMen = querySnapshotMen.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(addMensProduct(fetchedDataMen));
      }

      // Check if women products are already loaded
      if (womendataProduct.length === 0) {
        const querySnapshotWomen = await getDocs(
          collection(db, "FemaleProduct")
        );
        const fetchedDataWomen = querySnapshotWomen.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(addWomensProduct(fetchedDataWomen));
      }
    };

    fetchDataFromFirestore();
  }, [dispatch, menDataProduct.length, womendataProduct.length]);

  // Set productToShow based on gender
  useEffect(() => {
    if (gender === "male") {
      setProductToShow(menDataProduct);
    } else {
      setProductToShow(womendataProduct);
    }
  }, [gender, menDataProduct, womendataProduct]);

  return (
    <>
      {param !== "" && producttoShow ? (
        <div className="flex flex-wrap gap-x-4 justify-center gap-y-5">
          {producttoShow.map((item) =>
            item.category === param?.toLowerCase() ||
            item.name?.toLowerCase().includes(param?.toLowerCase()) ? (
              <div key={item.id} className="border cursor-pointer border-black">
                <img className="w-44" alt={item.name} src={item.imageURL} />
                {item.name} - {item.price}
              </div>
            ) : (
              ""
            )
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-x-4 justify-center gap-y-5">
          {producttoShow.slice(0, limit).map((item) => (
            <div key={item.id} className="border cursor-pointer border-black">
              <img className="w-44" alt={item.name} src={item.imageURL} />
              {item.name} - {item.price}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
