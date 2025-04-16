"use client";

import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, Label } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
import { dmSerif } from "@/app/styles/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, BarChart3, BadgePercent } from "lucide-react";
import Link from "next/link";

export default function Compare() {
  const [modaleRecherche, setModaleRecherche] = useState(false);
  const [modaleResultat, setModaleResultat] = useState(false);
  const [modaleStatut, setModaleStatut] = useState(false);
  const [resultats, setResultats] = useState(null);
  const [siret, setSiret] = useState("");
  const [erreur, setErreur] = useState("");

  const handleSubmit = async () => {
    setErreur("");

    try {
      const res = await fetch("/api/sirene", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siret }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErreur(data.error || "Une erreur est survenue.");
        return;
      }

      setResultats(data);
      setModaleRecherche(false);
      setModaleResultat(true);
    } catch (err) {
      console.error("Erreur réseau :", err.message || err);
      setErreur("Impossible de joindre le serveur");
    }
  };

  return (
    <section className="bg-white py-24 px-4 w-full">
      <div className="max-w-5xl mx-auto text-center space-y-6 mb-20">
        <h2
          className={`${dmSerif.className} text-4xl sm:text-5xl font-bold text-black`}
        >
          Nos outils pour entrepreneurs et dirigeants
        </h2>
        <p className="text-lg text-gray-600">
          Évaluez votre position sur le marché en un instant grâce à notre
          comparateur d’entreprises concurrentes.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition duration-300 ease-in-out space-y-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src="/Business analytics-amico.svg"
              width={400}
              height={400}
              alt="Comparateur d’entreprises"
              className="mx-auto"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-black">
              Comparateur d’entreprises concurrentes
            </h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-2">
                <Search className="text-blue-600 mt-1" size={20} />
                <span>
                  <strong>Recherchez</strong> votre entreprise par SIRET ou nom
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="text-blue-600 mt-1" size={20} />
                <span>
                  <strong>Nombre de concurrents</strong> dans votre ville et
                  votre secteur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BadgePercent className="text-blue-600 mt-1" size={20} />
                <span>
                  <strong>Statuts juridiques</strong> les plus courants
                </span>
              </li>
            </ul>

            <p className="text-sm mt-4">
              Identifiez vos forces, repérez vos axes d’amélioration et gardez
              une longueur d’avance.
            </p>
            <Button
              color="blue"
              type="button"
              className="cursor-pointer"
              onClick={() => setModaleRecherche(true)}
            >
              Comparer mon entreprise
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Dialog open={modaleRecherche} onClose={setModaleRecherche}>
          <DialogTitle>Comparez votre entreprise</DialogTitle>
          <DialogDescription className="space-y-2">
            Entrez le numéro SIRET de votre entreprise pour découvrir :<br />
            - Le nombre de concurrents dans votre secteur et votre ville
            <br />
            - Les statuts juridiques les plus courants <br />
          </DialogDescription>
          <DialogBody>
            <Field>
              <Label>Numéro SIRET</Label>
              <Input
                name="siret"
                value={siret}
                onChange={(e) => setSiret(e.target.value)}
                placeholder="Ex. : 81234567800019"
              />
            </Field>
            {erreur && (
              <span className="text-red-600 text-sm mt-2">{erreur}</span>
            )}
          </DialogBody>
          <DialogActions>
            <Button
              plain
              className="cursor-pointer"
              onClick={() => setModaleRecherche(false)}
            >
              Annuler
            </Button>
            <Button className="cursor-pointer" onClick={handleSubmit}>
              Lancer analyse
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        {resultats && modaleResultat && (
          <section>
            <div>
              <Dialog open={modaleResultat} onClose={setModaleResultat}>
                <DialogTitle>
                  Résultat de votre recherche d’entreprise
                </DialogTitle>
                <DialogDescription className="space-y-2">
                  <strong>Nom de votre entreprise :</strong>
                  {resultats.etablissement?.uniteLegale
                    ?.denominationUniteLegale || "Nom non disponible"}
                  <br />
                  <strong>Localisation : </strong>
                  {
                    resultats.etablissement?.adresseEtablissement
                      ?.libelleCommuneEtablissement
                  }
                  <br />
                  <strong>Secteur d’activité (Code NAF) :</strong>
                  {
                    resultats.etablissement?.uniteLegale
                      ?.activitePrincipaleUniteLegale
                  }
                  <br />
                  <span className="mt-2 font-medium text-blue-600">
                    {resultats.message}
                  </span>
                </DialogDescription>
                <DialogBody>
                  <Field>Analyse concurrentielle personnalisée</Field>
                  <ul className="space-y-1">
                    {resultats.concurrents.map((etab) => (
                      <li key={etab.siret}>
                        <strong>
                          {etab.uniteLegale?.denominationUniteLegale ||
                            "Nom indisponible"}
                        </strong>{" "}
                        — SIRET : {etab.siret}
                      </li>
                    ))}
                  </ul>
                </DialogBody>
                <DialogActions>
                  <Button
                    plain
                    className="cursor-pointer"
                    onClick={() => setModaleResultat(false)}
                  >
                    Fermer
                  </Button>
                  <Button
                    className="cursor-pointer"
                    onClick={() => setModaleStatut(true)}
                  >
                    Statuts juridiques concurrents
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div>
              {" "}
              <Dialog open={modaleStatut} onClose={setModaleStatut}>
                <DialogTitle>
                  Analyse des statuts juridiques des entreprises concurrentes
                </DialogTitle>
                <DialogDescription className="space-y-2">
                  Cette analyse présente la répartition des{" "}
                  <strong>statuts juridiques</strong> des entreprises exerçant
                  une activité similaire dans la même commune.
                  <span className="font-medium text-blue-600">
                    {resultats.message}
                  </span>
                </DialogDescription>
                <DialogBody>
                  {resultats.statistiques && (
                    <ul>
                      {resultats.statistiques.map((statut) => (
                        <li key={statut.code}>
                          <strong>{statut.libelle}</strong> (Code {statut.code})
                          — {statut.nombre} entreprise(s)
                        </li>
                      ))}
                    </ul>
                  )}
                  Vous avez repéré un code de statut juridique inconnu ou
                  souhaitez en savoir plus ?{" "}
                  <Link
                    href="https://www.insee.fr/fr/information/2028129"
                    className="underline decoration-double decoration-blue-600 hover:text-blue-600"
                    target="_blank"
                  >
                    Consultez la nomenclature officielle des statuts juridiques
                    de l’Insee
                  </Link>{" "}
                  pour obtenir toutes les informations détaillées sur chaque
                  code. Pour plus d
                </DialogBody>
                <DialogActions>
                  <Button
                    className="cursor-pointer"
                    onClick={() => setModaleStatut(false)}
                  >
                    Fermer
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
