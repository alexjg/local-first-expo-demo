import "./App.css"
import { AutomergeUrl } from "@automerge/automerge-repo"
import { useDocument } from "@automerge/automerge-repo-react-hooks"

import { registerAllModules } from 'handsontable/registry';
registerAllModules()


function App({ docUrl }: { docUrl: AutomergeUrl }) {

  return <div>
      Hello world
  </div>
}

export default App
