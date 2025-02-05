"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProductsQuery } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Heart, Eye } from "lucide-react";

const SHOES: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProductsQuery);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToWishlist = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    console.log("Adding product to wishlist:", product);
  };

  const isProductInWishlist = (productId: string): boolean => {
    // Replace with your actual wishlist checking logic
    return false;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="text-center">
            <p className="font-semibold">{product.name}</p>
            <Link href={`/product/${product.slug.current}`} legacyBehavior>
              <a>
                <div className="relative aspect-square bg-slate-50 rounded-[4px] sm:p-4">
                  {product.tags?.includes("new") && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                      <span className="bg-[#00FF66] text-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-[4px]">
                        NEW
                      </span>
                    </div>
                  )}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white ${
                        isProductInWishlist(product._id) ? "text-red-500" : ""
                      }`}
                      onClick={(e) => handleAddToWishlist(e, product)}
                    >
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white"
                    >
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={`Image of ${product.name}`}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  )}
                </div>
                <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-sm font-medium">${product.price}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHOES;
