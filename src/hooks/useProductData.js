import { useState, useEffect } from 'react';

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Conversion rate from USD to INR (you can update this with current rates)
  const USD_TO_INR = 83.0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const platforms = ['AMAZON', 'FLIPKART', 'EBAY', 'SHOPCLUES'];
        const allProducts = [];

        for (const platform of platforms) {
          const response = await fetch(`/src/data/${platform}.json`);
          const data = await response.json();
          allProducts.push(...data);
        }

        // Group products by name
        const groupedProducts = allProducts.reduce((acc, product) => {
          const key = product.name.toLowerCase();
          if (!acc[key]) {
            acc[key] = {
              name: product.name,
              image: product.image || '/placeholder-image.jpg', // Use placeholder if no image provided
              description: product.description || '', // Include description
              prices: [],
              lowestPrice: Infinity,
              lowestPricePlatform: '',
              availability: {}
            };
          }
          
          if (product.availability) {
            // Convert price to INR
            const priceInINR = product.price * USD_TO_INR;
            acc[key].prices.push({
              price: priceInINR,
              platform: product.platform
            });
            
            if (priceInINR < acc[key].lowestPrice) {
              acc[key].lowestPrice = priceInINR;
              acc[key].lowestPricePlatform = product.platform;
            }
            
            acc[key].availability[product.platform] = true;
          }
          
          return acc;
        }, {});

        // Convert to array and sort by lowest price (best price first)
        const sortedProducts = Object.values(groupedProducts)
          .sort((a, b) => {
            // First sort by lowest price
            const priceDiff = a.lowestPrice - b.lowestPrice;
            if (priceDiff !== 0) return priceDiff;
            
            // If prices are equal, sort by name
            return a.name.localeCompare(b.name);
          });

        setProducts(sortedProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};

export default useProductData; 