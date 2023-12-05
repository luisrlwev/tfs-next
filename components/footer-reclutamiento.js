import Link from "next/link";

export default function FooterReclutamiento() {
  return (
    <footer>
      <div className="text-white text-center text-base py-4 bg-footer">
        <p className="font-bold uppercase text-footer letter-spacing-25 pb-2 text-xs lg:text-base">Tulumfromsky Realtors © 2023 Todos los derechos reservados JAH OLAM SA DE CV</p>
        <Link href={'/aviso-de-privacidad'} className="underline text-xs lg:text-base">Aviso de privacidad</Link>
      </div>
    </footer>
  );
}
