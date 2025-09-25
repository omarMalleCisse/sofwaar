import { social } from "../../constants"
import { Container } from "../Container"

export const Footer = () => {
    return (
        <div className="n-7  py-5  lg:py-12 mt-5 lg:mt-16">
            <Container className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between text-claire-pricing n-3 ">
                <div className="flex items-center gap-4">
                    {social.map((soc) => (
                        <div key={soc.id}>
                            <a href="_blank"> <img src={soc.ico} alt={soc.alt} /></a>
                        </div>
                    ))}
                </div>
                <div className="space-x-4">
                    <a href="" target="_blank" rel="noreferrer">Email
                    </a>
                    <a href="" target="_blank" rel="noreferrer">bymalle@icloud.com</a>
                </div>
                <div>
                    📞 Téléphone : +221 77 334 96 52
                </div>
                <div> c 2025 All right reserved {""}
                    <a href="" target="_blank" rel="noreferrer">Softwaar</a>
                </div>
            </Container>
            
        </div>
    )
}