import Editor from "@monaco-editor/react";
import { petstoreYaml } from "./petstore.yaml";

export const PlaygroundEditor = () => {
    return (
        <Editor
            // theme={useColorModeValue("light", "vs-dark")}
            defaultLanguage="typescript"
            defaultValue={petstoreYaml}
            // options={{ minimap: { enabled: true }, readOnly: false }}
            // onMount={(editorRef, monaco) => {
            //     editorRefs.ts = ref(editorRef!);
            //     editorRefs.monaco = monaco!;
            // }}
            // onChange={(value) => {
            //     editorText.current = value!;

            //     const model = editorRefs.ts!.getModel();
            //     if (model) {
            //         const markers = editorRefs.monaco!.editor.getModelMarkers({
            //             resource: model.uri,
            //         });
            //         // = if no errors
            //         if (!markers.length) {
            //             textsProxy.ts = editorText.current;
            //         }
            //     }
            // }}
            // onValidate={(markers) => {
            //     if (markers.length) {
            //         return console.warn("TS Errors", markers);
            //     }
            //     // = if no errors
            //     textsProxy.ts = editorText.current;
            // }}
        />
    );
};
