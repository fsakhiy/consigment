import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      welcome to a stock consignment app!

      <Link className="underline" href={'/dashboard'}>click here go get started!</Link>  
    </div>
  )
}