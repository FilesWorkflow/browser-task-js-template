export default async function(files, params, onProgressMsg) {
    // files: FileList object with the files to process
    // params: Object with the parameters
    // onProgressMsg: Function to send progress messages to the browser

    const result = Promise.all(Array.from(files).map(async(file, index) => {
        const ba = await file.arrayBuffer();
        // Do something with the file
        const processedFile = new File([ba], `processed_${file.name}`);
        onProgressMsg && onProgressMsg(`Processing file ${index + 1} of ${files.length}`);
        return processedFile;
    }));
    return result;
}