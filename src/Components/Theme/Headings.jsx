import { Container } from "../Container"
import {motion} from "framer-motion"

export const Headings = ({title, subtitle}) => {
    return (
        <Container className="py-5 lg:py-10 ">
            <motion.div
             whileInView={{ opacity: 1, y: 0.0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 3.5 }}
            className="caption-1 text-claire text-center uppercase mb-5"> 
                {title}
            </motion.div>
            <motion.h2
            whileInView={{ opacity: 1, y: 0.0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 2 }}
            className="font-bold text-gray-50 text-[1rem] leading-[1.5rem] sm:text-[2rem] sm:leading-[2.5rem] md:text-[2.5rem] md:leading-[2rem] lg:text-[3rem] lg:leading-[3rem] text-center">{subtitle}</motion.h2>
        </Container>
    )
}