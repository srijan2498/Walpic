$(document).ready(function(){
    dayNightMode();
    // random banner image........
    id1="KPYY4OAgpskI1IrFRe0NXHSxbq4I1finqr8trExTBzY"

    id2="E3pB90xvd0oyFTi08BIYe9d6GJFFxbGiSNBVXXGImLg"
    $.ajax({
        url: `https://api.unsplash.com/photos/random?client_id=${id2}`,
    }).done(function(e){

        $(".ban").html(
            `<div class="banner" id="banner" style="background-image: url(${e.urls.full})">
            <div class="banner-element">
                <div class="banner-head">Walpic</div>
            <div class="banner-para">The internet's source of <span class="underline">freely-usable</span> images.</div>
            </div>
        </div>`
        )
    })

    $("#searchBtn").click(function(){
        let searchVal = $("#searchField").val();
        $("#display-img").empty()
        $.ajax({
            url:`https://api.unsplash.com/search/photos?query=${searchVal}&per_page=30&client_id=${id2}`,
        }).done(function(img){
            document.getElementById("searchTopic").innerHTML=searchVal[0].toUpperCase()+searchVal.slice(1,)

            img.results.forEach(element => {
                $("#display-img").append(
                    `
                        <a class="outerLink">
                        <div class="img" title="${element.alt_description[0].toUpperCase()+element.alt_description.slice(1,)}" style="background-image: url('${element.urls.regular}')">
                        <a href="${element.user.links.html}" target="_blank">
                            <div class="profile">
                                <img src="${element.user.profile_image.small}" alt="">
                                <div class="user">
                                    <span class="name">${element.user.name}</span>
                                    <br>
                                    <span class="username">@${element.user.username}</span>
                                </div>
                            </div>
                        </a>
                            <div class="download"><i class="fa fa-download"></i></div>
                        
                        <div class="likes">
                            <i class="fa fa-heart"></i>
                            ${element.likes}
                        </div>
                        </div>
                        </a>
                    `
                )
                $(".img").dblclick(function(){
                    window.open(element.links.download, '_blank');
                })
            });
        })
    })

    function dayNightMode(){
        const date = new Date();
        const hour = date.getHours();

        if(hour>=7 && hour<=19){
            document.body.style.backgroundColor="whitesmoke";
            document.body.style.color="black";
        }
        else{
            document.body.style.backgroundColor="#141414";
            document.body.style.color="white";
        }
    }
    
    
})



// random pic=    https://api.unsplash.com/photos/random?client_id=KPYY4OAgpskI1IrFRe0NXHSxbq4I1finqr8trExTBzY


// search pics =    https://api.unsplash.com/search/photos?query=nature&client_id=KPYY4OAgpskI1IrFRe0NXHSxbq4I1finqr8trExTBzY


// id1= KPYY4OAgpskI1IrFRe0NXHSxbq4I1finqr8trExTBzY