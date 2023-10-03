import { parseISO, format } from "date-fns"


export const formatTimeStamp = (createdDate: string): string => {
    const formatted = format(parseISO(createdDate), "Mo MMM, yyyy")
    return formatted
}