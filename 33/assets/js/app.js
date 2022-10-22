function pageLoader(page) {
    $.get(`pages/${page}.html`, res => {
        $('#main_content').html(res);
    })
}

$('#nav_list a').click(function (event) {
    event.preventDefault();
    $('#nav_list a.active').removeClass('active')
    $(this).addClass('active');

    pageLoader($(this).attr('href'));
});

$(document).on('click', '.page-link', function (event) {
    event.preventDefault();

    getPage($(this).attr('href'));
});

$(document).on('click', '.show-more', function (event) {
    event.preventDefault();

    showInfo($(this).attr('data-id'));
});

$(document).on('click', '.close-modal', function (event) {
    event.preventDefault();

    closeModal()
});

pageLoader('search');

const URL = 'http://www.omdbapi.com/?&apikey=a7acc2a2'
let PAGE = 1;

function createMovieList(list) {
    let html = '';

    list.forEach(el => {
        html += `<div class="col">
                <div class="card shadow-sm">
                    <img class="w-100" src="${el.Poster && el.Poster != 'N/A' ? el.Poster : 'https://via.placeholder.com/400x600'}" alt="">

                    <div class="card-body">
                        ${el.Title ? '<p class="card-text">' + el.Title + '</p>' : ''}
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary show-more" data-id=${el.imdbID}>View</button>
                            </div>
                            <small class="text-muted">${el.Year}</small>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    $('#cards').html(html)
}

function showError(err) {
    $('#cards').html(`<h2 class='error'>${err}</h2>`)
}

function showPagination() {
    $('.pagination').css('display', 'flex');
}

function hidePagination() {
    $('.pagination').css('display', 'none');
}


function managePagination(results) {
    const totalPages = Math.ceil(results / 10);
    $('#results_count').text(`Results ${PAGE * 10 - 9} - ${PAGE * 10}, from ${results} results,`);
    $('.last-page-link').text(totalPages).attr('href', totalPages);

}

function findAFilm() {
    const query = $('#search').val();

    $.ajax(URL + `&s=${query}&page=${PAGE}`)
        .done(res => {
            if (res.Search && res.totalResults > 0) {
                createMovieList(res.Search);

                if (res.totalResults > 10) {
                    showPagination();
                    managePagination(res.totalResults);
                } else {
                    hidePagination();
                }

            } else {
                showError(res.Error);

                hidePagination();
            }

        })
        .fail(err => {
            showError(err.Error);
        });
}

function getPage(page) {
    if (page) {
        if (page === 'prev' && PAGE) {
            PAGE = PAGE === 1 ? 1 : PAGE - 1;
            findAFilm();
        } else if (page === 'next') {
            PAGE = PAGE + 1;
            findAFilm();
        } else {
            PAGE = page;
            findAFilm();
        }

    };
}

function closeModal() {
    $('.modal').removeClass('open');
}

function showModal(film) {
    let html = `<div class="modal-header">
                    <img class="w-100" src="${film.Poster && film.Poster != 'N/A' ? film.Poster : 'https://via.placeholder.com/400x600'}" alt="">
                    <h5 class="modal-title">${film.Title}</h5>
                </div>
                <div class="modal-body">
                    <p>${film.Plot}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close-modal">Close</button>
                </div>`;

    $('.modal-content').html(html);
    $('.modal').addClass('open');
}

function showInfo(id) {
    $.ajax(URL + `&i=${id}`)
        .done(res => {
            showModal(res)
        })
        .fail(err => {
            showError(err.Error);
        });

};