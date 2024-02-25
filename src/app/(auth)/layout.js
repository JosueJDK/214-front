'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Logo } from "@/data/Common";

const AuthLayout = ({children, bgImage}) => {
    const pathname = usePathname();
    const slug = pathname.replace("/", "");

    return ( 
        <div className="axil-signin-area header-unique container">
            <div className="signin-header">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Link href="/" className="site-logo">
                        <Image 
                            src={Logo.dark}
                            height={40}
                            width={157}
                            alt="Logo"
                        />
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="singin-header-btn">
                            <p>{slug === "sign-in" ? "No tienes cuenta?":"Ya tienes cuenta?"}</p>
                            <Link href={slug === "sign-in" ? "/sign-up":"/sign-in"} className="axil-btn btn-bg-secondary sign-up-btn">{slug === "sign-in" ? "Registrarse":"Iniciar Session"}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="axil-signin-form-wrap">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AuthLayout;