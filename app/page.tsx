import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function HomePage() {
  const session = await getSession();

  // Type guard to check for session and user
  if (!session || !session.user) {
    // return <div>Please <a href="http://localhost:3000/api/auth/login">sign in</a> to view your profile.</div>;
    redirect('/api/auth/login')
  }

  // Type assertion to ensure that `session.user` is defined
  const { user } = session;

  return (
    <div>
      {/* <img src={user.picture} alt={user.name} /> */}
      <Image 
      src={user.picture}
      alt={user.name}
      height={0}
      width={80}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <a href='/api/auth/logout'>log out</a>
    </div>
  );
}
