import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function CkeditorCpn() {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Hello from CKEditor 5!</p>"
      onInit={(editor: any) => {
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event: any, editor: any) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
      onBlur={(event: any, editor: any) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event: any, editor: any) => {
        console.log("Focus.", editor);
      }}
    />
  );
}

export default CkeditorCpn;
