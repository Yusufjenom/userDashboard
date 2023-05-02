import {Typography} from "antd";

const AppFooter = () => {
    return ( <div className="AppFooter">
        <Typography.Link href="tel:+2348068081804">+2348068081804</Typography.Link>
        <Typography.Link href="https://www.instagram.com" target={"_blank"}>Instagram</Typography.Link>
        <Typography.Link href="https://www.tiktok.com" target={"_blank"}>TikTok</Typography.Link>
        
    </div> );
}
 
export default AppFooter;