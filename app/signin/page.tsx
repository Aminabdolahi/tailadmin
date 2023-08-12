import Link from "next/link";


const SignIn = () => {
    return (
        <div>
        <div className="flex items-center justify-between p-[394px] pt-[135px] gap-20">
            <div className="text-[36px] font-bold ">Sign in</div>
            <div>
                <Link href={"/"} passHref>
                    Home
                </Link>
            </div>
            
        </div>
        <div className="flex items-center justify-center pl-[394px] pt-[135px] gap-20">h</div>
        </div>
    );
}

export default SignIn;