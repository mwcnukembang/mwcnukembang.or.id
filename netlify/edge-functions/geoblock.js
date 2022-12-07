export default async function geoBlock(req, { geo }) {
  if (geo.country.code !== 'ID') {
    return;
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <body>
        Sorry, we are unavailable in ${geo.country.name}
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { 'content-type': 'text/html' },
  });
}
