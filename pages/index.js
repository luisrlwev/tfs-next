import Link from "next/link";
import Layout from "@/components/layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <Layout
      title={"Inicio"}
      description={"Tulumfromsky Realtors es líder en la comercialización de desarrollos inmobiliarios en la Riviera Maya, Mérida y Los Cabos."}
    >
      <Link href={'/departamentos'} className="portada-tulum flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/riviera-maya.mp4" className="absolute video-fondo video object-cover" autoPlay muted playsInline loop></video>
        </div>
        <div className="overlay-tulum h-full w-full absolute">
        </div>
        <div className="video flex justify-center items-center relative">
          <h1 className="text-white font-bold text-center uppercase text-3xl lg:text-6xl letter-spacing-25 text-shadow">Riviera Maya</h1>
        </div>
      </Link>
      <Link href={'/merida'} className="portada-merida-inicio flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/yucatan.mp4" className="absolute video-fondo video object-cover" autoPlay muted playsInline loop></video>
        </div>
        <div className="overlay-tulum h-full w-full absolute">
        </div>
        <div className="video flex justify-center items-center relative">
          <h1 className="text-white font-bold text-center uppercase text-3xl lg:text-6xl letter-spacing-25 text-shadow">Mérida</h1>
        </div>
      </Link>
      <Link href={'/los-cabos'} className="portada-cabos-inicio flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/los-cabos.mp4" className="absolute video-fondo video object-cover" autoPlay muted playsInline loop></video>
        </div>
        <div className="overlay-tulum h-full w-full absolute">
        </div>
        <div className="video flex justify-center items-center relative">
          <h1 className="text-white font-bold text-center uppercase text-3xl lg:text-6xl letter-spacing-25 text-shadow">Los Cabos</h1>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}