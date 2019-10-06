import { DELETE } from "./types";

export const deleteOne = (id: number) => {
    return {
        type: DELETE,
        payload: id,
    }
}