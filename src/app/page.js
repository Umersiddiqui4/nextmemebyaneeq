
import Link from "next/link";

export default async function Home() {
  const res= await fetch ("https://api.imgflip.com/get_memes")
  const response = await res.json()
  return (
    <main >
      <h2 className="text-center text-5xl font-extrabold pt-3 ">Dashboard</h2>
      {/* <Link href="dashboard">Dashboard</Link>
      <Link href="about-us">About us</Link> */}

      <div className="flex items-center flex-wrap pt-8 ">
        {response.data.memes.map((item,index)=> {
          return(
            <div  key={index} >
            {/* <h2>{item.id}</h2>
            <h2>{item.name}</h2> */}
            <Link href={`meme-detail?url=${item.url}`}> 
            <img  className=" h-80 w-100 border-violet-400 border-4 hover:opacity-25  " src={item.url}/> 
            {/* <h2>{item.name}</h2> */}
            </Link>
            
            </div>
          )
          
        })}
      </div>

    
    </main>
  );
}
