async (page) => {
  const base = 'http://127.0.0.1:5173';
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + '/en');

  await page.keyboard.press('Tab');
  const firstFocusHref = await page.locator(':focus').getAttribute('href');

  await page.locator('.menu-toggle').click();
  const menuExpanded = await page.locator('.menu-toggle').getAttribute('aria-expanded');

  await page.goto(base + '/en/skills');
  await page.locator('.menu-toggle').click();
  await page.locator('a.locale-switch').click();
  await page.waitForURL('**/fr/competences');
  const localePreserved = page.url().endsWith('/fr/competences');

  await page.goto(base + '/en/projects');
  await page.locator('.media-trigger').first().click();
  const lightboxOpened = await page.locator('dialog[open]').count() === 1;
  await page.keyboard.press('Escape');
  const lightboxClosed = await page.locator('dialog[open]').count() === 0;

  await page.goto(base + '/en/contact');
  const controls = await page.locator('.contact-form input, .contact-form select, .contact-form textarea').count();
  const labels = await page.locator('.contact-form label').count();
  await page.locator('input[name="name"]').fill('Alex Recruiter');
  await page.locator('input[name="email"]').fill('alex@example.com');
  await page.locator('input[name="company"]').fill('Example Corp');
  await page.locator('input[name="role"]').fill('AI Integration Engineer');
  await page.locator('textarea[name="message"]').fill('Let us discuss the role.');
  const mailto = await page.locator('.contact-form a[href^="mailto:"]').getAttribute('href');

  const resumePaths = [
    '/assets/resumes/hasiniaina-ai-rag-automation-en.pdf',
    '/assets/resumes/hasiniaina-ia-rag-automatisation-fr.pdf',
    '/assets/resumes/hasiniaina-full-stack-product-en.pdf',
    '/assets/resumes/hasiniaina-full-stack-produit-fr.pdf',
  ];
  const resumes = [];
  for (const path of resumePaths) {
    const response = await page.request.get(base + path);
    resumes.push({ path, status: response.status(), contentType: response.headers()['content-type'] });
  }

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base + '/en');
  const reducedMotion = await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches);

  const result = {
    firstFocusHref,
    menuExpanded,
    localePreserved,
    lightboxOpened,
    lightboxClosed,
    labelsMatchControls: labels === controls,
    mailtoStructured: Boolean(mailto?.includes('Example%20Corp') && mailto.includes('AI%20Integration%20Engineer')),
    resumes,
    reducedMotion,
  };
  await page.evaluate((audit) => { window.name = JSON.stringify(audit); }, result);
  return result;
}
