import { NowRequest, NowResponse } from '@vercel/node';
import { renderToString } from 'react-dom/server';
import { WikipediaStats } from '../components/wikipedia/Wikipedia';
import { simpleEditCount, logCount } from '../services/wikipedia';

export default async function (req: NowRequest, res: NowResponse) {
    var data = await simpleEditCount();
    let live_edit_count = data['live_edit_count']
    let deleted_edit_count = data['deleted_edit_count']
    let total_edit_count = live_edit_count + deleted_edit_count
    let user_group = data['user_groups'][0]

    data = await logCount();
    data = data['log_counts'];
    let thank_count = data['thanks-thank']
    let moved_count = data['move-move']
    let patrol_count = data['patrol-patrol']

    // Set Headers
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

    // Generating the component and rendering it
    const text = renderToString(
        WikipediaStats({ edit_count: total_edit_count, user_group: user_group, thank_count: thank_count, moved_count: moved_count, patrol_count: patrol_count })
    );

    return res.status(200).send(text);
}