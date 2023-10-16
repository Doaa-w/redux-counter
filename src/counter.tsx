
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, reste } from "./CounterSlice";
import { RootState } from "./store";

const Counter = ()=>{
    const count = useSelector((state:RootState)=> state.counterRe.count);
    const dispatch=useDispatch();

const handelIncrement =()=>{
    dispatch(increment());

}

const handelReset =()=>{
    dispatch(reste());

}
const handelDencrement =()=>{
    dispatch(decrement());

}
    return (
        <div>
           <h2>counter: {count}</h2>
           <button onClick={handelIncrement}>+</button>
           <button onClick={handelReset}>0</button>
           <button onClick={handelDencrement}>-</button>
        </div>
    );
};
export default Counter;