//List of commands
const commands = {
  "-airkiss": "Sends an airkiss to a user<br>Example: -airkiss @user",
  "-brofist": "Gives a brofist to a user<br>Example: -brofist @user",
  "-cute": "Posts random cute gifs",
  "-help": "Help command",
  "-hug": "Hugs a user<br>Example: -hug @user",
  "-kiss": "Kisses a user<br>Example: -hug @user",
  "-meme": "Posts random anime memes from reddit",
  "-neko": "Posts neko pictures",
  "-nsfw": "Posts nsfw pictures",
  "-pause": "Pauses the current song",
  "-pat": "Pats a user<br>Example: -pat @user",
  "-pickup": "Gives a random pickup line. You can also mention someone to dedicate a random pickup line to them<br>Example: -pickup @user"
  "-play": "Plays a song. If no song name is provided then it will play a random anime music<br><br><i>-play SongName</i>",
  "-poke": "Poke a user<br>Example: -poke @user",
  "-queue": "Shows the current music queue",
  "-quote": "Posts random anime qutoes along with anime name and character name",
  "-repeat": "Repeats the current song or queue. It has 3 modes<br><br><i>-repeat 1</i> &rarr; Repeat the current song<br><i>-repeat 2</i> &rarr; Repeat the current queue<br><i>-repeat 3</i> &rarr; Stop repeating the song or queue",
  "-resume": "Resumes the currently paused song",
  "-skip": "Skips the current song or jump to a specific song in the queue<br><br><i>-skip</i> &rarr; simply skip the current song<br><i>-skip n</i> &rarr; skips to the nth song in the queue<br><i>-skip -1</i> &rarr; jump back to the previous song in the queue",
  "-slap": "Slaps a user<br>Example: -slap @user",
  "-stop": "Stops the current song",
  "-suggest": "Gives a random anime suggestion",
  "-tickle": "Tickles a user<br>Example: -tickle @user",
  "-waifu": "Posts waifu pictures",
};
const description_text = ["Hello Senpai!", "I am a discord bot", "Watching over 60+ servers", "Listening to -help on discord", "And I like pancakes :D"];
const speed = 100;
const waitTime = 1000;


//Changes the 'back to top' button's property based on scroll
addEventListener('scroll', () => {
    if (scrollY > innerHeight / 2) {
        document.querySelector('.scroll-to-top').style.display = 'block';
    }
    else {
        document.querySelector('.scroll-to-top').style.display = 'none';
    }
});


//Dynamic typing
let pointer = 0;
let position = 0;
const typeNow = () => {
    document.querySelector('.cowie-description').innerHTML = description_text[position].substring(0, pointer);
    if (pointer++ != description_text[position].length) {
        setTimeout(typeNow, speed);
    }
    else {
        setTimeout(eraseNow, waitTime)
    }
}
const eraseNow = () => {
    document.querySelector('.cowie-description').innerHTML = description_text[position].substring(0, pointer);
    if (pointer-- != 0) {
        setTimeout(eraseNow, speed)
    }
    else {
        position = (position + 1) % description_text.length;
        setTimeout(typeNow, waitTime)
    }
}
addEventListener('load', typeNow);


// Mobile Navbar icon control
const toggle_btn = document.querySelector('.mobile-view-icon');
toggle_btn.addEventListener('click', () => {
    document.querySelector('.parent-div').classList.toggle('open');
    document.querySelector('.hamburger-menu').classList.toggle('close');
    document.querySelector('.menu-close').classList.toggle('close');
});


// Commands are added to command-list div
const command_list = document.querySelector('.command-list');
for (const key in commands) {
    let command_card = document.createElement('div');
    command_card.classList.add('command-card');

    let command_name = document.createElement('div');
    command_name.classList.add('command-name');
    command_name.innerHTML = key;

    let command_description = document.createElement('div');
    command_description.classList.add('command-description');
    command_description.innerHTML = commands[key];

    command_card.appendChild(command_name);
    command_card.appendChild(command_description);

    command_list.appendChild(command_card);
}


//Command search
const keys = Object.keys(commands);
const searchCommand = (parameter) => {
    let val = parameter.value.trim();
    let cards = document.getElementsByClassName('command-card');
    allDisplayNone = 0;
    val = val.toUpperCase();
    for (let i = 0; i < keys.length; i++) {
        index = (keys[i].toUpperCase()).indexOf(val)
        if (index > -1)
            cards[i].style.display = '';
        else
            cards[i].style.display = 'none';

        if (cards[i].style.display == 'none')
            allDisplayNone += 1;
    }

    if (allDisplayNone == keys.length)
        document.querySelector('.noresult').classList.remove('noshow');
    else
        document.querySelector('.noresult').classList.add('noshow');
}


//Reveal components on scroll
const components = document.getElementsByClassName("wrapper-child");
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.classList.remove('hidden');
        }
        else {
            entry.target.classList.remove('active');
            entry.target.classList.add('hidden');
        }
    });
});
for (let i = 0; i < components.length; i++)
    observer.observe(components[i]);


//Scrolls to a particular div
const scrollToDiv = (parameter) => {
    const div = document.getElementById(parameter);
    const offset = div.offsetTop;
    scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

