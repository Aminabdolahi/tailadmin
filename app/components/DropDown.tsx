import { MessageType } from "./types";
import { notifications } from "../links/notifications";




const DropDown = () => {
    
    
    return (
        <div className="absolute top-1 right-1  w-[320px] overflow-y-clip shadow  my-9 ">
            <div className="text-[#8A99AF] text-start px-5 border py-3 relative">
                <span >Notification</span>
            </div>
            <div className="flex-col text-start px-5 border py-3">
                {
                    notifications.map((item: MessageType ) => {
                        return (
                            <div key = {item.key} className="border-b w-full">
                                <span className="font-bold text-24 ">{item.title}</span>
                                <span>{item.content}</span>
                            </div>
                        )  
                        })}
            </div>
        </div>
    );
}

export default DropDown;