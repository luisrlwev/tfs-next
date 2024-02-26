import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({children, title = '', description= ''}) {
  return (
    <>
        <Head>
            <title>{`${title} - Fromsky Realtors`}</title>
            <meta name="description" content={description}/>
            <meta name="author" content={"Luis Angel Hernández Castillo"}/>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}
