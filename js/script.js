/* global $ */



$("#PlaySong").click(function() {
    // $("iframe").attr("src",songList.shift());
    var search = $("#IP").val();
    var api = 'https://api.soundcloud.com/tracks?q=' + search + '&client_id=5aa8e389ba4e24b6106af5159ab3e344';
    $.ajax({
        url: api,
        method: "GET",
        success: function(response) {
            // checks the success of the api call
            console.log("API: " + api);
            console.log('response', response);
            console.log("Song Link: " + response[0].permalink_url);
                
            // response[0].permalink_url
            SC.oEmbed(response[0].permalink_url, { auto_play: true }).then(function(oEmbed) {
                    function updateSong() {
                        // songList.push(oEmBed.html); 
                        // console.log(songList);
                        console.log("oEmbed: " + oEmbed);
                        console.log("oEmbed.html: " + oEmbed.html);
                        $(".songOrderedList").append("<li>" + oEmbed.html + "</li>");
                    }
                        
                    // calls the UpdateSong playlist to add the song to the view and appends the delete button
                    updateSong(); 
                    
                        
                    
                });
                // window.location = response[0].permalink_url;
                // $("iframe").attr("src", response[0].permalink_url);
            }
    });  
});
