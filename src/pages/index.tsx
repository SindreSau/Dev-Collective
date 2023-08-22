import Head from "next/head";
import TermTable from "@/components/organisms/TermTable";

import NewTermDialog from "@/components/organisms/NewTermDialog";

export default function Techitpedia() {
  return (
    <>
      <Head>
        <title>Techitpedia</title>
        <meta name="Description" content="Created by SindreSau" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <AuthShowcase /> */}
      {/* Create new term */}
      <section>
        <NewTermDialog />
      </section>
      <section>
        <TermTable />
      </section>
    </>
  );
}

/* function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Button
        variant={"secondary"}
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
} */
