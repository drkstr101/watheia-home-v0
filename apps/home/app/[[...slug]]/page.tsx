import { cache } from 'react';

import { DynamicComponent } from '../../components/components-registry';
import { allContent } from '../../utils/content';
import { resolveStaticProps } from '../../utils/static-props-resolvers';

type Props = { params: { slug?: string[] } };

export async function generateStaticParams() {
  return [{ slug: [] }, { slug: ['about'] }, { slug: ['process'] }, { slug: ['contact'] }];
}

const getData = cache(async (urlPath: string) => {
  const allData = allContent();
  return resolveStaticProps(urlPath, allData);
});

export default async function Page({ params }: Props) {
  const urlPath = '/' + (params.slug || []).join('/');
  const data = await getData(urlPath);

  console.log(data);

  /*
   * Renders a dynamic data-driven page component from data
   */
  return <DynamicComponent {...data} />;
}
