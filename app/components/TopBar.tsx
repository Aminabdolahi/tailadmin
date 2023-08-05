import ToggleSwitch from "./darkmode/ToggleSwitch";
import Search from "./search/Search"

const TopBar = () => {
    return (
        <div className="flex items-center gap-4">
            <Search/>
            <ToggleSwitch/>
        </div>
    );
}

export default TopBar;