import PdfViewerWrapper from './PdfViewerWrapper'

export default function Page() {
  return (
    <PdfViewerWrapper
        firstTitle="첨삭"
        secondTitle="해제"
        pdfUrl="http://www.usrap.org/sites/default/files/historical/pdf/usRAP_brochure.pdf"
      />
  )
}
