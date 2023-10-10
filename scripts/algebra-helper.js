document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: "Amazon",
      link: "https://amazon.com/",
      image: "/images/icons/apps/amazon.png",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "BuzzFeed Quizzes",
      link: "https://buzzfeed.com/quizzes",
      image: "/images/icons/apps/buzzfeed.png",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "Free Movies Watch",
      link: "https://freemovieswatch.tv",
      image: "/images/icons/freemovieswatch.png",
      categories: ["all", "media", "stream"],
      error: false
    },
    {
      name: "Scratch",
      link: "https://scratch.mit.edu",
      image: "/images/icons/scratch.jpg",
      categories: ["all", "social", "game", "media", ""],
      error: false
    },
    {
      name: "Chess.com",
      link: "https://chess.com",
      image: "/images/icons/chess.png",
      categories: ["all", "game"],
      error: false
    },
    {
      name: "Cool Math Games",
      link: "https://coolmathgames.com",
      image: "/images/icons/apps/coolmath.png",
      categories: ["all", "game"],
      error: false
    },
    {
      name: "Discord",
      link: "https://canary.discord.com",
      image: "/images/icons/apps/discord.jpg",
      categories: ["all", "social"],
      error: false
    },
    {
      name: "DuckDuckGo",
      link: "https://start.duckduckgo.com/",
      image: "/images/icons/apps/duckduckgo.png",
      categories: ["all"],
      error: false
    },
    {
      name: "ESPN",
      link: "https://www.espn.com/watch/",
      image: "/images/icons/apps/espn.webp",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "Fifa Rosters",
      link: "https://fifarosters.com/",
      image: "/images/icons/fifa.png",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "Firefox Web Browser",
      link: "https://replit.com/@cooleddie001/Firefox-Legacy?v=1",
      image: "/images/icons/apps/firefox.png",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "Flix HQ",
      link: "https://flixhq.to",
      image: "/images/icons/apps/flixhq.png",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "Geforce NOW",
      link: "https://play.geforcenow.com",
      image: "/images/icons/apps/geforce-now.png",
      categories: ["all", "stream", "cloud"],
      error: false
    },
    {
      name: "Github",
      link: "https://github.com",
      image: "/images/icons/apps/github.png",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "Google",
      link: "https://google.com",
      image: "/images/icons/apps/google.png",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "HBO MAX",
      link: "https://www.hbomax.com/",
      image: "/images/icons/apps/hbo.webp",
      categories: ["all", "stream"],
      error: false
    },
    {
      name: "Messenger",
      link: "https://messenger.com/",
      image: "/images/icons/apps/messenger.png",
      categories: ["all", "social", "message"],
      error: false
    },
    {
      name: "Paramount Plus",
      link: "https://paramountplus.com",
      image: "/images/icons/apps/paramount.png",
      categories: ["all", "stream"],
      error: false
    },
    {
      name: "Pinterest",
      link: "https://pinterest.com",
      image: "/images/icons/apps/pinterest.png",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "Pixlr",
      link: "https://pixlr.com/",
      image: "/images/icons/pix.png",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "Poki",
      link: "https://poki.com",
      image: "/images/icons/apps/poki.png",
      categories: ["all", "game"],
      error: false
    },
    {
      name: "Soundcloud",
      link: "https://soundcloud.com",
      image: "/images/icons/apps/soundcloud.jpg",
      categories: ["all", "media"],
      error: false
    },
    {
      name: "Spotify",
      link: "https://open.spotify.com",
      image: "/images/icons/apps/spotify.png",
      categories: ["all", "media"],
      say: "Spotify is currently not working on the proxy.",
      error: true
    },
    {
      name: "Telegram",
      link: "https://web.telegram.org/",
      image: "/images/icons/apps/telegram.png",
      categories: ["all", "social"],
      error: false
    },
    {
      name: "Tiktok",
      link: "https://tiktok.com",
      image: "/images/icons/apps/tiktok.png",
      categories: ["all", "social", "media"],
      error: false
    },
    {
      name: "Tumblr",
      link: "https://tumblr.com/",
      image: "/images/icons/apps/tumblr.png",
      categories: ["all", "social"],
      error: false
    },
    {
      name: "Twitch",
      link: "https://twitch.tv",
      image: "/images/icons/apps/twitch-tv.png",
      categories: ["all", "stream", "media"],
      error: false
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      image: "/images/icons/apps/twitter.png",
      categories: ["all", "social", "media"],
      error: false
    },
    {
      name: "VS Code",
      link: "https://vscode.dev",
      image: "/images/icons/apps/vscode.png",
      categories: ["all", "tool"],
      error: false
    },
    {
      name: "Y8 Games",
      link: "https://y8.com/",
      image: "/images/icons/apps/y8.png",
      categories: ["all", "game"],
      error: false
    },
    {
      name: "YouTube",
      link: "https://youtube.com",
      image: "/images/icons/apps/yt.png",
      categories: ["all", "social", "stream", "media"],
      error: false
    },
    {
      name: "Whatsapp",
      link: "https://web.whatsapp.com/",
      image: "/images/icons/apps/whatsapp.png",
      categories: ["all", "message", "social"],
      error: false
    },
    {
      name: "Wattpad",
      link: "https://wattpad.com/",
      image: "/images/icons/apps/wattpad.webp",
      categories: ["all", "social"],
      error: false
    },
    {
      name: "ChatGPT Clone",
      link: "https://chat.shuttle.rip/",
      image: "/images/icons/chatgpt.png",
      categories: ["all", "AI"],
      error: false
    },
    {
      name: "Discord - Login",
      link: "https://canary.discord.com/login",
      image: "/images/icons/discord.jpg",
      categories: ["all", "social"],
      blank: "true",
      error: false
    },
    {
      name: "HD Today",
      link: "https://hdtoday.tv",
      image: "/images/icons/hd.png",
      categories: ["all", "media", "stream"],
      error: false
    },
  ];
    
  
  appsList.sort((a, b) => a.name.localeCompare(b.name));
  
  const nonPinnedApps = document.querySelector('.container-apps');
  const pinnedApps = document.querySelector('.pinned-apps');
  var pinList = localStorage.getItem("pinnedGames");
  try{
    pinList=pinList.split(",").map(Number)
    } catch {}
  var appInd = 0;
  appsList.forEach(app => {
    let pinNum = appInd
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    columnDiv.setAttribute('data-category', app.categories.join(' '));

    const pinIcon = document.createElement('i');
    pinIcon.classList.add("fa");
    pinIcon.classList.add("fa-map-pin");
    pinIcon.ariaHidden = true;

    const btn = document.createElement('button');
    btn.appendChild(pinIcon);
    btn.style.float = "right";
    btn.style.backgroundColor="rgb(45,45,45)";
    btn.style.borderRadius="50%";
    btn.style.borderColor="transparent";
    btn.style.color="white";
    btn.style.top="-200px";
    btn.style.position="relative";
    btn.onclick = function () {
      setPin(pinNum);
    };
    btn.title="Pin";

    const link = document.createElement('a');

    if (app.local) {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        window.location.href = app.link;
        return false;
      };
    } else if (app.blank) {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        blank(app.link);
        return false;
      };
    } else {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        go(app.link);
        return false;
      };
    }

    const image = document.createElement('img');
    image.width = 145;
    image.height = 145;
    image.src = app.image;
    image.loading = "lazy";


    const paragraph = document.createElement('p');
    paragraph.textContent = app.name;
    if (app.error) {
      paragraph.style.color = 'red';
    }

    link.appendChild(image);
    link.appendChild(paragraph);
    columnDiv.appendChild(link);
    if(appInd != 0) {
      columnDiv.appendChild(btn);
    }

    if(pinList!=null && appInd != 0) {
      if(pinContains(appInd,pinList)) {
        pinnedApps.appendChild(columnDiv);
      }
      else {
        nonPinnedApps.appendChild(columnDiv);
      }
    }
    else {
      nonPinnedApps.appendChild(columnDiv);
    }
    appInd++;
  });
  appsContainer.appendChild(pinnedApps);
  appsContainer.appendChild(nonPinnedApps);
});
function setPin(index) {
  pins = localStorage.getItem("pinnedGames");
  if(pins == null) {
    pins = [];
  }
  if(pins == "") {
    pins = [];
  }
  else {
    pins = pins.split(",").map(Number);
  }
  if(pinContains(index,pins)) {
    let remove = pins.indexOf(index);

    pins.splice(remove, 1);

  }
  else {
    pins.push(index);
  }
  localStorage.setItem("pinnedGames", pins);
  location.reload();
}
function pinContains(i,p) {
  if(p=="") {return false;}
  for(var x = 0; x < p.length; x++) {if(p[x]===i) {
    return true;
  }}
  return false;
}

function showImages() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var categories = game.getAttribute("data-category").split(" ");

    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}

function search_game() {
  var input = document.getElementById("searchbarbottom");
  var filter = input.value.toLowerCase();
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var name = game.getElementsByTagName("p")[0].textContent.toLowerCase();

    if (name.includes(filter)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}
