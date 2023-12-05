import Head from "next/head"
import HeaderReclutamiento from "./header-reclutamiento"
import FooterReclutamiento from "./footer-reclutamiento"

export default function LayoutReclutamiento({children, title = '', description= ''}) {
  return (
    <>
        <Head>
            <title>{`${title} - Tulumfromsky Realtors`}</title>
            <meta name="description" content={description}/>
        </Head>
        <HeaderReclutamiento/>
        {children}
        <FooterReclutamiento/>
    </>
  )
}
