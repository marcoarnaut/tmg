export const dynamic = 'force-dynamic';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
const STRAPI_API_KEY = process.env.STRAPI_API_KEY;

export async function GET(request) {

    try {
        const response = await fetch(
        `${STRAPI_URL}/api/events?populate=*`,
        {
            headers: {
            'Authorization': `Bearer ${STRAPI_API_KEY}`,
            'Content-Type': 'application/json',
            },
        }
        );

        if (!response.ok) {
        return Response.json(
            { error: 'Failed to fetch from DB' },
            { status: response.status }
        );
        }

        const data = await response.json();
        return Response.json(data.data);
    } catch (error) {
        return Response.json(
        { error: error.message },
        { status: 500 }
        );
    }
}