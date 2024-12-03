import React, { ChangeEvent, useState } from 'react';

const CommissionCalculator: React.FC = () => {
  const [price, setPrice] = useState<string>('');
  const [commission, setCommission] = useState<string>('');

  const commissionOptions = [
    { name: 'Service A', value: 0.1 }, // 10%
    { name: 'Service B', value: 0.15 }, // 15%
    { name: 'Service C', value: 0.2 }, // 20%
  ];

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setPrice(value);
  };

  const handleCommissionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCommission(event.target.value);
  };

  const calculateNetPrice = (): number => {
    if (price && commission) {
      const commissionRate = parseFloat(commission);
      const grossPrice = parseInt(price, 10);
      const netPrice = grossPrice / (1 + commissionRate);
      return Math.round(netPrice); // Round to nearest whole number for CLP
    }
    return 0;
  };

  const calculateCommissionAmount = (): number => {
    if (price && commission) {
      const grossPrice = parseInt(price, 10);
      const netPrice = calculateNetPrice();
      return grossPrice - netPrice;
    }
    return 0;
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="container mt-5">
      <h2>Commission Calculator</h2>
      <form>
        <div className="form-group">
          <label htmlFor="price">Price (CLP) with Commission</label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter price in CLP"
          />
        </div>
        <div className="form-group">
          <label htmlFor="commission">Commission</label>

          <select className="form-control" id="commission" value={commission} onChange={handleCommissionChange}>
            <option value="">Select commission</option>
            {commissionOptions.map((option, index) => (
              <option key={index} value={option.value.toString()}>
                {option.name} - {option.value * 100}%
              </option>
            ))}
          </select>
        </div>
      </form>
      <h3>Monto a transferir: {formatCurrency(calculateNetPrice())}</h3>
      <h4>Comisión de pago: {formatCurrency(calculateCommissionAmount())}</h4>
    </div>
  );
};

export default CommissionCalculator;
