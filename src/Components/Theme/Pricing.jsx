
import { Container } from "../Container";
import { Headings } from "../Theme/Headings";
import { Button } from "../Button";


// composant "MES REALISATIONS" personnalisé
// Pour compatibilité avec l'import existant dans App.jsx
export const Pricing = () => {
    const realisations = [
        {
            id: 1,
            titre: "Application de gestion RH",
            description: "Plateforme web pour la gestion des employés, congés et paie, avec interface moderne et notifications.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
            lien: "#"
        },
        {
            id: 2,
            titre: "Site e-commerce personnalisé",
            description: "Boutique en ligne avec paiement sécurisé, gestion de stock et tableau de bord analytique.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
            lien: "#"
        },
        {
            id: 3,
            titre: "Application mobile de réservation",
            description: "App mobile pour réserver des services, notifications push et gestion des utilisateurs.",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            lien: "#"
        },
    ];

    return (
        <Container>
            <div id="realisations">
                <Headings title="MES REALISATIONS" subtitle="Quelques projets réalisés sur-mesure pour nos clients" />
                 <div className="flex items-center justify-center m-2.5">
                        <Button  href={"/portfolio"} theme={"primary"} > Regarde mon Portfolio</Button>
                    </div>
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto mt-8">
                    {realisations.map((real) => (
                        <div key={real.id} className="rounded-2xl bg-gradient-to-br from-gray-950 to-blue-950 shadow-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border border-blue-900">
                            <img src={real.image} alt={real.titre} className="rounded-xl w-full h-40 object-cover mb-4 shadow-md" />
                            <h3 className="text-gray-50 font-bold text-lg mb-2">{real.titre}</h3>
                            <p className="text-claire mb-4 text-sm">{real.description}</p>
                            <a href={real.lien} className="mt-auto inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-blue-600 transition-colors duration-200">Voir le projet</a>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
// ...