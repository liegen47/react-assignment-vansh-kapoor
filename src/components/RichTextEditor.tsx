import { useState, useEffect, useMemo, useRef } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { UserData } from "../types";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Info } from "lucide-react";

function RichTextEditor() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [content, setContent] = useState("");
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    }),
    []
  );

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>
            Rich Text Editor{" "}
            <Tooltip>
              <TooltipTrigger>
                <Info size={12} className="ml-2 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent className="w-64">
                <p>
                  Visualize user data in a rich text editor with formatting
                  options (bold, italic, underline, lists). Ensures data
                  persistence.
                </p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            className="h-64 mb-12"
          />
        </CardContent>
      </Card>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>
            Result{" "}
            <Tooltip>
              <TooltipTrigger>
                <Info size={12} className="ml-2 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent className="w-64">
                <p>Visualize user data.</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {userData && (
            <div className="mb-4">
              <h3 className="font-semibold">User Details:</h3>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default RichTextEditor;
