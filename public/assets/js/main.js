console.warn(
    "%cNote!",
    "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
    "https://discord.gg/gointerstellar"
  );
  console.warn(
    "%cNote!",
    "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
    "https://discord.gg/gointerstellar"
  );
  console.warn(
    "%cNote!",
    "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
    "https://discord.gg/gointerstellar"
  );
  
  function script(text) {
    console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
  }
  
  // ====================================
  // SCRIPT INJECTION
  // ====================================
  
  var gaenabled = window.localStorage.getItem("ga");
  if (gaenabled == "false") {
    script("Skipped GA injection because it is disabled by the user.");
  } else {
    const gascript = document.createElement("script");
    gascript.setAttribute("async", "");
    gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-WKJQ5QHQTJ");
    const inlinegascript = document.createElement("script");
    inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WKJQ5QHQTJ');`;
    document.head.append(gascript, inlinegascript);
    script("Injected script 1/2");
  }
   
  const arc = document.createElement("script");
  arc.setAttribute("async", "");
  arc.setAttribute("src", "https://arc.io/widget.min.js#gcM6sndx");
  document.head.append(arc);
  script("Injected script 2/2");
  
