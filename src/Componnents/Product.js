import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Product = ({ param, limit }) => {
  const womendataProduct = useSelector((state) => state.product.womensProduct);
  const menDataProduct = useSelector((state) => state.product.mensProduct);
  const gender = useSelector((state) => state.user.gender);

  const [producttoShow, setProductToShow] = useState([]);
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
