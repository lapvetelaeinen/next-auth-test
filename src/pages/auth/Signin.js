import { signIn } from 'next-auth/react'
 
const Header = () => {
  return (
    <header>
      <nav>
        <button onClick={() => signIn()}>Sign in</button>
      </nav>
    </header>
  )
}
 
export default Header