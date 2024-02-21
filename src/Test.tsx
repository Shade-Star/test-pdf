import  { useCallback, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function Test() {
    const [searchTexts, setSearchTexts] = useState<string[]>(['a specific position']);
    // const [highlightIndex, setHighlightIndex] = useState(0);
    const [highlightColor, setHighlightColor] = useState('yellow');
    // const highlights = document.querySelectorAll('mark');

    function highlightPattern(text:string, patterns:string[]) {
        let highlightedText = text;
        patterns.forEach(pattern => {
            highlightedText = highlightedText.replace(pattern, (value) => `<mark style="background-color: ${highlightColor};">${value}</mark>`);
        });
        return highlightedText;
    }

    const textRenderer = useCallback(
        (textItem:any) => highlightPattern(textItem.str, searchTexts),
        [searchTexts, highlightColor]
    );

    function onChange(event:any) {
        setSearchTexts(event.target.value.split(','));
    }

    // function goToNextHighlight() {
    //     if (highlightIndex < highlights.length - 1) {
    //         setHighlightIndex(highlightIndex + 1);
    //         highlights[highlightIndex].scrollIntoView();
    //         setHighlightColor('lightblue'); // Change the highlight color when "Next" is clicked
    //     }
    // }
    //
    // function goToPreviousHighlight() {
    //     if (highlightIndex > 0) {
    //         setHighlightIndex(highlightIndex - 1);
    //         highlights[highlightIndex].scrollIntoView();
    //         setHighlightColor('red'); // Change the highlight color when "Next" is clicked
    //
    //     }
    // }

    return (
        <>
            <div>
                <div className="search-div">
                    <label htmlFor="search">Search:</label>
                    <input type="search" id="search" value={searchTexts} onChange={onChange}/>
                </div>
                {/*<button onClick={goToPreviousHighlight}>Previous</button>*/}
                {/*<button onClick={goToNextHighlight}>Next</button>*/}
            </div>
            <Document file={'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf'}>
                <Page
                    pageNumber={1}
                    customTextRenderer={textRenderer}
                />
            </Document>
        </>
    );
}