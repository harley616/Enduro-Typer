import Link from "next/link"

export default function Home(){
  return(
    <div>
      <h1>Welcome to Enduro Typer!</h1>
      <div>
        <h2>You can login if you want to track your scores</h2>
        <Link href="login">Login</Link>
      </div>
      <Link href="game">Play</Link>
        
    </div>
  )
}