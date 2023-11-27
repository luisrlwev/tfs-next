import Layout from "@/components/layout";
import Post from "@/components/post";

export default function Blog({posts}) {
  return (
    <Layout
      title={"Blog"}
      description={"Descubre el fascinante mundo de los bienes raíces en La Riviera Maya, Los Cabos y Mérida a través de nuestro blog. Encuentra información detallada sobre propiedades, tendencias del mercado, inversiones y estilo de vida en estos destinos turísticos de México. Además, aprende de expertos en el campo inmobiliario y conoce los secretos de la compra, venta y construcción de propiedades en México. ¡Visítanos hoy y conviértete en un experto en bienes raíces de México!"}
    >
      <div className="portada-blog-fondo flex relative justify-center">
        <div className="overlay-nosotros h-full w-full absolute">
        </div>
        <div className="portada-blog flex justify-center items-center relative text-white">
          <div className="grid grid-cols-3 justify-items-center">
            <div className="col-span-3">
              <h1 className="font-bold text-center uppercase letter-spacing-25 text-40 text-shadow pb-10 max-lg:pb-0 max-lg:text-4xl">Blog</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto max-lg:px-3">
        <p className="text-center py-10">Descubre todo lo que necesitas saber sobre el mercado de bienes raíces en la Riviera Maya, Los Cabos y Mérida. En nuestro blog encontrarás consejos, tendencias, noticias y mucho más sobre la compra, venta o renta de propiedades en estas hermosas y prósperas zonas turísticas de México.</p>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4 pb-14">
          {posts?.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}


/* Consultar la API de forma estatica */
export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL_BLOG}/posts`)
  const posts = await respuesta.json()

  return {
    props: {
      posts
    }
  };
}