import { HotTable } from "@handsontable/react"
import "handsontable/dist/handsontable.full.min.css";

type Props = {
  doc: {data: any},
  change: (fn: (doc: {data: any}) => void) => void
}

function Table({ doc, change }: Props) {

  const onBeforeHotChange = (changes) => {
    change((doc) => {
      changes.forEach(([row, column, _ignored, newValue]) => {
        if (column > doc.data[0].length) {
          doc.data[0][column] = "";
        }
        if (!doc.data[row]) {
          doc.data[row] = new Array(column).fill(null);
        }
        doc.data[row][column] = newValue;
      });
    });
    return false;
  };

  return (
      <HotTable
        data={doc.data}
        beforeChange={onBeforeHotChange}
        //beforeCreateRow={onBeforeCreateRow}
        //beforeCreateCol={onBeforeCreateCol}
        rowHeaders={true}
        colHeaders={true}
        contextMenu={true}
        width="100%"
        height="100%"
        autoWrapRow={false}
        autoWrapCol={false}
        licenseKey="non-commercial-and-evaluation"
      />
  )
}

export default Table
