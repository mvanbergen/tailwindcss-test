import { NextResponse } from "next/server";

export async function middleware(req, ev) {
    console.log("middleware invoked...");

    console.log(req.nextUrl.pathname);

    if (req.nextUrl.pathname.includes("/account/")) {
        console.log("Protected resource, must be logged in.")
        //let user = await getServersideUser(req.cookies["sb:token"]);
        var user = null; //just tempoarary for bug test
        if (user == null) {
            console.log("user is null, redirecting to signin page...")
            return NextResponse.redirect('/signin')
        }
        else {
            console.log("user is NOT null, letting request pass through...")
            if (req.nextUrl.pathname.includes("type=recovery")) {
                // console.log("password recovery referral, must reset password")
                // return NextResponse.redirect('/account/login-info');
            }
            else {
                return NextResponse.next();
            }
        }
    }
    else if (req.nextUrl.pathname.includes("/admin/")) {
        console.log("admin url accessed...check group");

        //let user = await getServersideUser(req.cookies["sb:token"]);
        
        const role = req.cookies["role"];
  
        console.log("role=" + role);
        
        if (role == "admin") {
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect('/signin');
        }

    }
    else {
        console.log("NOT a protected resource, passing through...")
        return NextResponse.next();
    }
}