import React from 'react';

import ReadMeImg from '../ReadMeImg';

export interface Props {
    edit_count: number;
    thank_count: number;
    patrol_count: number;
    moved_count: number;
    user_group: string;
}

export const WikipediaStats: React.FC<Props> = ({
    edit_count,
    thank_count,
    patrol_count,
    moved_count,
    user_group,
}) => {

    return (
        <ReadMeImg
            width="420"
            height="220">
            <div id="wrapper">
                <svg
                    version="1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 256"
                    height="210"
                    width="410">

                    <text x="39.257812"
                        y="73.007294"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>Total Edits:
        </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(0,32)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>Patrol:
        </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(0,64)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>Thank:
        </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(0,96)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>Moves:
        </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(0,128)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "bold", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>Group:
        </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(148.8)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>{edit_count}
                    </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(148.8, 32)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>{patrol_count}
                    </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(148.8, 64)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>{thank_count}
                    </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(148.8, 96)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>{moved_count}
                    </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(148.8, 128)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontSize: "23.8933px", lineHeight: "1.25", fontFamily: "Palatino Linotype", fill: "#000000", fillOpacity: 1, stroke: "none" }}>{user_group}
                    </text>

                    <text x="39.257812"
                        y="73.007294"
                        transform="translate(280, 120)"
                        style={{ fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", fontSize: "200px", lineHeight: "1.25", fontFamily: "Linux Libertine Capitals", fill: "#000000", fillOpacity: 1, stroke: "none" }}>W
        </text>
                </svg >
            </div>
            <style>
                {`
          #wrapper {
            display: flex;
            
            flex-wrap: wrap;
          }
          
          #wrapper svg {
            margin-left: 8px;
            margin-top: 8px;
            background: rgb(250, 250, 250);
            box-shadow: 2px 2px 2px rgba(0,0,0,.3);
            border: 1px solid rgba(0,0,0,.01);
            border-radius: 12px;
          }
        `}
            </style>
        </ReadMeImg>
    );
};
