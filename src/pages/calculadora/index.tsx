import {useState} from 'react';

export default function PriceCalculator() {
    const [result, setResult] = useState<{ totalCost: number; taxAmount: number } | null>(null);
    const TAX_RATE = 19;  // Fixed tax rate at IVA
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        trailingZeroDisplay: 'stripIfInteger'
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        // Function to remove non-digit characters and convert to number
        const getNumericValue = (selector: string) => {
            const inputValue = (form.querySelector(selector) as HTMLInputElement).value;
            return Number(inputValue.replace(/\D/g, '')) || 0;
        };

        const expectedEarning = getNumericValue('#expectedEarning');
        const baseCosts = getNumericValue('#baseCosts');
        const additionalAmount = getNumericValue('#additionalAmount');

        const taxAmount = (expectedEarning * TAX_RATE) / 100;
        const totalCost = baseCosts + expectedEarning + taxAmount + additionalAmount;

        setResult({totalCost, taxAmount});
    };

    const formatNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = event.currentTarget;
        const initialCursorPos = input.selectionStart;

        // Remove all characters except digits
        const clearedValue = input.value.replace(/\D/g, '');

        // Format the number and update input value
        const formattedValue = clearedValue ? formatter.format(Number(clearedValue)) : '';
        input.value = formattedValue;

        // Adjust cursor position after formatting to maintain usability
        if (formattedValue) {
            const lengthDifference = formattedValue.length - clearedValue.length;
            input.setSelectionRange(initialCursorPos + lengthDifference, initialCursorPos + lengthDifference);
        }
    };


    return (
        <div>
            <section style={{marginTop: '100px'}}>
                <div className="container">
                    <h2>Price Calculator</h2>
                </div>
                <div className="container" style={{paddingTop: 90, paddingBottom: 120}}>
                    <form id="priceForm" className="needs-validation" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="expectedEarning" className="form-label">Ganancia esperada</label>
                            <input type="text"
                                   className="form-control"
                                   id="expectedEarning"
                                   placeholder="Enter expected earning"
                                   required
                                   onKeyUp={formatNumber}/>
                            <div className="invalid-feedback">
                                Please enter a valid expected earning.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="baseCosts" className="form-label">Costos</label>
                            <input type="text" className="form-control" id="baseCosts" placeholder="Enter base costs"
                                   required onKeyUp={formatNumber}/>
                            <div className="invalid-feedback">
                                Please enter a valid base cost.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="additionalAmount" className="form-label">Costos adicionales</label>
                            <input type="text" className="form-control" id="additionalAmount"
                                   placeholder="Enter additional amount"/>
                            <div className="invalid-feedback">
                                Please enter a valid additional amount.
                            </div>
                            <small className="form-text text-muted">
                                Por ejemplo: envío, transporte, gastos de embalaje, etc.
                            </small>
                        </div>
                        <button type="submit" className="btn btn-primary">Calculate</button>
                    </form>

                    {result !== null && (
                        <div className="mt-4">
                            <h5>Suggested price: {formatter.format(result.totalCost)}</h5>
                            <h6>IVA (19%): {formatter.format(result.taxAmount)}</h6>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
