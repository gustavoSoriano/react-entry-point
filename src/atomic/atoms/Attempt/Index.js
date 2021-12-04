const Attempt = ({ attempt, recover }) => (() => {
    try {
        return attempt()
    } catch (err) {
        return recover(err)
    }
})()
export default Attempt;
