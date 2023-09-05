export const formatDate = (dateParam: string) => {
    const splitDateParam = dateParam.split("-");
    const dateFormatted = splitDateParam[1] + "/" + splitDateParam[2] + "/" + splitDateParam[0];
    return dateFormatted;
}