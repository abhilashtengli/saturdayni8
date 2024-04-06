import React, { useEffect, useState } from "react";
import db from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addMensProduct, addWomensProduct } from "../ReduxStore/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const womendataProduct = useSelector((state) => state.product.womensProduct);
  const menDataProduct = useSelector((state) => state.product.mensProduct);
  const gender = useSelector((state) => state.user.gender);
  const [producttoShow, setProductToShow] = useState([]);
  const [selectedType, setSelectedType] = useState([]);

  // Fetch data from Firestore only if it's not already in Redux store
  useEffect(() => {
    if (menDataProduct.length === 0) {
      const fetchMensDataFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "maleProduct"));
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });
        dispatch(addMensProduct(fetchedData));
      };
      fetchMensDataFromFirestore();
    }

    if (womendataProduct.length === 0) {
      const fetchWomensDataFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "FemaleProduct"));
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });
        dispatch(addWomensProduct(fetchedData));
      };
      fetchWomensDataFromFirestore();
    }
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
      Product
      <div className="flex flex-wrap gap-x-4 justify-center gap-y-5">
        {producttoShow.map((item) => (
          <div key={item.id} className="border border-black">
            <img className="w-44" alt={item.name} src={item.imageURL} />
            {item.name} - {item.price}
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
