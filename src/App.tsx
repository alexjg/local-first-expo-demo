import "./App.css"
import { AutomergeUrl } from "@automerge/automerge-repo"
import { useDocument } from "@automerge/automerge-repo-react-hooks"

import { registerAllModules } from 'handsontable/registry';
import Table from "./Table"
registerAllModules()


function App({ docUrl }: { docUrl: AutomergeUrl }) {
  const [doc, change] = useDocument<{ data: any }>(docUrl)

  if (doc == null) {
    return <div>Loading...</div>
  }
  return <Table doc={doc} change={change} />
}

export default App
