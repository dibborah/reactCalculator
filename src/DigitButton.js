export default function DigitButton({ dispatch, digit }) {
    return <button onClick={()=>dispatch}>{digit}</button>
}