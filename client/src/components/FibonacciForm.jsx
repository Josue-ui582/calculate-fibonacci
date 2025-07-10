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
            const contentType = res.headers.get("content-type");

            if (!res.ok) {
            const text = await res.text();
            throw new Error(`Erreur ${res.status}: ${text}`);
            }

            if (contentType && contentType.includes("application/json")) {
            const data = await res.json();
            onResult(data.fibonacci);
            toast.success("Suite calculée avec succès !");
            } else {
            throw new Error("Le serveur n'a pas renvoyé du JSON.");
            }

        } catch (err) {
            console.error("Erreur attrapée :", err);
            toast.error("Erreur : " + err.message);
        }
    };


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