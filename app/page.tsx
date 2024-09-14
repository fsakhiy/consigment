import { getSession } from '@auth0/nextjs-auth0';

export default async function ProfileServer() {
  const session = await getSession();

  // Type guard to check for session and user
  if (!session || !session.user) {
    return <div>Please <a href="http://localhost:3000/api/auth/login">sign in</a> to view your profile.</div>;
  }

  // Type assertion to ensure that `session.user` is defined
  const { user } = session;

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <a href='http://localhost:3000/api/auth/logout'>log out</a>
    </div>
  );
}
