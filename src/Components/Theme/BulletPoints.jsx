import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
import { Container } from "../Container"
import { Headings } from "./Headings"
import { motion} from "framer-motion"


export const BulletPoint = () => {
    const [bulletPoints, setBulletPoints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`${API_URL}/bulletpoints/`)
            .then((res) => {
                if (!res.ok) throw new Error("Erreur lors du chargement des bullet points");
                return res.json();
            })
            .then((data) => {
                setBulletPoints(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Erreur inconnue");
                setBulletPoints([]);
                setLoading(false);
            });
    }, [API_URL]);

    return <>
        <Headings title="Softwaar" subtitle="Ce que Softwaar fait pour vous" />
        <Container>
            <div className="w-full max-w-4xl mx-auto py-5 lg:py-10 space-y-10 lg:space-y-24">
                <div>
                    {error && !loading && (
                        <div className="w-full flex justify-center items-center text-red-500 text-base">{error}</div>
                    )}
                    {!loading && !error && bulletPoints.map((bullet) => (
                        <div key={bullet.id} className={
                            `lg:flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 my-4
                             ${bullet.id % 2 === 0 ? "flex-row" : "lg:flex-row-reverse"}
                         `}>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 2.5 }}
                                className="w-full flex justify-center lg:w-7/12">
                                <img src={`${API_URL}/branding/image/${bullet.image}`} alt={bullet.alt} width={550} height={300} className="px-20 lg:px-0" />
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="w-full lg:w-5/12 space-y-5 text-center lg:text-left">
                                <h3 className="font-bold text-gray-50">{bullet.title}</h3>
                                <p className="text-claire">{bullet.text}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </>
}