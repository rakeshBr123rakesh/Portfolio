// ================= PART 1: DOM SETUP & INITIAL STYLES =================
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const terminal = document.querySelector(".terminal");
  const terminalHeader = document.querySelector(".terminal-header");
  const terminalBody = document.querySelector(".terminal-body");
  const animatedNameEl = document.getElementById("animated-name");
  const nameShuffleScreen = document.getElementById("name-shuffle-screen");

  // Initial styles
  terminal.style.backgroundColor = "#000";
  terminalHeader.style.backgroundColor = "#000";
  terminalHeader.style.color = "#0f0";
  terminalBody.style.color = "#0f0";

  // Hide terminal initially, show name shuffle screen
  terminal.style.display = "none";
  if (nameShuffleScreen) nameShuffleScreen.style.display = "flex";

  // ================= PART 2: NAME SHUFFLE ANIMATION =================
  const name = "RAKESH BR";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const shuffleDuration = 2500; // ms
  const frameRate = 50;
  const totalFrames = shuffleDuration / frameRate;

  let display = Array.from(name).map((c) => (c === " " ? " " : "_"));
  animatedNameEl.textContent = display.join("");

  let frame = 0;

  const interval = setInterval(() => {
    display = display.map((c, i) => {
      if (name[i] === " ") return " ";
      if (frame > (i / name.length) * totalFrames) {
        return name[i];
      }
      return chars.charAt(Math.floor(Math.random() * chars.length));
    });

    animatedNameEl.textContent = display.join("");
    frame++;

    if (frame >= totalFrames) {
      clearInterval(interval);

      // Fade out name shuffle screen
      if (nameShuffleScreen) {
        nameShuffleScreen.style.transition = "opacity 0.8s ease";
        nameShuffleScreen.style.opacity = "0";
      }

      // After fade out, show terminal with first prompt
      setTimeout(() => {
        if (nameShuffleScreen) nameShuffleScreen.style.display = "none";
        terminal.style.display = "block";
        appendPrompt();
      }, 800);
    }
  }, frameRate);

  // ================= PART 3: COMMAND DEFINITIONS =================
  const commandHistory = [];
  let historyIndex = 0;

  let themeColors = {
    textColor: "#0f0",
    headerColor: "white",
  };

  const commands = {
    help: () => `
      <span style="color:${themeColors.textColor};">help</span>${"&nbsp;".repeat(
      9
    )}- List all Commands <br>
      <span style="color:${themeColors.textColor};">welcome</span>${"&nbsp;".repeat(
      6
    )}- Introductory Section <br>
      <span style="color:${themeColors.textColor};">edu</span>${"&nbsp;".repeat(
      10
    )}- Academics <br>
      <span style="color:${themeColors.textColor};">email</span>${"&nbsp;".repeat(
      8
    )}- Reach out on Email <br>
      <span style="color:${themeColors.textColor};">projects</span>${"&nbsp;".repeat(
      5
    )}- My Projects <br>
      <span style="color:${themeColors.textColor};">skills</span>${"&nbsp;".repeat(
      7
    )}- My current Skill Set <br>
      <span style="color:${themeColors.textColor};">socials</span>${"&nbsp;".repeat(
      6
    )}- Social Media Profiles <br>
      <span style="color:${themeColors.textColor};">cv</span>${"&nbsp;".repeat(
      11
    )}- Check out my CV <br>
      <span style="color:${themeColors.textColor};">resume</span>${"&nbsp;".repeat(
      7
    )}- Check out my Resume <br>
      <span style="color:${themeColors.textColor};">themes</span>${"&nbsp;".repeat(
      7
    )}- Website Themes <br>
      <span style="color:${themeColors.textColor};">clear</span>${"&nbsp;".repeat(
      8
    )}- Clear the Terminal <br>
      <span style="color:${themeColors.textColor};">exit</span>${"&nbsp;".repeat(
      9
    )}- Close Tab <br>
      <hr>
    `,

    ls: () => commands.help(),

    welcome: `Hi!, I am Rakesh BR, welcome to my portfolio website! (TODO) GUI version.<br>
      I am a Data Science enthusiast currently pursuing my studies at S-VYASA School of Advanced Studies.<br>
      I am actively preparing for a career as a Data Scientist and building strong foundations in Python, SQL, Machine Learning, and Data Analysis.<br>
      I work with tools and technologies such as Pandas, NumPy, Scikit-Learn, TensorFlow, and Git and GitHub for developing data-driven solutions.<br>
      I enjoy working on real-world projects such as machine learning applications and data analysis systems.<br>
      I am continuously learning, improving my problem-solving skills, and exploring new technologies in AI and Data Science.<br>
      <hr>
    `,

    edu: () => `
      <span style="color:${
        themeColors.textColor
      };">S-VYASA School of Advanced Studies</span> | 2024 - 2026 <br>
      <span style="color:${
        themeColors.textColor
      };">Shridevi Degree College</span> | 2021 - 2024 <br>
      <span style="color:${themeColors.textColor};">MDRS</span> | 2019 - 2021
      <hr>
    `,

    email: () => {
      window.open("mailto:rakeshbr2003@gmail.com");
      return "Reach out at: rakeshbr2003@gmail.com<hr>";
    },

    projects: `Checkout my <a href="https://github.com/rakeshBr123rakesh" target="_blank" style="color: #0cf;">GitHub</a> to see all my projects.<hr>
      These are some highlights: <br>
      <a href="https://github.com/rakeshBr123rakesh/chicken-diseases-classification" target="_blank" style="color: #0cf;">Chicken Disease Classification</a> <br>
      <a href="https://github.com/rakeshBr123rakesh/Crime_Pattern_analysis_final_one" target="_blank" style="color: #0cf;">Crime Pattern analysis using clustering</a> <br>
      <a href="https://github.com/rakeshBr123rakesh/quantium_data_analytics/" target="_blank" style="color: #0cf;">Quantium data analysis</a> <br>
      <a href="https://github.com/rakeshBr123rakesh/End-to-End-ML-project" target="_blank" style="color: #0cf;">End to end ML project for Student performance</a> <br>
      <a href="https://github.com/rakeshBr123rakesh/Bliknit-dataanalysis" target="_blank" style="color: #0cf;">Blinkit data analysis</a> <br>
      <a href="https://github.com/rakeshBr123rakesh/text-summarization" target="_blank" style="color: #0cf;">Text summarization</a> <br>
      <hr>
    `,

    skills: () => `
      <span style="color:${themeColors.textColor};">Languages</span>:${"&nbsp;".repeat(
      2
    )}Python, SQL <br>
      <span style="color:${themeColors.textColor};">AI/ML</span>:${"&nbsp;".repeat(
      6
    )}PyTorch, TensorFlow, Keras, Scikit-learn, OpenCV, K-Means, Neural Networks <br>
      <span style="color:${themeColors.textColor};">Libraries</span>:${"&nbsp;".repeat(
      3
    )}Pandas, NumPy, Matplotlib, Seaborn, CatBoost, XGBoost <br>
      <span style="color:${themeColors.textColor};">Databases</span>:${"&nbsp;".repeat(
      1
    )}MySQL <br>
      <span style="color:${themeColors.textColor};">Tools</span>:${"&nbsp;".repeat(
      6
    )}Git, GitHub, Jupyter Notebook <br>
      <hr>
    `,

    socials: `Connect with me <br>
      1. <a href="https://www.linkedin.com/in/rakesh-br-ai" target="_blank" style="color: #0fc;">LinkedIn</a> <br>
      2. <a href="https://github.com/rakeshBr123rakesh" target="_blank" style="color: #0fc;">GitHub</a> <br>
      <hr>
    `,

    cv: () => {
      window.open(
        "file:///C:/Users/Rakesh/Desktop/career/Resumes/Anasol/Rakesh_BR.pdf"
      );
      return "May not be the latest! xD<hr>";
    },

    resume: () => {
      window.open(
        "file:///C:/Users/Rakesh/Desktop/career/Resumes/Rakesh.pdf"
      );
      return "May not be the latest! xD<hr>";
    },

    themes: `hacker <br> personal <br> dracula <br> solarized dark <br> monokai <br> nord <br> vcs <br><br>Type 'theme to [theme-name]'.<hr>`,

    "theme to hacker": () => {
      terminal.style.backgroundColor = "#000";
      terminalHeader.style.backgroundColor = "#000";
      terminalHeader.style.color = "#0f0";
      terminalBody.style.color = "#0f0";
      themeColors.textColor = "#0f0";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "#0cf"));
      return "Switched to Hacker theme!<hr>";
    },

    "theme to personal": () => {
      terminal.style.backgroundColor = "#0D1926";
      terminalHeader.style.backgroundColor = "#252526";
      terminalHeader.style.color = "#B4E1FD";
      terminalBody.style.color = "#B4E1FD";
      themeColors.textColor = "#B4E1FD";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "#1E8EFF"));
      return "Switched to my Personal theme!<hr>";
    },

    "theme to dracula": () => {
      terminal.style.backgroundColor = "#282a36";
      terminalHeader.style.backgroundColor = "#44475a";
      terminalHeader.style.color = "#f8f8f2";
      terminalBody.style.color = "#f8f8f2";
      themeColors.textColor = "#f8f8f2";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "#8be9fd"));
      return "Switched to my Dracula theme!<hr>";
    },

    "theme to solarized dark": () => {
      terminal.style.backgroundColor = "#002b36";
      terminalHeader.style.backgroundColor = "#073642";
      terminalHeader.style.color = "#93a1a1";
      terminalBody.style.color = "#93a1a1";
      themeColors.textColor = "#93a1a1";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "#268bd2"));
      return "Switched to my Solarized Dark theme!<hr>";
    },

    "theme to monokai": () => {
      terminal.style.backgroundColor = "#272822";
      terminalHeader.style.backgroundColor = "#383830";
      terminalHeader.style.color = "#F8F8F2";
      terminalBody.style.color = "#F8F8F2";
      themeColors.textColor = "#F8F8F2";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "#A6E22E"));
      return "Switched to my Monokai theme!<hr>";
    },

    "theme to nord": () => {
      terminal.style.backgroundColor = "#2E3440";
      terminalHeader.style.backgroundColor = "#3B4252";
      terminalHeader.style.color = "#D8DEE9";
      terminalBody.style.color = "#D8DEE9";
      themeColors.textColor = "#D8DEE9";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "#88C0D0"));
      return "Switched to my Nord theme!<hr>";
    },

    "theme to vcs": () => {
      terminal.style.backgroundColor = "#1e1e1e";
      terminalHeader.style.backgroundColor = "#252526";
      terminalHeader.style.color = "#d4d4d4";
      terminalBody.style.color = "#d4d4d4";
      themeColors.textColor = "#d4d4d4";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "#569cd6"));
      return "Switched to my VCS theme!<hr>";
    },

    clear: () => {
      terminalBody.innerHTML = "";
      return "";
    },

    exit: () => {
      const closeMsg = "Closing session... <small>(Close manually if stuck)</small><hr>";
      try {
        window.open("", "_self").close();
        setTimeout(() => window.close(), 100);
      } catch (error) {
        return `${closeMsg}<br>Error: ${error.message}`;
      }
      return closeMsg;
    },
  };

  // ================= COMMAND EXECUTION =================
  const enterComm = (input) => {
    const [commandName, ...args] = input.toLowerCase().split(" ");
    const fullCmd = `${commandName} ${args.join(" ")}`.trim();
    let result;

    if (commands[fullCmd]) {
      result =
        typeof commands[fullCmd] === "function"
          ? commands[fullCmd](args)
          : commands[fullCmd];
    } else if (commands[commandName]) {
      result =
        typeof commands[commandName] === "function"
          ? commands[commandName](args)
          : commands[commandName];
    } else {
      result = `Command not found: ${commandName}`;
    }
    return result;
  };

  // ================= PROMPT & HISTORY =================
  const appendPrompt = () => {
    const promptEl = document.createElement("p");
    promptEl.className = "prompt";
    promptEl.innerHTML = "~$ <span contenteditable='true' class='user-input'></span>";
    terminalBody.appendChild(promptEl);

    const userInput = promptEl.querySelector(".user-input");
    userInput.focus();

    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const command = userInput.textContent.trim();
        if (command) {
          commandHistory.push(command);
          historyIndex = commandHistory.length;
          userInput.setAttribute("contenteditable", "false");
          const output = enterComm(command);
          if (output) {
            const outEl = document.createElement("p");
            outEl.style.color = "white"; // Consider using themeColors.textColor
            outEl.innerHTML = output;
            terminalBody.appendChild(outEl);
          }
          appendPrompt();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          userInput.textContent = commandHistory[historyIndex];
          placeCaretAtEnd(userInput);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          userInput.textContent = commandHistory[historyIndex];
          placeCaretAtEnd(userInput);
        } else {
          historyIndex = commandHistory.length;
          userInput.textContent = "";
        }
      }
    });
  };

  // Helper: place cursor at end of contenteditable
  const placeCaretAtEnd = (el) => {
    el.focus();
    if (window.getSelection && document.createRange) {
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.body.createTextRange) {
      const textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
    }
  };
});