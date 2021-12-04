import { useEffect, useState } from "react";

const InitState = {
    error: false,
    transcript: null,
};

const useSpeechRecognition = (
    interimResults = true,
    lang = "pt-br",
    continuous = false
) => {
    const [state, setState] = useState({ ...InitState });
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
        if (recognition) {
            recognition.interimResults = interimResults;
            recognition.lang = lang;
            recognition.continuous = continuous;
            recognition.start();

            recognition.onresult = function (event) {
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        setState({
                            ...state,
                            transcript: event.results[i][0].transcript.trim(),
                        });
                    }
                }
            };

            recognition.onerror = (error) => setState({ ...InitState, error });
            recognition.onspeechend = () =>
                console.log("Speech recognition has stopped.");
        }
    }, [recognition]);

    useEffect(() => {
        if (!("webkitSpeechRecognition" in window))
            setState({ ...InitState, error: 404 });
        return () => Destroy();
    }, []);

    const Destroy = () => {
        if (recognition) {
            recognition.abort();
        }
    };

    return [
        () => setRecognition(new window.webkitSpeechRecognition()),
        Destroy,
        state,
    ];
};
export default useSpeechRecognition;
