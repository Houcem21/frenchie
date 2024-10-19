import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function EditPage() {
    const session = await getServerSession(options);

    if(!session) redirect('/api/auth/signin?callbackUrl=/server')
  return (
    <div>EditPage</div>
  )
}

