// كود لجعل السلايد تطلع وتدخل
let slideListWidth = $(".slideListWidth").innerWidth();
// console.log(slideListWidth);
$(".slideParent").css("left", `-${slideListWidth}`);
$(".slideClick").click(function () {
    let curSlideParentWidth = $(".slideParent").css("left");
    if (curSlideParentWidth == "0px") {
        console.log("ed5ool")
        $(".slideParent").animate({ left: `-${slideListWidth}` }, 500);

        $(".slideClick").removeClass("fa-times");
        $(".slideClick").addClass("fa-bars");
        $("#list").removeClass("animate__bounceInUp")

    } else {
        console.log("etlaa3")
        $(".slideParent").animate({ left: "0px" }, 500);
        $(".slideClick").removeClass("fa-bars");
        $(".slideClick").addClass("fa-times");
        $("#list").addClass("animate__bounceInUp")
    }
})

// 

let regexName = /^[a-zA-Z]{2}([a-zA-Z](\s)?){1,30}[a-zA-Z]{3}$/;
let regexEmail1 = /^[a-z].?([a-z0-9]{1}\.?){5,30}@[a-z]{2,15}\.[a-z]{2,10}$/;
let regexPhone = /^((\+)[0-9]{1,2})?(01)[0-9]{9}$/
let regexAge = /^(([1-9][2-9])|(100))$/;
let regexPss = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

let nameVal;
let emailVal;
let phoneVal;
let ageVal;
let passVal;
let rePassVall;

// فانكشن للتاكد من صحة الاسم
function nameValid() {
    if (regexName.test(nameVal)) {
        // console.log("yes");
        $("#nameInput").removeClass("is-invalid");
        $("#nameInput").addClass("is-valid")
        $("#nameVldMsg").addClass("d-none");
        return true;
    } else {
        // console.log("no");
        $("#nameInput").removeClass("is-valid");
        $("#nameInput").addClass("is-invalid");
        $("#nameVldMsg").removeClass("d-none");
        return false;
    }
}
// كود لاخد الاسم الذي ادخلها المستخدم والمناداه على فانكشن التاكد
$("#nameInput").keyup(function () {
    nameVal = $("#nameInput").val();
    nameValid();
})

// فانكشن للتاكد من صحة الايميل
function emailValid() {
    if (regexEmail1.test(emailVal)) {
        // console.log("yes");
        $("#emailInput").removeClass("is-invalid");
        $("#emailInput").addClass("is-valid")
        $("#emailVldMsg").addClass("d-none");
        return true;
    } else {
        // console.log("no");
        $("#emailInput").removeClass("is-valid");
        $("#emailInput").addClass("is-invalid")
        $("#emailVldMsg").removeClass("d-none");
        return false;
    }
}
// كود لاخد الايميل الذي ادخلها المستخدم والمناداه على فانكشن التاكد
$("#emailInput").keyup(function () {
    emailVal = $("#emailInput").val();
    emailValid();
})

function phoneValid() {
    if (regexPhone.test(phoneVal)) {
        // console.log("yes");
        $("#phoneInput").removeClass("is-invalid")
        $("#phoneInput").addClass("is-valid")
        $("#phoneVldMsg").addClass("d-none");
        return true;
    } else {
        // console.log("no");
        $("#phoneInput").removeClass("is-valid")
        $("#phoneInput").addClass("is-invalid")
        $("#phoneVldMsg").removeClass("d-none");
        return false;
    }
}

$("#phoneInput").keyup(function () {
    phoneVal = $("#phoneInput").val();
    phoneValid();
})


function ageValid() {
    if (regexAge.test(ageVal)) {
        console.log("yes");
        $("#ageInput").removeClass("is-invalid")
        $("#ageInput").addClass("is-valid")
        $("#ageVldMsg").addClass("d-none");
        return true;
    } else {
        console.log("no");
        $("#ageInput").removeClass("is-valid")
        $("#ageInput").addClass("is-invalid")
        $("#ageVldMsg").removeClass("d-none");
        return false;
    }
}

$("#ageInput").keyup(function () {
    ageVal = $("#ageInput").val();
    ageValid();
})


function passValid() {
    if (regexPss.test(passVal)) {
        console.log("yes");
        $("#passInput").removeClass("is-invalid")
        $("#passInput").addClass("is-valid")
        $("#passVldMsg").addClass("d-none");
        return true;
    } else {
        console.log("no");
        $("#passInput").removeClass("is-valid")
        $("#passInput").addClass("is-invalid")
        $("#passVldMsg").removeClass("d-none");
        return false;
    }
}

$("#passInput").keyup(function () {
    passVal = $("#passInput").val();
    passValid();
})


function rePassValid() {
    if (rePassVall == passVal) {
        console.log("yes");
        $("#rePassInput").removeClass("is-invalid")
        $("#rePassInput").addClass("is-valid")
        $("#rePassVldMsg").addClass("d-none");
        return true;
    } else {
        console.log("no");
        $("#rePassInput").removeClass("is-valid")
        $("#rePassInput").addClass("is-invalid")
        $("#rePassVldMsg").removeClass("d-none");
        return false;
    }
}
$("#rePassInput").keyup(function () {
    rePassVall = $("#rePassInput").val();
    rePassValid();
})

// كود للتحقق اذا كانت جميع البيانات المدخلة صحيحة يقوم باظهار الزر
$(".inputForm").keyup(function () {
    if (nameValid() && emailValid() && phoneValid() && ageValid() && passValid() && rePassValid()) {
        $(".btn").removeClass("disabled")
    } else {
        $(".btn").addClass("disabled")
    }
})



