export const getStyle = (id) => (
    $.ajax({
        url: `/api/styles/${id}`,
        method: 'get'
    })
);