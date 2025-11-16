// Vercel Edge Middleware for IP Whitelisting
// This runs at the edge before requests reach your application

export default function middleware(request: Request) {
  const url = new URL(request.url);
  
  // Skip IP check for static assets
  if (
    url.pathname.startsWith('/static/') ||
    url.pathname.startsWith('/_next/') ||
    url.pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return;
  }

  // Get the client IP address
  // Vercel provides the real IP in x-forwarded-for or x-vercel-forwarded-for
  const forwardedFor = request.headers.get('x-forwarded-for');
  const vercelForwardedFor = request.headers.get('x-vercel-forwarded-for');
  const clientIp = 
    vercelForwardedFor?.split(',')[0]?.trim() ||
    forwardedFor?.split(',')[0]?.trim() ||
    'unknown';

  // Get allowed IPs from environment variable
  // Format: "1.2.3.4,5.6.7.8,9.10.11.12" (comma-separated)
  const allowedIPsEnv = process.env.ALLOWED_IPS || '';
  const allowedIPs = allowedIPsEnv.split(',').map(ip => ip.trim()).filter(Boolean);
  
  // If no IPs are configured, allow all (for development/testing)
  if (allowedIPs.length === 0 || !allowedIPsEnv) {
    return;
  }

  // Check if IP is in the whitelist
  const isAllowed = allowedIPs.some(allowedIP => {
    // Support exact IP match
    if (clientIp === allowedIP) return true;
    
    // Support CIDR notation (e.g., 192.168.1.0/24)
    if (allowedIP.includes('/')) {
      return isIPInCIDR(clientIp, allowedIP);
    }
    
    return false;
  });

  if (!isAllowed) {
    console.log(`🚫 Blocked access from IP: ${clientIp} to ${url.pathname}`);
    
    // Return 403 Forbidden
    return new Response(
      JSON.stringify({
        error: 'Access Denied',
        message: 'Your IP address is not authorized to access this site.',
        ip: clientIp
      }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  console.log(`✅ Allowed access from IP: ${clientIp} to ${url.pathname}`);
}

// Helper function to check if IP is in CIDR range
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

// Helper function to convert IP to number
function ipToNumber(ip: string): number {
  const parts = ip.split('.');
  if (parts.length !== 4) return 0;
  return parts.reduce((acc, octet) => {
    const num = parseInt(octet, 10);
    if (isNaN(num) || num < 0 || num > 255) return 0;
    return (acc << 8) + num;
  }, 0) >>> 0;
}