let pageNum = 1;
let now_playing = "now_playing";
let popular = "popular";
let top_rated = "top_rated";
let trending = "trending";
let upComing = "upcoming";

let listApi = "now_playing";

$("#nowPlaying").click(function () {
    $(".header").text("Now Playing");
    listApi = now_playing;
    $("#one").click(function(){
        pageNum = 1;
    })
    $("#two").click(function(){
        pageNum = 2;
    })
    $("#three").click(function(){
        pageNum = 3;
    })
    (function () {
        callMovies();
    })()
    // console.log("listApi")
})
$("#popular").click(function () {
    $(".header").text("Popular");
    listApi = popular;
    (function () {
        callMovies();
    })()
    // console.log("listApi")
})
$("#topRated").click(function () {
    $(".header").text("Top Rated");
    listApi = top_rated;
    (function () {
        callMovies();
    })()
    // console.log("listApi")
})

$("#trending").click(function () {
    $(".header").text("Trending");
    listApi = trending;
    (function () {
        callTrendMovies();
    })()
})
$("#upComing").click(function () {
    $(".header").text("Up Coming");
    listApi = upComing;
    (function () {
        callMovies();
    })()
})


let myData;
let movieInfo;
async function callMovies() {
    myData = await fetch(`https://api.themoviedb.org/3/movie/${listApi}?api_key=8f4ebbb5c6f6d4b42a491b41ec7ff8ee&language=en-US&page=${pageNum}`)
    myData = await myData.json();
    movieInfo = myData.results;
    // console.log(movieInfo.length)
    // console.log(movieInfo[0].title)
    displayAllMovies()
}
(function () {
    callMovies();
})()

let movieTitle;
let movieDate;
async function callTrendMovies() {
    myData = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8f4ebbb5c6f6d4b42a491b41ec7ff8ee&page=${pageNum}`)
    myData = await myData.json();
    movieInfo = myData.results;

    // if(movieInfo[1].title == undefined){
    //     console.log(movieInfo[1].name)
    // }else{
    //     console.log(movieInfo[1].title)
    // }
    displayAllMovies()
}

let searchWord;
let imgMovie;
$("#searchInApi").keyup(function () {
    searchWord = $(this).val();
    (function () {
        searchMovies();
    })()
    // console.log(searchWord)
})
async function searchMovies() {
    myData = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8f4ebbb5c6f6d4b42a491b41ec7ff8ee&query=${searchWord}&include_adult=false`)
    myData = await myData.json();
    movieInfo = myData.results;
    console.log("===>" + movieInfo[1].poster_path)
    displayAllMovies();
}

let titleArr = [];
let searchArr;
$("#searchInArr").keyup(function () {
    searchArr = $(this).val().toLowerCase();
    // (function () {
    //     displayAllMovies();
    //     if(searchArr == titleArr){
    //        console.log(titleArr) 
    //     }
    // })()
    displayAllMovies();
    displaySrchInArr();


})

// titleArr.push(3,3,3,"aas")

function displayAllMovies() {
    let cartona = ``;
    for (let i = 0; i < movieInfo.length; i++) {
        if (movieInfo[i].title == undefined) {
            // console.log(movieInfo[1].name)
            movieTitle = movieInfo[i].name;
            movieDate = movieInfo[i].first_air_date;
        } else {
            // console.log(movieInfo[1].title)
            movieTitle = movieInfo[i].title;
            movieDate = movieInfo[i].release_date;
        }
        if (movieInfo[i].poster_path != undefined || movieInfo[i].poster_path != null) {
            imgMovie = "https://image.tmdb.org/t/p/w500" + movieInfo[i].poster_path;
        } else {
            imgMovie = "https://image.tmdb.org/t/p/w500" + movieInfo[i].backdrop_path;
        }


        if ((movieInfo[i].poster_path != undefined || movieInfo[i].poster_path != null) || (movieInfo[i].backdrop_path != undefined || movieInfo[i].backdrop_path != null)) {


            titleArr.push(movieTitle.toLowerCase())
            cartona += `
                <div class="movieDtls col-md-4 h-larg overflow-hidden my-3">
                        <img src="${imgMovie}" class="w-100 h-100 rounded-3">
                        <div class="overLay text-center bg-tWhite d-flex align-items-center rounded-3">
                            <div class="">
                                <h3>${movieTitle}</h3>
                                <p>${movieInfo[i].overview}</p>
                                <p>${movieInfo[i].vote_average}</p>
                                <p>${movieDate}</p>
                            </div>
                        </div>
                    </div>
                `
        }
        $(".showMovies").html(cartona);
    }
}


function displaySrchInArr() {
    let cartona = ``;
    for (let i = 0; i < titleArr.length; i++) {
        if (searchArr == titleArr[i]) {
            // console.log(titleArr[i])
            cartona += `
            <div class="movieDtls col-md-4 h-larg overflow-hidden my-3">
                    <img src="https://image.tmdb.org/t/p/w500${movieInfo[i].poster_path}" class="w-100 h-100 rounded-3">
                    <div class="overLay text-center bg-tWhite d-flex align-items-center rounded-3">
                        <div class="">
                            <h3>${titleArr[i]}</h3>
                            <p>${movieInfo[i].overview}</p>
                            <p>${movieInfo[i].vote_average}</p>
                            <p>${movieDate}</p>
                        </div>
                    </div>
                </div>
            `
        }
        $(".showMoviesInArr").html(cartona);

    }
}










// $("#nowPlaying").animate({
//     opacity: "1",
//     paddingTop: "25px"
// }, 1100),
//     $("#popular").animate({
//         opacity: "1",
//         paddingTop: "25px"
//     }, 1200)