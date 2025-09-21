// ...existing code...

import React, { useEffect, useState } from 'react';
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
import { Container } from '../Container';
import {animate, motion} from "framer-motion"

const iconVariants = (duration) =>({
  initial: {y: -10},
  animate: {
    y:[10 -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: 'reverse',
    }

  } 

})
export const Branding = () => {

  const [branding, setBranding] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API_URL}/branding/`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des logos");
        return res.json();
      })
      .then((data) => {
        setBranding(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Erreur inconnue");
        setBranding([]);
        setLoading(false);
      });
  }, [API_URL]);
 
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-10 mt-4 min-h-[120px]">
        {/* Loader supprimé */}
        {error && !loading && (
          <div className="w-full flex justify-center items-center text-red-500 text-base">{error}</div>
        )}
        {!loading && !error && branding.map((brad, idx) => (
          <motion.div className={`w-1/2 flex justify-center sm:w-1/4 md:w-1/4 lg:w-1/6 lg:p-1 my-2
          ${branding.length % 2 !== 0 && idx === branding.length - 1 ? "hidden lg:flex" :"" }`}
          key={brad.id || idx}
          whileInView={{ opacity: 1, x: 0}}
          initial={{opacity:0, x: -100 }}
          transition={{duration: 2.5}}
          >
            <motion.div >
              <img
                initial="initial"
                animate="animate"
                variants={iconVariants(1.5)}
                src={brad.image ? `${API_URL}/branding/image/${brad.image}` : ''}
                alt={brad.name || 'branding'}
                width={160}
                height={90}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
// ...existing code...