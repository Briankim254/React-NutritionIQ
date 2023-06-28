import client from "@sanity/client";

export default client({
    projectId: "d5ukluc6",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
});