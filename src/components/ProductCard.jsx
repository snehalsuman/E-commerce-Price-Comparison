import React from 'react';

const ProductCard = ({ product }) => {
  const platforms = ['Amazon', 'Flipkart', 'eBay', 'ShopClues'];

  // Format price to Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Sort prices from lowest to highest
  const sortedPrices = [...product.prices].sort((a, b) => a.price - b.price);

  return (
    <div className="card animate-fade-in">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/placeholder-image.jpg'; // Fallback image if the main image fails to load
              }}
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{product.name}</h2>
          
          {product.description && (
            <div className="mb-4 p-4 bg-gray-50/50 rounded-lg">
              <p className="text-gray-700">{product.description}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Prices by Platform:</h3>
              <ul className="space-y-2">
                {sortedPrices.map((priceInfo, index) => (
                  <li key={index} className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100/50 transition-colors">
                    <span className="font-medium text-gray-600">{priceInfo.platform}:</span>
                    <span className={`price-tag ${priceInfo.platform === product.lowestPricePlatform ? 'best' : ''}`}>
                      {formatPrice(priceInfo.price)}
                      {priceInfo.platform === product.lowestPricePlatform && 
                        <span className="ml-2" role="img" aria-label="best price">🎯</span>
                      }
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Availability:</h3>
              <ul className="space-y-2">
                {platforms.map((platform) => (
                  <li key={platform} className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100/50 transition-colors">
                    <span className="text-gray-600">{platform}:</span>
                    <span className={`availability-badge ${product.availability[platform] ? 'available' : 'unavailable'}`}>
                      {product.availability[platform] ? 'Available' : 'Not Available'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-green-50/80 rounded-lg border border-green-100">
            <p className="text-green-800 font-semibold flex items-center justify-center">
              <span className="mr-2">🎯</span>
              Best Price: {formatPrice(product.lowestPrice)} on {product.lowestPricePlatform}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 