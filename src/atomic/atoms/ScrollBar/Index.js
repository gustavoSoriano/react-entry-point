import {ScrollBarStyl} from "./styled"

const ScrollBar = ({ type="y", width, height, children }) => <ScrollBarStyl type={type} width={width} height={height}>{children}</ScrollBarStyl>
export default ScrollBar;
