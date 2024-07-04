import { notFound } from 'next/navigation';
import { getUserById, users } from '@/data/users';

type Props = {
  params: { id: string }
};

export async function generateStaticParams() {
  return users.map(user => ({
    id: user.id.toString(),
  }));
}

export default function UserPage({ params }: Props) {
  const user = getUserById(Number(params.id));

  if (!user) {
    return notFound();
  }

  return (
    <div>
      <h1>User ID: {user.id}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
