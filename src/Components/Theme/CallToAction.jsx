import { icoArrowRight } from "../../assets"
import { Button } from "../Button"
import {Container} from "../Container"
export const CallToAction =({ minify = false})=> {
    return (
        <Container>
            <div className="max-w-4xl mx-auto py-5 lg:py-10 text-claire" >
                <div className={`flex flex-col items-center  rounded-xl lg:rounded-3xl bg-gradient-to-tl from-blue-600 to-blue-900 p-6 lg:p-10 gap-8
                       ${!minify ? "flex flex-col items-center" : 
                        "flex flex-col items-center justify-between lg:flex lg:flex-row lg:items-center"
                       }
                    `}>
                <div className={minify ? "space-y-1 text-center lg:text-start" : "caption-1 text-claire space-y-4 text-center"
                }>
                    Parlez-nous de votre Project  ?
                <h2 className="font-bold text-gray-50 text-[1rem] leading-[1.5rem] sm:text-[2rem] sm:leading-[2.5rem] md:text-[2.5rem] md:leading-[2rem] lg:text-[3rem] lg:leading-[3rem]"> Passez à l’étape supérieure</h2>
            </div>
            <a href="/contact">
             <Button theme="primary" className="flex items-center justify-center gab-1">
             <span>Passez à l’action</span> 
             <img src={icoArrowRight}valt="ArrowRight" width={24} height={24}/>
             </Button>
            </a>
                </div>
        </div>
        </Container>
    )
}