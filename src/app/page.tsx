import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="pt-28">
      <div className="max-w-6xl flex justify-between mx-auto gap-8">
        {/* sidebar */}
        <Sidebar user={user}/>
        {/* feed */}
        <Feed user={user} />
        {/* news */}
        <News/>
      </div>
    </div>
  );
}
