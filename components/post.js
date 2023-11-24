import Image from "next/image";
import Link from "next/link";
import { truncateText, stripHtml, formatDate, obtenerMensajeComentarios } from "@/utils/helpers";

export default function Post({ post }) {
  const { featured_image_src, title, excerpt, categories_names, url, date, comments_count } = post;
  return (
    <article>
      <div className="border rounded-lg hover:drop-shadow-md flex flex-col overflow-hidden relative bg-white w-full min-h-full">
        {/* image and avatar block */}
        <div className="cursor-pointer portadas-blog overflow-hidden relative block">
          <Image
            src={featured_image_src}
            alt={title.rendered}
            layout="fill"
            objectFit="cover"
            className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
          />
          <span className="absolute top-4 right-4 items-center bg-tfs text-white flex justify-center rounded-xl text-xs uppercase py-1 px-2">
            {categories_names}
          </span>
        </div>
        {/* card fields section  */}
        <div className="p-4 space-y-2 relative block altura-blog">
          <h2 className="text-tfs text-xl font-bold mb-4">{title.rendered}</h2>
          <p className="text-sm text-black pb-4">{truncateText(stripHtml(excerpt.rendered), 180)}</p>
          <Link href={''} className="uppercase text-tfs font-bold hover">Leer más »</Link>
          {/* fix bottom section */}
        </div>
        <div className="bottom-2 absolute block inset-x-0">
          <div className="border-t mt-2 mb-2"></div>
          <span className="text-xs text-black pl-4">{formatDate(date)} - {obtenerMensajeComentarios(comments_count)} </span>
        </div>
      </div>
    </article>
  );
}
