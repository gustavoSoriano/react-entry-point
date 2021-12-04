
import { useState, useRef } from 'react'
import xlsx from 'xlsx'
import papaparse from 'papaparse'
import DropZone from "../DropZone/Index"

const CsvXlsProcess = ({ onAwaiting, onFinish, onError, children }) => {
    const [awating, setAwating] = useState(false)
    const input = useRef(null);

    const processCsv = file => {
        papaparse.parse(file, {
            worker: true,
            complete: async results => {
                if(results.meta.aborted)return onError(results.erros)

                onFinish({
                    file, 
                    headers: results.data.shift(), 
                    content: results.data, 
                    delimiter: results.meta.delimiter, 
                    meta:results.meta, 
                    errors: results.erros
                })

                setAwating(false)
            }
        })
    }

    const processXls  = file => {
        const Reader  = new FileReader()
        Reader.onload = _ => {
            const workbook = xlsx.read( _.target.result, {type: 'binary'})
            
            if( workbook.SheetNames.length > 1 )
            {
                console.log("Há várias abas", workbook.SheetNames)
            }

            const content = xlsx.utils.sheet_to_row_object_array(workbook.Sheets[
                workbook.SheetNames[0]
            ])

            processCsv(
                new File([
                    new Blob([ papaparse.unparse( content ) ], {type: 'text/csv'})
                ], file.name, {type: 'text/csv'})
            )
        }
        Reader.onerror = console.error
        Reader.readAsBinaryString(file)
    }

    const handleUpload = file => {
        setAwating(true)
        if( file.type === "text/csv" )
        {
            processCsv(file)
        }
        else
        {
            processXls(file)
        }
        input.current.value = ""
    }

    return awating ? onAwaiting() : (
        <>
            <input
                ref={input}
                type="file"
                onChange={ ({ target }) => handleUpload(target.files[0]) }
                accept={".csv, .xls, .xlsx, .xlsm"}
                style={{ display: "none" }}
                multiple
            />
    
            <DropZone over={ () => null } leave={ files => handleUpload(files[0]) }>
                <div onClick={() => input.current.click()}>{children}</div>
            </DropZone>
        </>
    )
}
export default CsvXlsProcess;
