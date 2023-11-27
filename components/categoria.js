import React from 'react'
import Link from 'next/link';

export default function Categoria({ categoria }) {
    const { name, slug } =  categoria;
  return (
    <div>
        <Link href={`/categorias/${slug}`} className='text-tfs hover'>{name}</Link>
    </div>
  )
}
