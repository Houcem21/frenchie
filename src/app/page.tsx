import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

import {Layout, Main, Section, Container, Article} from '../components/cta-two';
import CTA from '../components/signin';

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
    {session ? 
      (
        <Main>
          <Section>
            <Container>
              <Article>
                <CTA />
              </Article>
            </Container>
          </Section>
        </Main>
      ) :
      (
        <h1 className='text-5xl flex justify-center items-center fixed w-full h-full'>Not permitted</h1>
      )
    }
    </>
  );
}
