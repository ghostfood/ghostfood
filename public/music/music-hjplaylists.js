function getPlaylist() {
    var now = new Date().getHours();
    var min = new Date().getMinutes();

    if (0 <= now && now < 5) {
        // launch playlist from 0000-0500: Haunted Jukebox Dark  
        document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/35f056f1640460770642f37355653aa3?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
        document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from Midnight - 5am </h5> Haunted Jukebox Dark <br/><span class="small">(Music videos from the last five years for late night viewing)</span><br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0cMLIf2anHm-USlXi9K3yEa" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 5am for</h5> 00s Dance </div>';
    } // closes 0000-0500
    if (5 <= now && now < 6) {
        if (30 <= min && min < 59) {
            // launch playlist from 0530-0600: 00s Alt  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/7f7f0c8aef15732a4efb31754d4a4d44?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 5.30 - 6am </h5> 00s Alt <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0cLUf2EbeBzd3zp_EhOEe0V" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 6am for</h5> Music Videos 2020 </div>';
        } // closes 0530-0600
        else {
            // launch playlist from 0500-0530: 00s Dance 
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/815ab0e05057c8144fff3b148bf60f79?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 5 - 5.30am </h5> 00s Dance <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0eJwfUVWbx45I006zfJx8Z1" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 5.30am for</h5> 00s Alt </div>';
        } // closes 0500-0530
    }
    if (6 <= now && now < 7) {
        if (30 <= min && min < 59) {
            // launch playlist from 0630-0700: 10s Pop  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/0c8c271c2bde6b8cfde7abbcd1302909?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 6.30 - 7am </h5> 10s Pop <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0ew4W6ia7YTSXarIxhpRTJ8" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 7am for</h5> Music Videos 2020 </div>';
        } // closes 0630-0700
        else {
            // launch playlist from 0600-0630: 10s Dance 
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/3cfbe1a6494f2c6e6b0a7d12017c5008?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 6 - 6.30am </h5> 10s Dance <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0ciQciXCFAs5LSZ4Rbfd7t_" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 6.30am for</h5> 10s Pop </div>';
        } // closes 0600-0630
    }
    if (7 <= now && now < 8) {
        // launch playlist from 0700-0800: Music Videos 2020 
        document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/77b4e2854e0f8c13806d3ba2df94af2b?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
        document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 7 - 8am </h5> Music Videos 2020 <br/><span class="small">(Almost anything goes in this selection music videos from this year)</span><br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0c5yRVYaeYNiy_NLI_pJ0NS" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 8am for</h5> 80s Disco/Dance </div>';
    } // closes 0700-0800
    if (8 <= now && now < 9) {
        if (30 <= min && min < 59) {
            // launch playlist from 0830-0900: 80s AOP/MOR / 80s Disco/Dance 
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/63128a7b9fabd5c70f17b3caa929585c?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 8.30 - 9am </h5> 80s AOP/MOR <br/><span class="small">(Music videos of some of the 80s best Adult-orientated Pop and Middle of the road hits)</span><br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0fTSlOGjQGtkLn30Vg08W27" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 9am for</h5> 90s Pop / 90s Dance </div>';
        } // closes 0830-0900
        else {
            // launch playlist from 0800-0830: 80s Pop / 80s Synth Pop 
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/9df8c0e6f3525f831940ef9198828ee9?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 8am - 5am </h5> 80s Pop / 80s Synth Pop <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0fh0-DjkLfU3USyKgDgAMXm" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 5am for</h5> 80s AOP/MOR / 80s Disco/Dance </div>';
        } // closes 0800-0830
    }
    if (9 <= now && now < 10) {
        if (30 <= min && min < 59) {
            // launch playlist from 0930-1000: 90s Dance 
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/f3a9ded55a7950cf73c986257fd65875?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 9.30 - 10am </h5> 90s Dance <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0dMOfVi6A7HB-a-rsMLihQb" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 10am for</h5> 10s Pop </div>';
        } // closes 0930-1000
        else {
            // launch playlist from 0900-0930: 90s Pop  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/87b4930d6435664c131cb1d46e1ea431?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 9am - 9.30am </h5> 90s Pop <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0eKo0XL6tEEvepLvryqsyiQ" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 9.30am for</h5> 90s Dance </div>';
        } // closes 0900-0930
    }
    if (10 <= now && now < 11) {
        if (30 <= min && min < 59) {
            // launch playlist from 1030-1100: 00s Pop  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/42a16e74b439fdd0d497f7cd46fec428?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 10.30 - 11am </h5> 00s Pop <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0cLUf2EbeBzd3zp_EhOEe0V" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 11am for</h5> Music Videos 2020 </div>';
        } // closes 1030-1100
        else {
            // launch playlist from 1000-1030: 10s Pop  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/0c8c271c2bde6b8cfde7abbcd1302909?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 10 - 10.30am </h5> 10s Pop <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0ew4W6ia7YTSXarIxhpRTJ8" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 10.30am for</h5> 00s Pop </div>';
        } // closes 1000-1030
    }
    if (11 <= now && now < 12) {
        // launch playlist from 1100-1200: Music Videos 2020 
        document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/77b4e2854e0f8c13806d3ba2df94af2b?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
        document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 11 - 12pm </h5> Music Videos 2020 <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0c5yRVYaeYNiy_NLI_pJ0NS" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 12pm for</h5> Haunted Jukebox LITE </div>';
    } // closes 1100-1200
    if (12 <= now && now < 17) {
        // launch playlist from 1200-1700: Haunted Jukebox LITE  
        document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/2db7f5afbdc8bf19f7a6938db1f11516?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
        document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 12pm - 5pm </h5> Haunted Jukebox LITE <br/><span class="small">(Music videos from the last five years for afternoon viewing)</span><br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0fgJ4dhbRrWmj9X2DGfPCv4" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 5pm for</h5> NewUnz! </div>';
    } // closes 1200-1700
    if (17 <= now && now < 18) {
        // launch playlist from 1700-1800: NewUnz!  
        document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/d59517ea38cef8ed0d0f339a7f165327?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
        document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 5 - 6pm </h5> NewUnz! <br/><span class="small">(Music videos from the last six months)</span><br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0ebv_JmCX7XOD2L4o4JdWUW" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 6pm for</h5> Music Videos 2020 </div>';
    } // closes 1700-1800
    if (18 <= now && now < 19) {
        // launch playlist from 1800-1900: Music Videos 2020 
        document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/77b4e2854e0f8c13806d3ba2df94af2b?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
        document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 6 - 7pm </h5> Music Videos 2020 <br/><span class="small">(Almost anything goes in this selection music videos from this year)</span><br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0c5yRVYaeYNiy_NLI_pJ0NS" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 7pm for</h5> 10s Pop </div>';
    } // closes 1800-1900
    if (19 <= now && now < 20) {
        if (30 <= min && min < 59) {
            // launch playlist from 1930-2000: 10s Alt  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/f16d9b40d6572a5005d305c82ebf29a3?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 7.30 - 8pm </h5> 10s Alt <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0d0qXPxnPrfc1l0SUizMcCA" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 8pm for</h5> 80s Alt </div>';
        } // closes 1930-2000
        else {
            // launch playlist from 1900-1930: 10s Pop  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/0c8c271c2bde6b8cfde7abbcd1302909?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 7 - 7.30pm </h5> 10s Pop <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0ew4W6ia7YTSXarIxhpRTJ8" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 7.30pm for</h5> 10s Alt </div>';
        } // closes 1900-1930
    }
    if (20 <= now && now < 21) {
        if (30 <= min && min < 59) {
            // launch playlist from 2030-2100: 80s Dance / Grooves  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/21882ea6ff1c1008f6f31c66f5aa2f3e?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 8.30 - 9pm </h5> 80s Dance <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0cLYYwVfHs9ToWpRBHhQUYA" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 9pm for</h5> 90s Dance </div>';
        } // closes 2030-2100
        else {
            // launch playlist from 2000-2030: 80s Alt / New Wave & Power Pop  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/73e842f14011596a3731fa70776a757f?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 8 - 8.30pm </h5> 80s Alt <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0cig5Kflb9CYPYNVUUSv8tb" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 8.30pm for</h5> 80s Dance/Grooves </div>';
        } // closes 2000-2030
    }
    if (21 <= now && now < 22) {
        if (30 <= min && min < 59) {
            // launch playlist from 2130-2200: 90s Alt  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/63128a7b9fabd5c70f17b3caa929585c?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 9.30 - 10pm </h5> 90s Alt <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0e8G4oeRjG5Mww_HcQjbO12" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 10pm for</h5> 10s Dance </div>';
        } // closes 2130-2200
        else {
            // launch playlist from 2100-2130: 90s Dance 
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/f3a9ded55a7950cf73c986257fd65875?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 9 - 9.30pm </h5> 90s Dance <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0dMOfVi6A7HB-a-rsMLihQb" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 9.30pm for</h5> 90s Alt </div>';
        } // closes 2100-2130
    }
    if (22 <= now && now < 23) {
        if (30 <= min && min < 59) {
            // launch playlist from 2230-2300: 10s Alt  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/f16d9b40d6572a5005d305c82ebf29a3?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 10.30 - 11pm </h5> 10s Alt <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0d0qXPxnPrfc1l0SUizMcCA" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 11pm for</h5> NewUnz! </div>';
        } // closes 2230-2300
        else {
            // launch playlist from 2200-2230: 10s Dance 
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/3cfbe1a6494f2c6e6b0a7d12017c5008?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 10 - 10.30pm </h5> 10s Dance <br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0ciQciXCFAs5LSZ4Rbfd7t_" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 10.30pm for</h5> 10s Alt </div>';
        } // closes 2200-2230
    }
    if (23 <= now && now < 0) {
        if (30 <= min && min < 59) {
            // launch playlist from 2300-2330: NewUnz!  
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/d59517ea38cef8ed0d0f339a7f165327?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 11 - 11.30pm </h5> NewUnz! <br/><span class="small">(Music videos from the last six months)</span><br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0ebv_JmCX7XOD2L4o4JdWUW" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from 11.30pm for</h5> Music Videos 2020 </div>';
        } // closes 2300-2330
        else {
            // launch playlist from 2330-0000: Music Videos 2020 
            document.getElementById('player').src = '//app.viloud.tv/player/embed/channel/77b4e2854e0f8c13806d3ba2df94af2b?autoplay=1&volume=0&controls=1&title=1&share=0&random=1';
            document.getElementById("playlist-info").innerHTML = '<div class="align-left width-100-then-50"><h5>Scheduled from 11.30 - Midnight </h5> Music Videos 2020 <br/><span class="small">(Almost anything goes in this selection music videos from this year)</span><br/><a href="https://www.youtube.com/playlist?list=PLHvKxcWzqg0c5yRVYaeYNiy_NLI_pJ0NS" class="cta">View on YouTube</a></div><div class="align-left width-100-then-50"><h5>Refresh from Midnight for</h5> Haunted Jukebox Dark </div>';
        } // closes 2330-0000
    }

}
getPlaylist();