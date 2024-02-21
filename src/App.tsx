
import './App.css'
import Test from "./Test.tsx";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();
function App() {

  return (
    <>
      <Test />
    </>
  )
}

export default App
