import Head from "next/head";
import { primaryFont } from "../lib/fonts";
import { SITE_TITLE } from "@/lib/constants";
import PageOne from "./PageOne";
import { Spinner } from '../components/common/Spinner'
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3000)
  })
  return (
    <>
      <Head>
        <title>{`${SITE_TITLE}`}</title>
      </Head>
      <main >

        {
          isLoad ? <Spinner /> : <PageOne />

        }


      </main>
    </>
  );
}
