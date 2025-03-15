import React, { useState, useEffect } from 'react';

interface PriceChangeComponentProps {
  apiUrl: string;
}

const PriceChangeComponent: React.FC<PriceChangeComponentProps> = ({ apiUrl }) => {
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [previousPrice, setPreviousPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const newPrice: number = data.price; // Assuming the API returns a JSON object with a 'price' field

        if (previousPrice !== null) {
          setPriceChange(newPrice - previousPrice);
        }

        setPreviousPrice(currentPrice);
        setCurrentPrice(newPrice);
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    };

    fetchPrice();
  }, [apiUrl, currentPrice, previousPrice]);

  return (
    <div>
      <h2>Price Change Component</h2>
      {currentPrice !== null && (
        <div>
          <p>Current Price: ${currentPrice.toFixed(2)}</p>
          {priceChange !== null && (
            <p>Price Change: ${priceChange.toFixed(2)}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceChangeComponent; 