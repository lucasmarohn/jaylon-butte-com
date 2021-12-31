const whitelistedDomains = " 'self' *.facebook.com connect.facebook.net www.googletagmanager.com google-analytics.com googletagmanager.com connect.facebook.net www.facebook.com *.squarecdn.com squarecdn.com *.googletagmanager.com www.google-analytics.com *.squareup.com squareup.com data: 'unsafe-eval' 'unsafe-inline' connect.facebook.net www.facebook.com *.cloudfront.net"
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src" + whitelistedDomains + "; " + "img-src " + whitelistedDomains + "; " + "script-src " + whitelistedDomains + "; " + "font-src " + whitelistedDomains + "; " + "script-src-elem " + whitelistedDomains + "; "
  }
]
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
