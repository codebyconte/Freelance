import Link from "next/link";

export default function ConditionsGeneralesVente() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Conditions Générales de Vente (CGV)
      </h1>

      <p>
        <strong>Éditeur :</strong> Mouctar Conte – Auto-entrepreneur
        <br />
        <strong>SIRET :</strong> 828 930 149 00012
        <br />
        <strong>TVA intracommunautaire :</strong> Non applicable (art. 293 B
        CGI)
        <br />
        <strong>Adresse :</strong> Communiquée sur simple demande
        <br />
        <strong>Email :</strong>{" "}
        <Link
          href="mailto:Mr.conte@icloud.com"
          className="text-blue-600 underline"
        >
          Mr.conte@icloud.com
        </Link>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Objet</h2>
      <p>
        Les présentes Conditions Générales de Vente (CGV) s’appliquent à toutes
        les prestations de services web, développement de sites et
        accompagnement digital proposées par Code By Conte. Elles définissent
        les droits et obligations de l’éditeur et du client dans le cadre de
        leur collaboration.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Prestations</h2>
      <p>
        Code By Conte conçoit et développe des sites vitrines, e-commerce,
        plateformes et applications web sur mesure. Chaque prestation fait
        l’objet d’un devis détaillé, spécifiant le périmètre, les livrables, les
        délais et le prix.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Tarifs &amp; modalités de paiement
      </h2>
      <p>
        Les tarifs sont ceux indiqués au devis et exprimés en euros, hors taxes.
        Le paiement s’effectue selon les modalités convenues : acompte à la
        commande (généralement 30 %), solde à la livraison. Les paiements se
        font par virement bancaire ou tout autre moyen indiqué sur le devis.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2" id="return-policy">
        4. Droit de rétractation
      </h2>
      <p>
        Conformément à l’article L221-28 3° du Code de la Consommation, le droit
        de rétractation ne s’applique pas aux prestations de services pleinement
        exécutées avant la fin du délai de rétractation et dont l’exécution a
        commencé après accord préalable exprès du client et renoncement exprès à
        son droit de rétractation.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Délais de livraison
      </h2>
      <p>
        Les délais figurant au devis sont donnés à titre indicatif. En cas de
        retard, Code By Conte informera le client et proposera un nouveau
        planning. Aucun retard ne peut donner lieu à pénalités ou indemnités.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        6. Obligations du client
      </h2>
      <ul className="list-disc list-inside">
        <li>
          Fournir toutes les informations, contenus et accès nécessaires à la
          réalisation.
        </li>
        <li>Valider les livrables dans les délais impartis.</li>
        <li>Respecter les modalités de paiement.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. Propriété intellectuelle
      </h2>
      <p>
        Les codes, designs et contenus créés restent la propriété de Code By
        Conte jusqu’au paiement intégral. Après paiement, les droits
        d’utilisation sont cédés au client pour son usage interne, sans
        exclusivité ni revente.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Responsabilité</h2>
      <p>
        Code By Conte exécute ses prestations en conformité avec les règles de
        l’art. Sa responsabilité est limitée au montant total facturé. Il ne
        peut être tenu responsable des dommages indirects ou immatériels.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        9. Données personnelles
      </h2>
      <p>
        Les données collectées pour l’exécution des prestations sont utilisées
        uniquement dans ce cadre. Conformément au RGPD, le client peut exercer
        ses droits d’accès, rectification et suppression en contactant
        <Link
          href="mailto:Mr.conte@icloud.com"
          className="text-blue-600 underline"
        >
          {" "}
          Mr.conte@icloud.com
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Force majeure</h2>
      <p>
        Aucun des deux partis n’est responsable en cas de force majeure (grève,
        crise sanitaire, catastrophe naturelle…). La prestation est suspendue et
        prolongée d’une durée équivalente à l’événement.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        11. Loi applicable &amp; litiges
      </h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige, une
        tentative de médiation sera effectuée avant toute action judiciaire. À
        défaut d’accord, le tribunal de commerce de Brest sera seul compétent.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Dernière mise à jour : 16/06/2025
      </p>
    </main>
  );
}
