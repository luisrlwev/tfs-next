import Head from "next/head"
import HeaderFranquiciaCancun from "./header-franquicia-cancun"
import FooterFranquiciaCancun from "./footer-franquicia-cancun"

export default function LayoutFranquiciaCancun({children, title = '', description= ''}) {
  return (
    <>
        <Head>
            <title>{`${title} - Fromsky Realtors`}</title>
            <meta name="description" content={description}/>
        </Head>
        <HeaderFranquiciaCancun/>
        {children}
        <FooterFranquiciaCancun/>
    </>
  )
}
