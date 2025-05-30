"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { useState, useRef } from "react";
import {
  CheckboxGroup,
  Checkbox,
  CheckboxField,
} from "@/components/ui/checkbox";
import { Label } from "@/components/ui/fieldset";

export function FormContact() {
  const formRef = useRef(null);
  const [confirmation, setConfirmation] = useState(null);
  const [ok, setOk] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const data = {
      firstName: form.get("first-name"),
      lastName: form.get("last-name"),
      email: form.get("email"),
      phone: form.get("phone-number"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.status === 200) {
      setConfirmation("success");
      formRef.current.reset();
      setTimeout(() => {
        setConfirmation(null);
      }, 5000);
    } else if (res.status === 404) {
      setConfirmation("error");
      setTimeout(() => {
        setConfirmation(null);
      }, 5000);
    }
  };

  return (
    <section>
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    fill="white"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Travaillons ensemble sur votre site
              </h1>
              <p className="mt-6 text-lg/8 text-gray-600">
                Vous avez un projet en tête ou vous hésitez encore sur la
                meilleure solution pour votre entreprise ? Je suis là pour vous
                écouter, répondre à vos questions et vous guider vers une
                solution adaptée à vos objectifs.
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <Link
                      href="mailto:hello@example.com"
                      className="hover:text-gray-900"
                    >
                      Mr.conte@icloud.com
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Nom
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Prenom
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Telephone
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>

              <CheckboxGroup className="p-4">
                <CheckboxField>
                  <Checkbox color="blue" checked={ok} onChange={setOk} />
                  <Label>
                    {" "}
                    J’accepte que mes données soient utilisées pour me
                    recontacter dans le cadre de ma demande.
                    <br />
                    Voir la{" "}
                    <Link
                      href="/confidentialite"
                      className="underline text-indigo-600 hover:text-indigo-800"
                    >
                      politique de confidentialité
                    </Link>
                  </Label>
                </CheckboxField>
              </CheckboxGroup>

              <div className="mt-8 flex justify-end">
                <Button color="blue" type="submit" disabled={!ok}>
                  Envoyer un message
                </Button>
              </div>
              <div>
                {confirmation === "success" && (
                  <p className="mt-4 text-green-600">
                    Message envoyé avec succès !
                  </p>
                )}
                {confirmation === "error" && (
                  <p className="mt-4 text-red-600">
                    Une erreur est survenue, veuillez réessayer.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
