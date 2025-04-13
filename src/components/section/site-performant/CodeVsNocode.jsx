import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CircleGauge,
  BadgeDollarSign,
  LockKeyhole,
  TrendingDown,
} from "lucide-react";
import { dmSerif } from "@/app/styles/fonts";

export default function CodeVsNocode() {
  return (
    <section className="py-24 space-y-8">
      <div className=" text-center max-w-4xl mx-auto p-4">
        <h2 className={`${dmSerif.className} text-4xl sm:text-6xl font-bold`}>
          Code vs No-Code : que choisir pour votre entreprise ?
        </h2>
        <p className="mt-8 text-lg leading-relaxed">
          Créer ou refondre un site web implique souvent un choix crucial :
          opter pour une solution no-code rapide ou investir dans un
          développement sur-mesure ? Voici un comparatif clair pour vous aider à
          choisir la meilleure option selon vos besoins.
        </p>
      </div>
      <div className="p-4 md:p-16">
        <Table
          striped
          grid
          bleed
          className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)] border border-gray-300 rounded-md outline outline-offset-2 "
        >
          <TableHead>
            <TableRow>
              <TableHeader>Critères</TableHeader>
              <TableHeader>Site codé sur mesure</TableHeader>
              <TableHeader>Site no-code</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="hover:bg-blue-100 transition duration-300 ease-in-out   ">
              <TableCell>Personnalisation</TableCell>
              <TableCell>
                Illimitée : chaque détail peut être adapté à vos besoins
                spécifiques.
              </TableCell>
              <TableCell>
                Limitée : vous êtes contraint par les options des templates.
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-blue-100 transition duration-300 ease-in-out   ">
              <TableCell>Performance</TableCell>
              <TableCell>
                Optimisée : code léger et sans superflu, garantissant vitesse et
                fiabilité.
              </TableCell>
              <TableCell>
                Moins performante : souvent ralentie par des fonctionnalités
                inutiles.
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-blue-100 transition duration-300 ease-in-out   ">
              <TableCell>Sécurité</TableCell>
              <TableCell>
                Sécurité avancée avec des protocoles personnalisés.
              </TableCell>
              <TableCell>
                Vulnérabilités communes dues aux plateformes partagées.
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-blue-100 transition duration-300 ease-in-out   ">
              <TableCell>Sécurité</TableCell>
              <TableCell>
                Sécurité avancée avec des protocoles personnalisés.
              </TableCell>
              <TableCell>
                Vulnérabilités communes dues aux plateformes partagées.
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-blue-100 transition duration-300 ease-in-out   ">
              <TableCell>Scalabilité</TableCell>
              <TableCell>
                Extensible sans limites : idéal pour accompagner la croissance
                de votre entreprise.
              </TableCell>
              <TableCell>
                Difficultés à gérer un trafic élevé ou des fonctionnalités
                complexes.
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-blue-100 transition duration-300 ease-in-out   ">
              <TableCell>SEO</TableCell>
              <TableCell>
                Structure optimisée dès la base pour un meilleur référencement
                naturel.
              </TableCell>
              <TableCell>
                Limitations techniques impactant votre visibilité sur Google.
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-blue-100 transition duration-300 ease-in-out   ">
              <TableCell>Coût à long terme</TableCell>
              <TableCell>
                Investissement initial plus élevé, mais économies sur le long
                terme grâce à une maintenance maîtrisée.
              </TableCell>
              <TableCell>
                Faible coût initial, mais frais récurrents élevés et migrations
                coûteuses à terme.
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-blue-100 transition duration-300 ease-in-out   ">
              <TableCell>Propriété du site</TableCell>
              <TableCell>
                Vous êtes propriétaire du code et libre de toutes modifications.
              </TableCell>
              <TableCell>Dépendance totale à la plateforme choisie .</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="text-center space-y-6 p-4">
        <div className="max-w-3xl mx-auto ">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Les limites du no-code
          </h3>
          <p className="mt-6 text-lg">
            Bien que les solutions no-code soient séduisantes par leur rapidité
            et leur coût initial réduit, elles présentent plusieurs
            inconvénients majeurs qui peuvent freiner votre entreprise à long
            terme :
          </p>
        </div>
        <ul className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          <li className="flex gap-2 max-w-2xl mx-auto">
            <CircleGauge className="text-blue-600 w-10 h-10" />
            <p>
              <span className="font-semibold">Problèmes de performance :</span>{" "}
              Les sites no-code sont souvent alourdis par des plugins inutiles
              qui ralentissent leur fonctionnement.
            </p>
          </li>
          <li className="flex gap-2 max-w-2xl mx-auto">
            <LockKeyhole className="text-blue-600 w-10 h-10" />
            <p>
              <span className="font-semibold">Dépendance au fournisseur :</span>
              Vous ne possédez pas réellement votre site ; vous êtes lié aux
              conditions et évolutions imposées par la plateforme.
            </p>
          </li>
          <li className="flex gap-2 max-w-2xl mx-auto">
            <BadgeDollarSign className="text-blue-600 w-10 h-10" />
            <p>
              <span className="font-semibold">Frais récurrents élevés :</span>{" "}
              Les abonnements mensuels s’accumulent rapidement, rendant ces
              solutions coûteuses à long terme.
            </p>
          </li>
          <li className="flex gap-2 max-w-2xl mx-auto">
            <TrendingDown className="text-blue-600 w-10 h-10" />
            <p>
              <span className="font-semibold">Difficultés en SEO avancé :</span>
              Les limitations techniques impactent directement votre capacité à
              bien vous positionner sur Google.
            </p>
          </li>
        </ul>
        <p className="max-w-3xl mx-auto leading-6">
          Si votre objectif est de créer un site professionnel qui reflète
          parfaitement l’identité de votre entreprise tout en garantissant
          performance, sécurité et évolutivité, le développement sur mesure est
          la solution incontournable. Les plateformes no-code peuvent convenir
          pour des projets simples ou temporaires, mais elles montrent vite
          leurs limites face aux besoins d’une entreprise en pleine croissance.
        </p>
      </div>
    </section>
  );
}
