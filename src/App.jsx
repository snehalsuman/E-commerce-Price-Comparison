import { useState } from 'react'
import useProductData from './hooks/useProductData'
import ProductCard from './components/ProductCard'

function App() {
  const { products, loading, error } = useProductData();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="loading-spinner mb-4"></div>
          <div className="text-2xl font-semibold text-gray-700">Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          E-commerce Price Comparison
        </h1>
        
        <div className="max-w-md mx-auto mb-8 relative">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </div>
        </div>

        <div className="grid gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-600 mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            No products found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
