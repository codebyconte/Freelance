"use client";
import { dmSerif } from "@/app/styles/fonts";
import { useState, useEffect } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function Graphique() {
  const [secteurs, setSecteurs] = useState([]);
  const [radiation, setRadiation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://open.urssaf.fr/api/explore/v2.1/catalog/datasets/auto-entrepreneurs-par-secteur-dactivite/records?select=secteur_d_activite_me%2Cchiffres_d_affaires&order_by=chiffres_d_affaires%20DESC&limit=72&refine=annee%3A%222024%22"
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }

        const data = await response.json();

        const secteurMap = {};

        data.results.forEach((item) => {
          const secteur = item.secteur_d_activite_me;
          const ca = Number(item.chiffres_d_affaires || 0);

          if (secteurMap[secteur]) {
            secteurMap[secteur] += ca;
          } else {
            secteurMap[secteur] = ca;
          }
        });

        const fusionnes = Object.entries(secteurMap).map(
          ([secteur, chiffres_d_affaires]) => ({
            secteur_d_activite_me: secteur,
            chiffres_d_affaires,
          })
        );

        fusionnes.sort((a, b) => b.chiffres_d_affaires - a.chiffres_d_affaires);

        setSecteurs(fusionnes);
      } catch (err) {
        console.error("Erreur serveur :", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchRadiation = async () => {
      try {
        const response = await fetch(
          "https://open.urssaf.fr/api/explore/v2.1/catalog/datasets/auto-entrepreneurs-par-secteur-dactivite/records?select=secteur_d_activite_me%2Cradiations&order_by=radiations%20DESC&limit=100&refine=annee%3A%222024%22"
        );

        if (!response.ok) {
          throw new Error("Une erreur est survenue");
        }

        const data = await response.json(); // ✅ await ici

        const radiationMap = {};

        data.results.forEach((item) => {
          const secteur = item.secteur_d_activite_me;
          const radiations = Number(item.radiations || 0);

          if (radiationMap[secteur]) {
            radiationMap[secteur] += radiations;
          } else {
            radiationMap[secteur] = radiations;
          }
        });

        const fusionnes = Object.entries(radiationMap).map(
          ([secteur, radiations]) => ({
            secteur_d_activite_me: secteur,
            radiations,
          })
        );

        fusionnes.sort((a, b) => b.radiations - a.radiations);

        setRadiation(fusionnes);
      } catch (error) {
        console.error(error, "Erreur serveur");
      }
    };

    fetchRadiation();
  }, []);

  return (
    <section className="mx-auto px-4 py-12 md:py-24 space-y-12 w-full overflow-x-hidden ">
      <div className="mb-12 text-center mx-auto">
        <h2
          className={`${dmSerif.className} text-2xl md:text-4xl lg:text-5xl font-bold text-black`}
        >
          Analyse sectorielle : Top secteurs par chiffre d’affaires et secteurs
          à risques
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
          Analysez votre marché, comparez-vous à la concurrence, simulez vos
          revenus et suivez les tendances locales en quelques clics.
        </p>
      </div>

      <div className="text-center mx-auto space-y-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Top secteurs par chiffre d’affaires
        </h3>
        <p className="text-base max-w-3xl mx-auto">
          Identifier les secteurs les plus performants en termes de chiffre
          d’affaires, c’est anticiper les tendances du marché, cibler les
          segments les plus attractifs et maximiser le potentiel de
          développement de votre entreprise. Cette vision globale vous permet
          d’ajuster votre stratégie en fonction des réalités économiques et de
          la concurrence.
        </p>
      </div>

      <div className="w-full h-[300px] md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={secteurs.slice(0, 5)} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              tickFormatter={(value) =>
                new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                }).format(value)
              }
            />
            <YAxis
              type="category"
              dataKey="secteur_d_activite_me"
              width={200}
            />
            <Tooltip
              formatter={(value) =>
                new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                }).format(value)
              }
            />
            <Legend />
            <Bar
              dataKey="chiffres_d_affaires"
              name="Chiffre d'affaire"
              fill="#3b82f6"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="max-w-5xl mx-auto space-y-4 text-center md:text-left">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Secteurs avec le plus de radiations
        </h3>
        <p className="text-base">
          Repérez les secteurs d’activité où le nombre de radiations
          d’entreprises est le plus élevé. Cette donnée essentielle met en avant
          les secteurs les plus instables, risqués ou saturés, et vous aide à
          anticiper les difficultés potentielles avant de vous lancer ou
          d’investir.
        </p>
        <h4 className="text-lg font-medium mt-4 text-center md:text-left">
          Pourquoi surveiller le taux de radiations ?
        </h4>
        <p className="text-base">
          Un secteur affichant beaucoup de radiations peut indiquer une forte
          concurrence, des évolutions rapides ou des difficultés structurelles.
          Cette information est cruciale pour évaluer les risques et bâtir une
          stratégie solide et pérenne.
        </p>
      </div>

      <div className="w-full h-[300px] md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={radiation.slice(0, 5)} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis
              type="category"
              dataKey="secteur_d_activite_me"
              width={200}
            />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="radiations"
              name="Nombre de radiations"
              fill="#f87171"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-2.5">
        <h4 className="text-base md:text-lg font-semibold">
          Source : Données officielles Urssaf 2024
        </h4>
        <p className="text-sm md:text-base">
          Tous les chiffres présentés ici sont issus des données officielles de
          l’Urssaf pour l’année 2024, garantissant une information fiable et à
          jour sur les auto-entrepreneurs en France.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-base md:text-lg">
          Grâce à ces analyses sectorielles, bénéficiez d’une vision claire et
          objective du paysage économique français. Que vous soyez entrepreneur,
          investisseur ou dirigeant, appuyez-vous sur ces données pour prendre
          des décisions éclairées et assurer la réussite de vos projets.
        </p>
      </div>
    </section>
  );
}
