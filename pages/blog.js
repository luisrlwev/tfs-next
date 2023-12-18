import Layout from "@/components/layout";
import Post from "@/components/post";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next'

export default function Blog({posts}) {
  // Traducciones
  const { t } = useTranslation()
  return (
    <Layout
      title={"Blog"}
      description={t('blog_descripcion')}
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
        <p className="text-center py-10">{t('descubre')}</p>
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
export async function getStaticProps({ locale }) {
  const respuesta = await fetch(`${process.env.API_URL_BLOG}/posts`)
  const posts = await respuesta.json()

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      posts
    }
  };
}