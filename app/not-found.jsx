import Link from 'next/link';

const NotFoundPage = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Go back to <Link href="/"><a>Home</a></Link></p>
  </div>
);

export default NotFoundPage;
