import React, { ReactElement } from 'react';

import { Footer, Header } from '../partials';

export default function NotFound(): ReactElement {
  return <>
    <Header />

    <main>
      <h1>
        Błąd 404
        <small className="block">Strony, nie znaleziono...</small>
      </h1>
      <p>Cefeon tu był i coś zepsuł... Liferiet się z nim rozprawi.</p>
    </main>

    <Footer />
  </>;
}
