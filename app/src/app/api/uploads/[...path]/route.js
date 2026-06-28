const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export async function GET(request, { params }) {
  const { path } = await params;
  const pathStr = Array.isArray(path) ? path.join('/') : path;
  
  try {
    const response = await fetch(`${STRAPI_URL}/uploads/${pathStr}`);
    
    if (!response.ok) {
      return new Response('Image not found', { status: 404 });
    }
    
    const contentType = response.headers.get('content-type') || 'image/png';
    const imageBuffer = await response.arrayBuffer();
    
    return new Response(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    return new Response('Error fetching image', { status: 500 });
  }
}