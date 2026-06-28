export const API_BASE = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export async function fetchLabel(slug) {
  try {
    const res = await fetch(`${API_BASE}/api/labels?filters[slug][$eq]=${slug}`);
    if (!res.ok) return null;
    const data = await res.json();
    const labelData = data.data?.[0];
    const labelAttrs = labelData?.attributes || labelData;
    return labelAttrs?.text || null;
  } catch {
    return null;
  }
}

export async function fetchPic(imgId) {
  try {
    const res = await fetch(`${API_BASE}/api/pics?filters[img_id][$eq]=${imgId}&populate=*`);
    if (!res.ok) return null;
    const data = await res.json();
    const media = data.data?.[0]?.attributes?.mediaCollection?.data?.[0]?.attributes?.formats?.thumbnail?.url;
    if (!media) return null;
    return media || null;
  } catch {
    return null;
  }
}

export async function fetchStaff() {
  try {
    const res = await fetch(`${API_BASE}/api/staff-srvs`);
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function fetchDownloads() {
  try {
    const res = await fetch(`${API_BASE}/api/downloadings`);
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function fetchAsks() {
  try {
    const res = await fetch(`${API_BASE}/api/asks`);
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function fetchEvents() {
  try {
    const res = await fetch(`${API_BASE}/api/events?populate=*`);
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function fetchTopKrasoti() {
  try {
    const res = await fetch(`${API_BASE}/api/topkrasotis?populate=*`);
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function fetchTopSloznosti() {
  try {
    const res = await fetch(`${API_BASE}/api/topsloznostis?populate=*`);
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function fetchPicWithBase(imgId) {
  const url = await fetchPic(imgId);
  return `${API_BASE}${url}`;
}

export function formatSlug(name) {
  return name.toLowerCase(); //.replace(/\s+/g, '-')
}