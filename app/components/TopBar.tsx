import Link from "next/link";
import ToggleSwitch from "./darkmode/ToggleSwitch";
import Search from "./searchbar/Search";
import Notification from "./Notifaction";



const TopBar = () => {
    return (
        <>
        <div className="flex justify-between items-center p-[30px] h-[80px] w-full ">
            <Search/>
            <div className="flex gap-10">
            <ToggleSwitch/>
            <Notification/>
            <Link href={"/signin"}>sign in</Link>
            </div >
        </div>
        </>
    );
}

export default TopBar;