import { redirect } from 'next/navigation';
import PostList from '@/components/posts/post-list';
import { fetchPostsBySeachTerm } from '@/db/queries/posts';

interface SerachPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({
  searchParams: { term },
}: SerachPageProps) {
  if (!term) {
    redirect('/');
  }

  return <PostList fetchData={() => fetchPostsBySeachTerm(term)} />;
}
