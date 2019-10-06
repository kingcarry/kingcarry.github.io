export interface ExampleState {
    list: Array<{
        id: number,
        text: string,
    }>
}

export const DELETE = 'example/DELETE'

interface DeleteAction {
    type: typeof DELETE,
    payload: number,
}

export type ExampleAction = DeleteAction