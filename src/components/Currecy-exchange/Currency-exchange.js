import s from "./Currency-exchnge.module.css";

function CurrencyInput(props) {

return (
    <div className={s.container}>
        <input type="text" value={props.amount} onChange={(e) => props.onAmaontChange(e.target.value)}/>
        <select value={props.currency} onChange={(e) => props.onCurrencyChange(e.target.value)}>
            {props.currencies.map(currency => (
                <option value={currency} key={currency}>{currency}</option>
            ))}
        </select>
    </div>
)
};

export default CurrencyInput;