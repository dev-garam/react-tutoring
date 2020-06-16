export default function setRange(search) {
    const params = new URLSearchParams(search)
    const to = params.get('to')
    const from = params.get('from')
    if (to && from) {
        const stDate = new Date(to)
        const edDate = new Date(from)
        setRange({ stDate, edDate })
    }
}
