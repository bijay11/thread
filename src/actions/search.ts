'use server';

import { redirect } from 'next/navigation';

export async function search(formDdata: FormData) {
  const term = formDdata.get('term');

  if (typeof term !== 'string' || !term) {
    redirect('/');
  }

  redirect(`/search?term=${term}`);
}
