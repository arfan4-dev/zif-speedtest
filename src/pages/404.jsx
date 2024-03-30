import Head from "next/head";
import { primaryFont } from "../lib/fonts";
import { SITE_TITLE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${SITE_TITLE} - Not Found`}</title>
      </Head>
      <main className={`${primaryFont.className}`}>
        <h2>Page not found</h2>
        {/* <Link href="/">Home</Link> */}
      </main>
    </>
  );
}
