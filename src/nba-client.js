import nba from 'nba';

// const SERVER_URL = 'http://35.235.84.235:5000';
const SERVER_URL = 'https://nba.laiprojects.com';

export default {
    ...nba,
    stats: {
        ...nba.stats,
        // {} 解构语法
        playerInfo: function ({PlayerID}) {
            return fetch(`${SERVER_URL}/players/${PlayerID}`).then(res => res.json())
        },
        shots: function ({PlayerID}) {
            return fetch(`${SERVER_URL}/players/${PlayerID}/shots`).then(res => res.json())
        },
    },
}