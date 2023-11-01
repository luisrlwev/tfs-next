import Link from "next/link";
import Layout from "@/components/layout";

export default function Departamentos() {
  return (
    <Layout
      title={"Departamentos"}
      description={"Encuentra los mejores departamentos en la Riviera Maya, Los Cabos y Mérida. Descubre la belleza natural del Caribe mexicano, la tranquilidad de la península de Baja California y la rica cultura de Yucatán. Encuentra opciones en diferentes zonas turísticas, tamaños y precios. ¡Vive en el departamento de tus sueños en México hoy mismo!"}
    >
      <div>Departamentos aqui</div>
      <Link href="/">Inicio</Link>
    </Layout>
  );
}
