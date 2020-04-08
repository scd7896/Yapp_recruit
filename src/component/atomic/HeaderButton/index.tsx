import * as React from "react";
import "./index.scss";
type PropsType = {
    generation: number;
    isRecruit: boolean;
};
const HeaderButton = ({ generation, isRecruit }: PropsType) => {
    return (
        <div className="header-button-contents">
            <span>
                현재 {generation}기 {isRecruit ? "모집 중" : "활동 중"}
            </span>
        </div>
    );
};

export default HeaderButton;
