var nameInput = document.getElementById('BookmarkName');
var urlInput = document.getElementById('SiteURL');
var submitBtn = document.querySelector('button');
var bookmarks = [];

if (localStorage.getItem('bookmarksList') != null) {
    bookmarks = JSON.parse(localStorage.getItem('bookmarksList'));
    DisplayList();
}

submitBtn.addEventListener('click', ValidateInputs);
nameInput.addEventListener('input', function () {
    if (IsSiteNameValid(nameInput.value)) {
        nameInput.style.boxShadow = '0 0 5px green';
    }
    else {
        nameInput.style.boxShadow = '0 0 5px red';
    }
})
urlInput.addEventListener('input', function () {
    if (IsSiteURLValid(urlInput.value)) {
        urlInput.style.boxShadow = '0 0 5px green';
    }
    else {
        urlInput.style.boxShadow = '0 0 5px red';
    }
})

function AddBookmark() {
    var bookmark = {
        name: nameInput.value,
        url: urlInput.value
    }

    UpdateList(bookmark);
}

function UpdateList(bookmark) {
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmark.name == bookmarks[i].name) {
            Swal.fire({
                title: "Site With The Same Name Exists",
                text: "Please Change The Name",
                icon: "warning"
            });
            return;
        }
        if (bookmark.url == bookmarks[i].url) {
            Swal.fire({
                title: "Site With The Same URL Exists",
                text: "Please Change The URL",
                icon: "warning"
            });
            return;
        }
    }

    bookmarks.push(bookmark);
    localStorage.setItem('bookmarksList', JSON.stringify(bookmarks));
    ClearInputs();
    DisplayList();
}

function DeleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarksList', JSON.stringify(bookmarks));
    DisplayList();
}

function ValidateInputs() {
    var siteName = nameInput.value;
    var siteUrl = urlInput.value;

    if (!siteName) {
        Swal.fire({
            title: "Site Name Required",
            text: "Please enter a name for the website.",
            icon: "warning"
        });
        return;
    }

    if (!siteUrl) {
        Swal.fire({
            title: "Site URL Required",
            text: "Please enter the URL for the website.",
            icon: "warning"
        });
        return;
    }

    if (!IsSiteNameValid(siteName)) {
        Swal.fire({
            title: "Invalid Site Name",
            text: "Site name must be at least 3 characters long.",
            icon: "warning"
        });
        return;
    }

    if (!IsSiteURLValid(siteUrl)) {
        Swal.fire({
            title: "Invalid URL",
            text: "Please enter a valid URL (Ex: google.com).",
            icon: "warning"
        });
        return;
    }
    AddBookmark();
}

function IsSiteNameValid(siteName) {
    var nameRegex = /^[a-zA-Z0-9]{3,}$/;
    if (!nameRegex.test(siteName))
        return false;
    return true;
}

function IsSiteURLValid(siteUrl) {
    var urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.(com|net|org|co)(\/[^\s]*)?$/;
    if (!urlRegex.test(siteUrl))
        return false;
    return true;
}

function DisplayList() {
    var temp = '';
    for (var i = 0; i < bookmarks.length; i++) {
        temp += `
            <tr>
                <td>${i + 1}</td>
                <td>${bookmarks[i].name}</td>
                <td><button class="btn btn-success btn-md" onclick="window.open('https://www.${bookmarks[i].url}', '_blank')"><i class="fa-solid fa-eye me-2" style="color: #ffffff;"></i>Visit</button></td>
                <td><button class="btn btn-danger btn-md" onclick="DeleteBookmark(${i})"><i class="fa-solid fa-trash-can me-2" style="color: #ffffff;"></i>Delete</button></td>
            </tr>
        `;
    }
    document.getElementById('tableBody').innerHTML = temp;
}

function ClearInputs() {
    urlInput.value = "";
    nameInput.value = "";
}