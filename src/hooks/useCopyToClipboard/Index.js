const useCopyToClipboard = () => (stringValue, onDone = () => null) => {
    const input = document.createElement("textarea");
    input.value = stringValue;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    onDone();
};
export default useCopyToClipboard;
