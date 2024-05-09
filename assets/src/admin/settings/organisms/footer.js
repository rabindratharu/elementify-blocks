/*Inbuilt Components*/
import SaveBtn from "../atoms/save-btn";


const SettingsFooter = () => {
    return (
        <footer className="blockwheels-footer">
            <div className="flex">
                <div className="blockwheels-button">
                    <SaveBtn />
                </div>
            </div> 
       </footer>
    );
};

export default SettingsFooter;