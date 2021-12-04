import {useEffect, useState} from "react";

const WebWorker = ({ variables, execute, awaiting, handleError, result }) => {
  const [render, setRender] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const worker = new Worker(
      URL.createObjectURL(
        new Blob(
          [
            `
              self.addEventListener('message', async e => {
                self.postMessage( await ( ${execute.toString()} )(self, e.data) )
              })
            `
          ],
          { type: "text/js" }
        )
      )
    );

    worker.addEventListener("message", ({ data }) => setRender(data));
    worker.addEventListener("error", () => setError(true), false);
    worker.postMessage(variables);

    return () => worker.terminate();
  }, []);

  return error ? handleError(error) : render ? result(render) : awaiting();
};
export default WebWorker;
