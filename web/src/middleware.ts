import { NextRequest, NextResponse } from 'next/server'
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

  if (!token) {
    return NextResponse.redirect(signInUrl, {
      headers: {
        'Set-Cokkie': `redirectTo=${request.url}; path/; HttpOnly; max-age=10`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
