import { fetchEntries } from "./getEntries";

console.info('Prebuild started...');

/* Write here procedures to execute before the build */
Promise.all([
    fetchEntries()
]).then(() => console.info('Prebuild done!'));