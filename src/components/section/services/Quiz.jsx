"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Quiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      title: "Quel est l’objectif principal de votre futur site ?",
      options: [
        "Vendre mes produits ou services en ligne",
        "Recevoir des demandes de contact ou devis",
        "Présenter clairement ce que je fais",
      ],
    },
    {
      title: "Où en êtes-vous aujourd’hui ?",
      options: [
        "Je démarre mon activité",
        "J’ai un site, mais il ne me sert pas vraiment",
        "Je veux passer à un site plus pro et performant",
      ],
    },
    {
      title: "Quel rôle votre site doit-il jouer ?",
      options: [
        "Rassurer et donner une image pro de mon activité",
        "Convertir les visiteurs en clients",
        "Être bien référencé sur Google",
        "Automatiser certaines tâches (prise de RDV, paiement, etc.)",
      ],
    },
    {
      title: "Quelles fonctionnalités souhaitez-vous ?",
      options: [
        "Paiement en ligne sécurisé",
        "Un blog ou espace d’actus",
        "Pas de besoin particulier, je veux un site simple",
      ],
    },
    {
      title: "Avez-vous déjà un site ?",
      options: [
        "Non, je pars de zéro",
        "Oui, mais il date ou ne me correspond plus",
        "Oui, et je veux l’améliorer",
      ],
    },
  ];

  const handleAnswer = (response) => {
    setAnswers((prev) => [...prev, response]);
    setStep((prev) => prev + 1);
  };

  const getRecommendation = () => {
    const first = answers[0];
    const trois = answers[3];
    if (first === "Vendre mes produits ou services en ligne")
      return "E-commerce Performant";
    if (trois === "Paiement en ligne sécurisé") {
      return " E-commerce Performant";
    } else if (trois === "Un blog ou espace d’actus") {
      return " Structuré & Évolutif";
    } else if (trois === "Pas de besoin particulier, je veux un site simple") {
      return " Présence Pro";
    }
  };

  return (
    <div className="py-8 mx-auto text-center space-y-2 p-4">
      <p className="text-bold text-3xl">
        Pas certain de l’offre qui correspond à vos besoins ?
      </p>
      <p className="text-lg">
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
            <DialogTitle>Vous avez besoin d’un :</DialogTitle>
            <DialogBody>
              <br />
              <p className="text-3xl bold  text-black">
                Site {getRecommendation()}
              </p>
            </DialogBody>
            <DialogActions>
              <Button href="/contact" color="zinc">
                Discutons de votre projet
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
}
