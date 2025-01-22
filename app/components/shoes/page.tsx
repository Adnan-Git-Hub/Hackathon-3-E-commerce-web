"use client"

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProductsQuery } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const SHOES = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
    const fetchedproduct : Product[] = await client.fetch (allProductsQuery);
    setProduct(fetchedproduct)
    }
    fetchproduct()
  } , []);
  

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {product.map((product) => (
        <div key={product._id}>
          {product.name}
          {product.image && (
            <Image
              src={ urlFor(product.image).url()}
              alt="image"
              width = {200}
              height = {200}
              />
          )

         } 
        </div>
      )
      )}
    </div>
  );
};
export default SHOES;
