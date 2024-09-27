// import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect('/dashboard')
  // return (
  //   <div>
  //     welcome to a stock consignment app!

  //     <Link className="underline" href={'/dashboard'}>click here go get started!</Link>  
  //   </div>
  // )
}