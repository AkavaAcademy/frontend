// Vercel Edge Function for IP Whitelisting
// Place this in /api/middleware.ts for Vercel Edge Functions

export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  const url = new URL(request.url);
  
  // Skip IP check for static assets
  if (
    url.pathname.startsWith('/static/') ||
    url.pathname.startsWith('/_next/') ||
    url.pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return new Response(null, { status: 200 });
  }

  // Get the client IP address
  const forwardedFor = request.headers.get('x-forwarded-for');
  const vercelForwardedFor = request.headers.get('x-vercel-forwarded-for');
  const clientIp = 
    vercelForwardedFor?.split(',')[0]?.trim() ||
    forwardedFor?.split(',')[0]?.trim() ||
    'unknown';

  // Get allowed IPs from environment variable
  const allowedIPsEnv = process.env.ALLOWED_IPS || '';
  const allowedIPs = allowedIPsEnv.split(',').map(ip => ip.trim()).filter(Boolean);
  
  // If no IPs are configured, allow all
  if (allowedIPs.length === 0 || !allowedIPsEnv) {
    return new Response(null, { status: 200 });
  }

  // Check if IP is in the whitelist
  const isAllowed = allowedIPs.some(allowedIP => {
    if (clientIp === allowedIP) return true;
    if (allowedIP.includes('/')) {
      return isIPInCIDR(clientIp, allowedIP);
    }
    return false;
  });

  if (!isAllowed) {
    return new Response(
      JSON.stringify({
        error: 'Access Denied',
        message: 'Your IP address is not authorized to access this site.',
        ip: clientIp
      }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  return new Response(null, { status: 200 });
}

function isIPInCIDR(ip: string, cidr: string): boolean {
  try {
    const [subnet, prefixLength] = cidr.split('/');
    const prefix = parseInt(prefixLength, 10);
    if (isNaN(prefix) || prefix < 0 || prefix > 32) return false;
    const ipNum = ipToNumber(ip);
    const subnetNum = ipToNumber(subnet);
    const mask = (0xFFFFFFFF << (32 - prefix)) >>> 0;
    return (ipNum & mask) === (subnetNum & mask);
  } catch {
    return false;
  }
}

function ipToNumber(ip: string): number {
  const parts = ip.split('.');
  if (parts.length !== 4) return 0;
  return parts.reduce((acc, octet) => {
    const num = parseInt(octet, 10);
    if (isNaN(num) || num < 0 || num > 255) return 0;
    return (acc << 8) + num;
  }, 0) >>> 0;
}

