import React from 'react';
import { Product } from '../Services/interface';

interface RecommendedEbooksProps {
  images: Product[];
  onRecommendedClick:(product:Product)=>void
}

const RecommendedEbooks: React.FC<RecommendedEbooksProps> = ({ images , onRecommendedClick}) => {
  return (
    <div className="p-4">
      {/* Header */}
      <h2 className="text-center text-red-500 text-lg mb-4">Other Recommended Ebooks</h2>

      {/* Grid of eBooks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-[90%] m-auto">
        {images &&images.map((book, index) => (
          <div key={index} className="border-2 border-blue-500 p-2" onClick={()=>onRecommendedClick(book)}>
            <img src={book.imageUrl} alt={`eBook ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedEbooks;
