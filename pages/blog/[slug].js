import Layout from "@/components/layout";
import Categoria from "@/components/categoria";
import Image from "next/image";
import { obtenerMensajeComentarios, formatDate, stripHtml } from "@/utils/helpers";

export default function Post({post, categorias}) {
    if (!post) {
      return <div>No se encontró el post</div>;
    }

    const { featured_image_src, title, content, date, comments_count, excerpt} = post;
  return (
    <Layout
      title={title.rendered}
      description={stripHtml(excerpt.rendered)}
    >
        <article className="container mx-auto grid grid-cols-6 max-lg:grid-cols-1 py-16 max-lg:py-0">
            <div className="col-span-4 px-20 max-lg:px-4 py-16 max-lg:py-5 bg-sexto">
              <Image
              src={featured_image_src}
              alt={title.rendered}
              width={753}
              height={430}
              className="rounded-md mb-6 w-full"
              />
              <h1 className="text-tfs font-bold mb-4 text-3xl max-lg:text-2xl">{title.rendered}</h1>
              {/* Utiliza 'dangerouslySetInnerHTML' para renderizar HTML */}
              <div className="text-base text-black pb-4 text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
              <div className="border-t mt-2 mb-2"></div>
              <span className="text-xs text-black pl-4">{formatDate(date)} - {obtenerMensajeComentarios(comments_count)} </span>
            </div>
            <div className="col-span-2 px-14 max-lg:px-0">
              <div className="bg-sexto p-6 mb-10 max-lg:mb-0">
                <h3 className="text-tfs font-bold text-xl">Entradas Recientes</h3>
              </div>
              <div className="bg-sexto p-6 mb-10 max-lg:mb-0">
                <h3 className="text-tfs font-bold text-xl">Comentarios Recientes</h3>
              </div>
              <div className="bg-sexto p-6">
                <h3 className="text-tfs font-bold text-xl mb-3">Categorías</h3>
                {categorias?.map(categoria => (
                  <Categoria
                    key={categoria.id}
                    categoria={categoria}
                  />
                ))}
              </div>
            </div>
        </article>
    </Layout>
  );
}

/* Consultar la API de forma dinamica */
export async function getServerSideProps({ query: { slug } }) {
    const respuesta = await fetch(`${process.env.API_URL_BLOG}/posts?slug=${slug}`);
    const posts = await respuesta.json();
    const post = posts[0]; // Selecciona el primer post del array

    const respuestaCategorias = await fetch(`${process.env.API_URL_BLOG}/categories`)
    const categorias = await respuestaCategorias.json()

    return {
        props: {
            post: post || null, // Asegúrate de que 'post' no sea undefined
            categorias
        },
    };
}