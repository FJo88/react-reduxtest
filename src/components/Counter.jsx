import { useDispatch, useSelector } from "react-redux";
import { add, sub, mul} from "../redux/ducks/counter"

const Counter = () => {
    let dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    
    let addition = () => {
        let value = +document.querySelector("#addValue").value;
        dispatch(add(value));
    }
    let subtract = () => {
        let value = +document.querySelector("#addValue").value;
        dispatch(sub(value));
    }
    let multiply = () => {
        let value = +document.querySelector("#addValue").value;
        dispatch(mul(value));
    }
    
    return (
    <div>
        <h1>Counter: {count}</h1>
        <br/>
        <input type="number" id="addValue" />
        <br />
        <br />
        <h4>Add number to counter <button onClick={addition}>+</button></h4>
        <h4>Subract number from counter <button onClick={subtract}>-</button></h4>
        <h4>Multiply counter above by number <button onClick={multiply}>*</button></h4>
    </div>

)};
export default Counter;