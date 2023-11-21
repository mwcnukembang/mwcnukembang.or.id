export default async function geoBlock(req, { geo }) {
  if (geo.country.code === 'ID' || geo.country.code === 'US' || geo.country.code === 'CA') {
    return;
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <header>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S4PFSP8XTB"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-S4PFSP8XTB');
        </script>
      </header>
      <body>
        Sorry, we are unavailable in ${geo.country.name}
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { 'content-type': 'text/html' },
  });
}
