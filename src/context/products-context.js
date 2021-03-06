import React, { useState } from "react";

const initialProducts = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

const ProductsContext = React.createContext({
  products: [],
  toggleFavorite: (productId) => {},
});

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState(initialProducts);

  const toggleFavorite = (productId) => {
    setProducts((currentProducts) => {
      const targetProductIndex = currentProducts.findIndex(
        (product) => product.id === productId
      );
      const newFavStatus = !currentProducts[targetProductIndex].isFavorite;
      const updatedProducts = [...currentProducts];
      updatedProducts[targetProductIndex] = {
        ...currentProducts[targetProductIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider value={{ products, toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
