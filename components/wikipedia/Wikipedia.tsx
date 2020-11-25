import React from 'react';

import ReadMeImg from '../ReadMeImg';
import Text from '../Text';

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
            width="400"
            height="140">
            <Text
                className="title"
                weight="bold"
                size="title"
                color="grey">
                IT Wikipedia Stats
            </Text>
            <table id='icon-wrapper'><tbody>
                <tr>
                    <td><strong>User group: </strong></td>
                    <td>{user_group}</td>
                </tr>
                <tr>
                    <td><strong>Total edits:</strong></td>
                    <td>{edit_count}</td>
                </tr>
                <tr>
                    <td><strong>Patrol:</strong></td>
                    <td>{patrol_count}</td>
                </tr>
                <tr>
                    <td><strong>Moves:</strong></td>
                    <td>{moved_count}</td>
                </tr>
                <tr>
                    <td><strong>Thank:</strong></td>
                    <td>{thank_count}</td>
                </tr>
            </tbody></table>
            <style>{`
          #icon-wrapper {
            display: flex;
            
            flex-wrap: wrap;
          }
          
          svg {
            margin: 12px;
            padding: 8px;
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