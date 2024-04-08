import React, { useEffect } from "react";
import db from "../firebaseConfig";
import { addMensProduct, addWomensProduct } from "../ReduxStore/productSlice";
import { getDocs, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
const FetchDataFromFireStore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      // Check if men products are already loaded
      const querySnapshotMen = await getDocs(collection(db, "maleProduct"));
      const fetchedDataMen = querySnapshotMen.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //   console.log(fetchedDataMen);
      dispatch(addMensProduct(fetchedDataMen));

      // Check if women products are already loaded
      const querySnapshotWomen = await getDocs(collection(db, "FemaleProduct"));
      const fetchedDataWomen = querySnapshotWomen.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("fetching data done");

      dispatch(addWomensProduct(fetchedDataWomen));
    };

    fetchDataFromFirestore();
  }, []);

  return <div></div>;
};

export default FetchDataFromFireStore;
