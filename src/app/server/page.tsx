import Hero from '@/components/user-card';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function ServerPage() {
    const session = await getServerSession(options);

    if(!session) redirect('/api/auth/signin?callbackUrl=/server')
  return (
    <Hero user={session?.user} pagetype='server' />
  )
}

