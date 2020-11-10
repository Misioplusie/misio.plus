import React, { ReactElement } from 'react';

import { Page } from '../components/page';

export default function NotFound(): ReactElement {
  return <Page subtitle="Błąd 404">
    <main>
      <h1>
        Błąd 404
        <small className="block">Strony, nie znaleziono...</small>
      </h1>
      <p>Cefeon tu był i coś zepsuł... Liferiet się z nim rozprawi.</p>
    </main>
  </Page>;
}
