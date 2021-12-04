import {PrintStyl} from "./styled"

const Print = ({ children, json = false, log = false }) => {
  return log ? (
    (() => {
      console.log(children);
      return null;
    })()
  ) : (
    <PrintStyl>
      <pre>
        {json ? JSON.stringify(children, null, 2) : children}
      </pre>
    </PrintStyl>
  );
};
export default Print;
