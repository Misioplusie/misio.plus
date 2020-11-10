import { ReactElement, ReactNode } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

interface PageProperties {
  readonly children: ReactNode;
  readonly slug?: string;
  readonly subtitle: string;
}

export function Page(props: PageProperties): ReactElement {
  return <>
    <Header subtitle={props.subtitle} page={props.slug} />

    {props.children}

    <Footer />
  </>;
}
