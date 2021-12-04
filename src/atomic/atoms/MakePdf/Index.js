import pdfMake from "pdfmake";
import pdfFonts from "./vfs_fonts";
import {useEffect} from "react"

pdfMake.vfs = pdfFonts;

const MakePdf = ({ onLoad, onClick=() => null, children }) => {
    useEffect(() => {
        if(onLoad)
        {
            onLoad( schema => pdfMake.createPdf(schema) )
        }
    }, [])

    return (
        <div onClick={ () => onClick( schema => pdfMake.createPdf(schema) ) }>
            {children}
        </div>
    );
};
export default MakePdf;
