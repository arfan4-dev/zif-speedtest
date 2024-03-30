import Head from "next/head";
import { primaryFont } from "../lib/fonts";
import { SITE_TITLE } from "@/lib/constants";
import PageOne from "./PageOne";
import PageTwo from "@/components/common/PageTwo";

export default function Home() {


  return (
    <>
      <Head>
        <title>{`${SITE_TITLE}`}</title>
      </Head>
      <main >
        <PageOne />

      </main>
    </>
  );
}
