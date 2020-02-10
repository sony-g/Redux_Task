export function getLocalJSON(data) {
    const localJson = data;
    console.log("Local JSON", localJson);
    return new Promise(function (resolve) {
        resolve(localJson);
    });
}