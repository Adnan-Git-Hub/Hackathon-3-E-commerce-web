"use client"

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProductsQuery } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// const SHOES = () => {
//   const [product, setProduct] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchproduct() {
//     const fetchedproduct : Product[] = await client.fetch (allProductsQuery);
//     setProduct(fetchedproduct)
//     }
//     fetchproduct()
//   } , []);
  

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       {product.map((product) => (
//         <div key={product._id}>
//           {product.name}
//           {product.image && (
//             <Image
//               src={ urlFor(product.image).url()}
//               alt="image"
//               width = {200}
//               height = {200}
//               />
//           )

//          } 
//         </div>
//       )
//       )}
//     </div>
//   );
// };
// export default SHOES;






// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { client, urlFor } from "../yourSanityClient"; // Update this import based on your project
// import { allProductsQuery } from "../queries"; // Update this based on your project
// import { Product } from "../types"; // Update this based on your project

const SHOES = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProductsQuery);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {product.map((product) => (
      <div key={product._id} className="text-center">
        <p className="font-semibold">{product.name}</p>
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={`Image of ${product.name}`}
            width={200}
            height={200}
            className="rounded-lg"
          />
        )}
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-sm font-medium">{product.price}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default SHOES;
