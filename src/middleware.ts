import { NextRequest, NextResponse } from "next/server"


export async function middleware(request: NextRequest) {
    try {

        // หน้าเหล่านี้ไม่ต้องเช็คสถานะการล็อกอิน
        const isPublicPage = request.nextUrl.pathname === '/' || 
                             request.nextUrl.pathname === '/login' || 
                             request.nextUrl.pathname === '/register' || 
                             request.nextUrl.pathname === '/forgot-password' || 
                             request.nextUrl.pathname === '/find-internship' || 
                             request.nextUrl.pathname === '/articles' || 
                             request.nextUrl.pathname === '/contact'
        
        // อ่าน token จาก cookies แทน
        const token = request.cookies.get('accessToken')?.value
        // const token = false // มี token แสดงว่าล็อกอินแล้ว

        // ดูว่าเป็นหน้า public หรือไม่
        // console.log(token, isPublicPage)

        // ถ้ามี token และเข้าหน้า public ให้ redirect ไปหน้า dashboard
        // if(token && isPublicPage){
        //     return NextResponse.redirect(new URL('/user/dashboard', request.nextUrl))
        // }

        // ถ้าไม่มี token และเข้าหน้าที่ต้องล็อกอิน ให้ redirect ไปหน้า login
        if(!token && !isPublicPage){
            return NextResponse.redirect(new URL('/login', request.nextUrl))
        }

        return NextResponse.next()

    }
    catch(error) {
        console.error("Error: ", error)
        return NextResponse.error()
    }
}

export const config = {
    matcher: [
        '/',
        "/login",
        "/register",
        "/forgot-password",
        "/find-internship",
        "/articles",
        "/contact",
        "/user/:path*",
    ]
}