import React, { useEffect, useState } from "react";
import db from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const Product = () => {
  const [data, setData] = useState([]);

  const fetchDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "maleProduct"));
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      fetchedData.push({ id: doc.id, ...doc.data() });
    });
    setData(fetchedData);
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  return (
    <>
      Product
      <div className="flex flex-wrap gap-x-4 justify-center gap-y-5">
        {data.map((item) => (
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
