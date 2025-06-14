"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/ui/dialog";

export function Quiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      title: "Quel est l’objectif principal de votre site ?",
      options: [
        "Présenter mon activité de façon professionnelle",
        "Être bien référencé sur Google",
        "Vendre ou réserver en ligne",
      ],
    },
    {
      title: "Avez-vous déjà un site web ?",
      options: [
        "Non, je pars de zéro",
        "Oui, mais il ne m’apporte pas grand-chose",
        "Oui, mais je veux passer à un niveau supérieur",
      ],
    },
    {
      title: "Que souhaitez-vous que votre site fasse concrètement ?",
      options: [
        "Donner confiance et rassurer mes visiteurs",
        "Générer des contacts ou des appels",
        "Accepter des paiements ou des réservations",
      ],
    },
    {
      title: "Quelles fonctionnalités sont importantes pour vous ?",
      options: [
        "Un blog ou des actus",
        "Paiement en ligne ou système de réservation",
        "Pas de besoin particulier",
      ],
    },
  ];

  const handleAnswer = (response) => {
    setAnswers((prev) => [...prev, response]);
    setStep((prev) => prev + 1);
  };

  const getRecommendation = () => {
    const objectif = answers[0];
    const fonctionnalite = answers[3];

    if (
      objectif === "Vendre ou réserver en ligne" ||
      fonctionnalite === "Paiement en ligne ou système de réservation"
    ) {
      return "Commerce & Réservation";
    }

    if (
      objectif === "Être bien référencé sur Google" ||
      fonctionnalite === "Un blog ou des actus"
    ) {
      return "Visibilité Pro";
    }

    return "Essentiel";
  };

  return (
    <section className="py-16 px-4 mx-auto text-center space-y-4 md:space-y-6">
      <div className="space-y-2">
        <p className="font-bold text-xl md:text-3xl">
          Pas certain de l’offre qui correspond à vos besoins ?
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Faites le test en seulement 2 minutes et recevez une recommandation
          personnalisée adaptée à vos objectifs.
        </p>
        <Button
          type="button"
          color="blue"
          onClick={() => {
            setIsOpen(true);
            setStep(0);
            setAnswers([]);
          }}
        >
          Commencer le test
        </Button>
      </div>

      <Dialog open={isOpen} onClose={setIsOpen} className="flex flex-col">
        {step < questions.length ? (
          <>
            <DialogTitle>{questions[step].title}</DialogTitle>
            <DialogBody className="space-y-3 x ">
              {questions[step].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="block w-full"
                  color="white"
                >
                  {option}
                </Button>
              ))}
            </DialogBody>
          </>
        ) : (
          <>
            <DialogTitle>Recommandation personnalisée</DialogTitle>
            <DialogBody>
              <p className="text-xl text-gray-700 mb-2">
                D’après vos réponses :
              </p>
              <p className="text-3xl font-bold text-blue-600">
                Offre {getRecommendation()}
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Cette offre semble parfaitement adaptée à vos objectifs.
                N'hésitez pas à me contacter pour en discuter.
              </p>
            </DialogBody>
            <DialogActions>
              <Button href="/contact" color="blue">
                Discutons de votre projet
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </section>
  );
}
