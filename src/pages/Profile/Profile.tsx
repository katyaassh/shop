import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

interface IProps {}

export const Profile: React.FC<IProps> = () => {
    return <div>
        <ProfileInfo/>
        Profile
    </div>
}
