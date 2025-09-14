import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { Container } from "../Container"
// import { motion } from "framer-motion"

export const Features = () => {
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch("http://localhost:8000/features/")
            .then((res) => {
                if (!res.ok) throw new Error("Erreur lors du chargement des features");
                return res.json();
            })
            .then((data) => {
                setFeatures(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Erreur inconnue");
                setFeatures([]);
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            <div className="space-y-4 mb-8 text-center lg:text-start max-w-4xl mx-auto py-5 lg:py-10">
                <h2 className="font-bold text-gray-50 text-[1rem] leading-[1.5rem] sm:text-[2rem] sm:leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[3rem] lg:leading-[4rem]">
                   Nos Features & Services
                </h2>
                <p className="text-claire">
                    ✨ Des solutions digitales modernes, sur-mesure et performantes pour booster votre business.
                </p>
                <div className="grid sm:grid-cols-2 gap-5 lg:gap-4">
                    {error && !loading && (
                        <div className="w-full flex justify-center items-center text-red-500 text-base">{error}</div>
                    )}
                    {!loading && !error && features.map((feate) => (
                        <div
                            key={feate.id}
                            className="m-2 border border-indigo-900 hover:bg-indigo-950 rounded-xl lg:rounded-2xl duration-300 ease-in-out p-8 space-y-2 cursor-pointer"
                        >
                            <img src={`http://localhost:8000/branding/image/${feate.image}`} alt={feate.alt} width={48} height={48} />
                            <h3 className="text-gray-50 font-bold-1">{feate.title}</h3>
                            <p className="text-gray-400">{feate.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}