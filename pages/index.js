import { useSession, getSession } from "next-auth/react"
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home() {
  //Grabs the current session of the user
  const {data:session} = useSession();
  console.log(session);
  //If there is no user session, we return the login component 
  if (!session){
    return <Login/>;
  }
  return (
    <div>
      <Head className="h-screen bg-gray-100 overflow-hidden">
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="flex">
        <Sidebar />
        <Feed/>
        <Widgets/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    }
  }
}