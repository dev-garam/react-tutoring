export default function setPath(str, setLeagueId) {
    switch (str) {
        case '/epl':
            setLeagueId(148)
            break
        case '/laliga':
            setLeagueId(468)
            break
        case '/bundes':
            setLeagueId(196)
            break
        case '/ligue1':
            setLeagueId(176)
            break
        case '/serie':
            setLeagueId(262)
            break
        case '/chams':
            setLeagueId(149)
            break
        case '/':
            setLeagueId(148)
            break
        default:
            break
    }
}

function setRange() {}
