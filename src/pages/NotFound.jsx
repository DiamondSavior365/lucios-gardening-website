import { ArrowLeft, Leaf } from 'lucide-react';

import ButtonLink from '../components/ButtonLink.jsx';

function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-[#f7f3ea] px-6 py-20 text-center text-[#13291f] md:px-8">
      <section className="mx-auto max-w-3xl">
        <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-full bg-[#13291f] text-white">
          <Leaf size={34} />
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c7a32]">
          404 Error
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          This page could not be found
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#43594d]">
          The page you are looking for may have moved, been removed, or does not
          exist yet. Return home to continue exploring Lucio&apos;s Gardening.
        </p>

        <ButtonLink to="/" variant="primary" icon={ArrowLeft} className="mt-10">
          Back Home
        </ButtonLink>
      </section>
    </main>
  );
}

export default NotFound;