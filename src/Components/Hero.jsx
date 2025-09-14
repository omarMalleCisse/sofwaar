import { uiInterface } from "../assets"
import { Button } from "./Button"
import { Container } from "./Container"
import { Grid } from "./Theme/hero"
import { motion, stagger } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.15 // Correction du nom et valeur plus réaliste
        }
    }
};
const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
};
export const Hero = () => {
    return (<div className="relative">
        <Container className={"relative z-10 pt-10 lg:py16"}>
            <motion.div className="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 3.5 }}
                    className="font-bold text-white text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[5rem]">Avec
                    {" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-blue-100" >Softwaar-</span>{" "}
                    Donnez vie à vos idées<br></br>
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-blue-100">Digitales</span>
                </motion.h1>
                <motion.p className="text-gray-400"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                > 
                    Chez{' '} 
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-blue-100" >Softwaar</span>{" "}, nous réinventons le monde numérique pour vous
                    : des Sites web {' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-blue-100" >Modernes</span>{" "}, application mobiles puissent ,  
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-blue-100" >Softwaar</span>{" "} crée des solutions sur
                    mesure pour faire grandir votre business
                   
                </motion.p>
                <Button href={"/contact"} theme={"primary"}> Discutons de votre Project</Button>
                </motion.div>
                 <motion.img
                className="mt-5 w-full"
                src={uiInterface}
                alt="ui Interface illustraion"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                variants={childVariants}
            />

        </Container>
        <Grid />
    </div>


    )
}