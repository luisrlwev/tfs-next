import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout
      title={"Inicio"}
      description={"Tulumfromsky Realtors es líder en la comercialización de desarrollos inmobiliarios en la Riviera Maya, Mérida y Los Cabos."}
    >
      <h1>Hola mundo en Next</h1>
      <Link href="/departamentos">Depas</Link>
    </Layout>
  );
}
