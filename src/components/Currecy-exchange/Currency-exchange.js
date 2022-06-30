

function CurrencyInput(props) {

return (
    <div>
        <input type="text" value={props.amount} onChange={(e) => props.onAmaontChange(e.target.value)}/>
        <select value={props.currency} onChange={(e) => props.onCurrencyChange(e.target.value)}>
            {props.currencies.map(currency => (
                <option value={currency}>{currency}</option>
            ))}
        </select>
    </div>
)
};

export default CurrencyInput;