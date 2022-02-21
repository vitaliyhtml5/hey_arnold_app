<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hey Arnold app</title>
    <link rel="shortcut icon" href="img/site/favicon.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Hey Arnold app</h1>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="tools">
                <form class="search-wrap">
                    <span class="material-icons-outlined">search</span>
                    <input type="text" placeholder="Put character name" autofocus>
                    <button>Search</button>
                </form>
                <div class="filter-wrap">
                    <button><span class="material-icons-outlined">filter_alt</span>Filter</button>
                    <div class="dropdown">
                        <fieldset>
                            <legend>Age</legend>
                            <label>All<input type="radio" name="age" value="all" checked><span></span></label>
                            <label>Child<input type="radio" name="age" value="child"><span></span></label>
                            <label>Adult<input type="radio" name="age" value="adult"><span></span></label>
                        </fieldset>
                        <fieldset>
                            <legend>Gender</legend>
                            <label>All<input type="radio" name="gender" value="all" checked><span></span></label>
                            <label>Male<input type="radio" name="gender" value="male"><span></span></label>
                            <label>Female<input type="radio" name="gender" value="female"><span></span></label>
                        </fieldset>
                        <div class="filter-btn">
                            <button>Apply</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <ul class="content-header">
                    <li>Name<span class="material-icons-outlined sort-default">north</span></li>
                    <li>Age</li>
                    <li>Gender</li>
                </ul>
                <div class="table-wrap">
                    <table>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="empty-table"><b></b><button>Show All</button></div>
            </div>
            <div class="pagination">
                <span class="material-icons-outlined">arrow_back_ios</span>
                <div class="page-wrap"></div>
                <span class="material-icons-outlined">arrow_forward_ios</span>
            </div>
        </div>
    </main>
    <script src="js_scripts/script.js" type="module"></script>
</body>
</html>

<!-- http://localhost/app/heyarnold/ -->