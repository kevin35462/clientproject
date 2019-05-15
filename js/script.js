/* global $ */
var songList = [""]



$("#PlaySong").click(function() {
    // $("iframe").attr("src",songList.shift());
    var search = $("#IP").val();
    var api = 'https://api.soundcloud.com/tracks?q=' + search + '&client_id=5aa8e389ba4e24b6106af5159ab3e344';
    $.ajax({
        url: api,
        method: "GET",
        success: function(response) {
            console.log(api);
            console.log('response', response);
            console.log(response[0].permalink_url);
            SC.oEmbed(response[0].permalink_url, { auto_play: true }).then(function(oEmbed) {
                function updateSong() {
                    $("ol").append("<li>" + oEmbed.html + "</li>");
                }
                updateSong();
                $("ol").append("<button id = 'DelSong'>'Delete Song'</button>");
                songList.push(oEmbed.html);
                $("#Del").click(function() {
                    songList.remove(songList.length - 1);
                    updateSong();
                    console.log("hi");
                });
            });
            // window.location = response[0].permalink_url;
            //$("iframe").attr("src", response[0].permalink_url);


        }
    });
});
