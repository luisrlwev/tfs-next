import Layout from "@/components/layout"
import Post from "@/components/post";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Categoria({posts, categoria}) {
    const { name, description } =  categoria;
  return (
    <Layout
      title={`Blogs de ${name}`}
      description={description}
    >
        <div className="container mx-auto py-14 max-lg:py-4 max-lg:px-4">
        <h1 className="text-tfs font-bold text-4xl max-lg:text-2xl mb-6">Todos los blogs de {name}</h1>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4">
            {posts?.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
                ))}
            </div>
        </div>
    </Layout>
  )
}

/* Consultar la API de forma dinamica */
export async function getServerSideProps({ query: { slug }, locale }) {
    // Primero obtiene la categoría para obtener el ID
    const respuestaCategoria = await fetch(`${process.env.API_URL_BLOG}/categories?slug=${slug}`);
    const categorias = await respuestaCategoria.json();
    const categoria = categorias[0] || null;

    // Luego obtiene los posts de esa categoría
    const respuestaPosts = await fetch(`${process.env.API_URL_BLOG}/posts?categories=${categoria.id}&per_page=9`);
    const posts = await respuestaPosts.json();

    return {
        props: {
            posts,
            categoria,
            // Carga y pasa las traducciones necesarias para la página actual y el idioma seleccionado
            ...(await serverSideTranslations(locale)),
        },
    };
}
