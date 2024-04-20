import "@styles/globals.css";
import Head from "next/head";
import Sidebar from "../components/sidebar";
import Profile from ".././components/profile";

export const metadata = {
  title: "LMl Portal",
  description: "LML repair management",
  image: "favicon.ico",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="flex flex-row w-full">
        <div className="">
          <Sidebar />
        </div>

        <div className="flex flex-col flex-wrap  w-full ">
          <Profile />
          {children}
        </div>
      </body>
    </html>
  );
}
