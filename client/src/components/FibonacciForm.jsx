import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const FibonacciForm = ({ onResult }) => {
    const [number, setNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (number === "" || isNaN(number) || number < 0) {
            toast.error("Veuillez entrer un nombre entier positif");
            return;
        }

        try {
            const res = await fetch(`/api/fibonacci/${number}`);
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Erreur serveur.");
            }

            onResult(data.fibonacci);
            toast.success("Suite calculée avec succès !")
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Entrez un nombre"
                    min="0"
                />

                <button type="submit">Calculer</button>
            </div>
        </form>
    )
}

export default FibonacciForm;