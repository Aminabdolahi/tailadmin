import SvgAlarm from "./svg/SvgAlarm";
import SvgChatAlt from "./svg/SvgChatAlt";

const Notification = () => {
    const chatNotification = 10
    const alarmNotification = 5
    
    return (
        <div className=" relative flex gap-14">
            <div>

             <button className="bg-gray-200 p-2 rounded-full absolute ">
                <SvgAlarm/> 
                {
                    alarmNotification > 0 ? (<div className="absolute -top-1 -right-1 bg-red-500 rounded-full px-1 text-white text-tiny font-extrabold">{alarmNotification}</div>) : null
                } 
            </button>
                </div>
            
            <button className="bg-gray-200 p-2 rounded-full ">
                <SvgChatAlt/> 
                {
                    chatNotification > 0 ? (<div className="absolute -top-1 -right-1 bg-red-500 rounded-full px-1 text-white text-tiny font-extrabold ">{chatNotification}</div>) : null
                } 
            </button>
            
        </div>
    );
}

export default Notification;