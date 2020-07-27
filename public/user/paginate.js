function paginate(selectedPage, totalPages){
    let pages = [], oldPage

    for(let currentPage = 1; currentPage <= totalPages; currentPage++){
        const firstAndLast = currentPage == 1 || currentPage == totalPages
        
        //check for page between the interval selectedPage +/- 1 
        const pageAfter = currentPage <= selectedPage + 1
        const pageBefore = currentPage >= selectedPage - 1

        if(firstAndLast || pageBefore && pageAfter){
            if(oldPage && currentPage - oldPage > 1){
                pages.push("...")
            }
            pages.push(currentPage)
            oldPage = currentPage
        }
    }
    return pages
}

function createPagination(pagination){
    const total = +pagination.dataset.total
    const page = +pagination.dataset.page
    const filter = pagination.dataset.filter
    const pages = paginate(page,total)

    let paginateEl = ""
    for(let page of pages){
        
        if(String(page).includes("...")){
            paginateEl += `<span>${page}</span>`
        }
        else{
            if(filter){
                paginateEl += `<a href="?page=${page}&filter=${filter}">${page}</a>`
            }
            else{
                paginateEl += `<a href="?page=${page}">${page}</a>`
            }
        }
    }
    pagination.innerHTML = paginateEl
}

const pagination = document.querySelector('.pagination')
if(pagination) createPagination(pagination)