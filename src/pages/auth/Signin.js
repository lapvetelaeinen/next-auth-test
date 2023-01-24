import { useState } from 'react'
import { signIn } from 'next-auth/react'
 
const SignInForm = () => {
  const [email, setEmail] = useState('')
 
  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        onClick={() => signIn('email', { email, callbackUrl: '/foo' })}
      >
        Sign in with Email
      </button>
    </form>
  )
}
 
export default SignInForm