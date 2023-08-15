import SvgAlarm from "./svgr/SvgAlarm";
import SvgChatAlt8 from "./svgr/SvgChatAlt8";

const Notifaction = () => {
    return (
        <div className="flex gap-2">
            <button className="bg-gray-200 p-2 rounded-full">
                <SvgAlarm color="gray"/>
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
                <SvgChatAlt8/>  
            </button>
        </div>
    );
}

export default Notifaction;