import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-5xl font-semibold text-blue-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page non trouvée
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Désolé, nous n’avons pas pu trouver la page que vous recherchez.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/">Aller à la page d{"'"}accueil</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
