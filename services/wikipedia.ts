import fetch from "isomorphic-unfetch";

//TODO: refactor
const {
    WIKIPEDIA_USER: wikipedia_user,
} = process.env;

/**
 * Retrieve User
 * @returns {Object}
 */
export async function simpleEditCount() {
    const response = await fetch(`https://xtools.wmflabs.org/api/user/simple_editcount/it.wikipedia/${wikipedia_user}`);
    const { status } = response;
    if (status === 204) {
        return {};
    } else if (status === 200) {
        const data = await response.json();
        return data;
    }
};

export async function logCount() {
    const response = await fetch(`https://xtools.wmflabs.org/api/user/log_counts/it.wikipedia/${wikipedia_user}`);
    const { status } = response;
    if (status === 204) {
        return {};
    } else if (status === 200) {
        const data = await response.json();
        return data;
    }
};
