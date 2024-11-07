import { Link } from "react-router-dom"
import { useCalculator } from "./CalculatorProvider"

const Result = () => {

    const {  numbers, sumNumbers , resetNumbers} = useCalculator()
    
    return (
        <div className="result">
             <h2>Resultado </h2>
             <p>Números selecionados: {numbers.join(', ')}</p>
             <p>Suma total: {sumNumbers()} </p>
             <Link to='/' onClick={resetNumbers}>Calculadora</Link>
        </div>

    )
}

export default Result