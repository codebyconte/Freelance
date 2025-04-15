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
import { Search, BarChart3, Users, BadgePercent } from "lucide-react";

export default function Compare() {
  let [isOpen, setIsOpen] = useState(false);
  const [resultats, setResultats] = useState(null);
  const [siret, setSiret] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/sirene", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siret }),
      });

      console.log("Réponse brute:", res);
      const data = await res.json();
      console.log("Données reçues:", data);

      if (!res.ok) {
        throw new Error("Une erreur est survenue");
      }

      setResultats(data);
    } catch (err) {
      console.error("Erreur réseau :", err.message || err);
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

      <div className="max-w-4xl mx-auto bg-gray-100 rounded-2xl p-8 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out space-y-10">
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
              <li className="flex items-start gap-2">
                <Users className="text-blue-600 mt-1" size={20} />
                <span>
                  <strong>Taille moyenne</strong> des équipes
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
              onClick={() => setIsOpen(true)}
            >
              Comparer mon entreprise
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Dialog open={isOpen} onClose={setIsOpen}>
          <DialogTitle>Comparez votre entreprise</DialogTitle>
          <DialogDescription>
            Entrez le numéro SIRET de votre entreprise pour découvrir :<br />
            Le nombre de concurrents dans votre secteur et votre ville
            <br />
            Les statuts juridiques les plus courants <br />
            La taille moyenne des équipes
          </DialogDescription>
          <DialogBody>
            <Field>
              <Label>numéro SIRET</Label>
              <Input
                name="siret"
                value={siret}
                onChange={(e) => setSiret(e.target.value)}
                placeholder="Ex. : 81234567800019"
              />
            </Field>
          </DialogBody>
          <DialogActions>
            <Button
              plain
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Annuler
            </Button>
            <Button className="cursor-pointer" onClick={handleSubmit}>
              Rechercher votre entreprise
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
}
