async (page) => {
  const base = 'http://127.0.0.1:5173';
  const routes = [
    '/en', '/en/projects', '/en/skills', '/en/agentic-delivery', '/en/experience', '/en/contact',
    '/fr', '/fr/projets', '/fr/competences', '/fr/orchestration-agentique', '/fr/parcours', '/fr/contact',
  ];
  const widths = [360, 390, 430, 768, 1024, 1280, 1440];
  const failures = [];
  const checks = [];
  const jobs = widths.flatMap((width) => routes.map((route) => ({ width, route })));
  let nextJob = 0;

  const runWorker = async () => {
    const auditPage = await page.context().newPage();
    while (nextJob < jobs.length) {
      const job = jobs[nextJob++];
      await auditPage.setViewportSize({ width: job.width, height: 900 });
      await auditPage.goto(base + job.route);
      await auditPage.locator('h1').first().waitFor();
      const layout = await auditPage.evaluate(() => ({
        viewport: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        h1Count: document.querySelectorAll('h1').length,
      }));
      const passed = layout.scrollWidth <= layout.viewport && layout.bodyScrollWidth <= layout.viewport && layout.h1Count === 1;
      checks.push({ ...job, ...layout, passed });
      if (!passed) failures.push({ ...job, ...layout });
    }
    await auditPage.close();
  };

  await Promise.all([runWorker(), runWorker(), runWorker(), runWorker()]);

  const result = { checkCount: checks.length, failures, passed: failures.length === 0 };
  await page.evaluate((audit) => { window.name = JSON.stringify(audit); }, result);
  return result;
}
