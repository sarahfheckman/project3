window.onload = function(argument) {

// var lyric = "i couldn't take it couldn't stand another minute couldn't bear another day without you in it";
var lyric = "copycat sucker mulato crook scammer pig rat midget dwarf scalwag whiny peasant plebeian pion desi fake trump shit can't  no fuck faggot bitch bitch-ass devoid stupid idiot hate lurdan dick twat bastard weirdo cunt biggot terriost jew color people fob coon mut jap paki redneck honky redskin yankee dumb fool failure incompetent shy lazy indolent kike heathen ignorant vapid idiot inept lunatic insane retarded incapable fat ugly crazy hideous naive oppressive pest pessimistic petty worthless belligrent bossy arrogant cynical aloof impolite self-centred stubborn barbarian brat caveman chicken chubster chubby cry-baby dork loser pyscho annoying bully sissy  hideous queer cracker whore slut strumpet hoe creep freak junky cuck moron fathead wacky dumbo wacko jerk jackass delusional demented deranged unhinged unstable pussy meshuga tramp dyke tranny sheman ghetto prick cocksucker beta dickhead shitface deviant pansy coward gigolo harlot drunk druggy adict crackhead hooker deadbeat gofer misogynist thot skank heifer asswipe bimbo blockhead theif crook bum dirtbag scumbug douche maggot grouch hypocrite low-life nobody oaf peasant outlaw reject square swine turd geezer airhead donkey dweeb honky loudmouth meathead wimp";
var words = {};
var words_attr = [];
string_handle(lyric);

var canvas = document.getElementById('c');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

if (canvas.getContext) {
var c = canvas.getContext('2d'),
w = canvas.width,
h = canvas.height;

c.strokeStyle = 'red';
c.fillStyle = 'red';
c.lineWidth = 5;

// constructor
Word = function(key) {
this.text = key;
this.x = Math.random() * w;
this.y = Math.random() * 10 + 'px arial';
this.font = words[key] * 15 + 'px arial'
this.speed = (words[key]);
}
for (key in words) {
words_attr.push(new Word(key));
}
console.log(words_attr.length);

function animation() {
for (var i = 0; i < words_attr.length; i++) {
c.font = words_attr[i].font;
c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
words_attr[i].width = c.measureText(words_attr[i].text).width;
c.stroke();
}
move();
}

function move() {
for (var i = 0; i < words_attr.length; i++) {
if (words_attr[i].x > w) {
words_attr[i].x = -words_attr[i].width;
words_attr[i].y = Math.random()*h;
}else{
words_attr[i].x += words_attr[i].speed;
}
}
}

setInterval(function() {
c.clearRect(0,0,w,h);
animation();
},25);

}

function string_handle(str) {
var split_str = str.split(" ");
var word_array = [];
var word_count = [];
for (var i = 0; i < split_str.length; i++) {
check = true;
for (var j = 0; j <= word_array.length; j++) {
if (split_str[i] == word_array[j]) {
word_count[j]++;
check = false;
break;
}
}
if (check) {
word_array.push(split_str[i]);
word_count.push(1);
}
}
for (var i = 0; i < word_array.length; i++) {
words[word_array[i]] = word_count[i];
}
return words;
}

}
