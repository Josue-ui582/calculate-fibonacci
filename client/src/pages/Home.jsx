import React from "react";
import { useState } from "react";
import FibonacciForm from "../components/FibonacciForm";

const Home = () => {
    const [result, setResult] = useState([]);
    return (
        <div className="p">
            <h1>Calcul de la suite de Fibonacci</h1>
            <p>C'est simple, vous avez à entrer un entier parmis les nombres de la suite de Fibonacci et laissez opérer la magie !</p>
            
            <FibonacciForm onResult={setResult} />

            {result.length > 0 && (
                <div>
                <h2>Résultat :</h2>
                <p>{result.join(", ")}</p>
                </div>
            )}
        </div>
    )
}

export default Home;