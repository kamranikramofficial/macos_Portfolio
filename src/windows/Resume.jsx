import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Download } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { pdfjs, Page, Document } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const viewerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(450);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const updateWidth = () => {
      const containerWidth = viewerRef.current?.clientWidth ?? 900;
      const nextWidth = Math.min(500, Math.max(400, containerWidth - 40));
      setPageWidth(nextWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (viewerRef.current) {
      resizeObserver.observe(viewerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateWidth);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="/files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div ref={viewerRef} className="window-body resume-scroll">
        <Document
          file="/files/resume.pdf"
          onLoadSuccess={({ numPages: totalPages }) => setNumPages(totalPages)}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`resume-page-${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              renderTextLayer
              renderAnnotationLayer
            />
          ))}
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
