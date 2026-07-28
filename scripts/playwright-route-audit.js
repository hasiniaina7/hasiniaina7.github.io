async (page) => {
  const base = 'http://127.0.0.1:5173';
  const routes = [
    '/en', '/en/projects', '/en/skills', '/en/agentic-delivery', '/en/experience', '/en/contact',
    '/fr', '/fr/projets', '/fr/competences', '/fr/orchestration-agentique', '/fr/parcours', '/fr/contact',
  ];
  const rows = [];

  for (const route of routes) {
    await page.goto(base + route);
    await page.locator('h1').first().waitFor();
    rows.push({
      route,
      url: page.url().replace(base, ''),
      lang: await page.locator('html').getAttribute('lang'),
      h1: await page.locator('h1').count(),
      canonical: await page.locator('link[rel="canonical"]').getAttribute('href'),
      en: await page.locator('link[rel="alternate"][hreflang="en"]').getAttribute('href'),
      fr: await page.locator('link[rel="alternate"][hreflang="fr"]').getAttribute('href'),
      switchHref: await page.locator('a.locale-switch').getAttribute('href'),
      jsonLd: await page.locator('script[data-portfolio-person]').count(),
    });
  }

  const redirects = [];
  for (const route of ['/', '/projets', '/competences', '/methode', '/parcours', '/contact', '/unknown-path']) {
    await page.goto(base + route);
    await page.waitForTimeout(100);
    redirects.push({ from: route, to: page.url().replace(base, '') });
  }

  await page.goto(base + '/en');
  await page.locator('.site-footer a[href="/en/projects"]').click();
  await page.waitForURL('**/en/projects');
  const clientNavigation = page.url().replace(base, '');

  await page.goto(base + '/en/agentic-delivery');
  const videoCta = await page.getByText('Agentic Delivery demonstration', { exact: true }).count();

  const result = { rows, redirects, clientNavigation, videoCta };
  await page.evaluate((audit) => console.info(`ROUTE_AUDIT ${JSON.stringify(audit)}`), result);
  await page.evaluate((audit) => { window.name = JSON.stringify(audit); }, result);
  return result;
}
