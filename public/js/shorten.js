//Essay Shortener!!!!!!!
var sample = "Sample essay.";

function shortenmath(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.toLower().replace( "added with", "+");
    }
    else if(random === 2) {
        essay = essay.toLower().replace("plus","+");
    }
    
    essay = essay.toLower().replace(" percent"," %");
    essay = essay.toLower().replace(" divided by"," ÷");
    essay = essay.toLower().replace("equals","=");
    essay = essay.toLower().replace("and","&");
    essay = essay.toLower().replace("subtracted by","minus");
    essay = essay.toLower().replace(" subtracted by"," -");
    essay = essay.toLower().replace(" multiplied by "," x ");
    essay = essay.toLower().replace(" multiplied by"," *");
    essay = essay.toLower().replace(" divided by"," /");
    essay = essay.toLower().replace("raised to the power of","^");
    essay = essay.toLower().replace("to the power of","^");
    
    return essay;
}
function shortennumbers(essay){
    essay = essay.toLower().replace(" one hundred "," 100 ");
    essay = essay.toLower().replace(" ninety-nine "," 99 ");
    essay = essay.toLower().replace(" ninety-eight "," 98 ");
    essay = essay.toLower().replace(" ninety-seven "," 97 ");
    essay = essay.toLower().replace(" ninety-six "," 96 ");
    essay = essay.toLower().replace(" ninety-five "," 95 ");
    essay = essay.toLower().replace(" ninety-four "," 94 ");
    essay = essay.toLower().replace(" ninety-three "," 93 ");
    essay = essay.toLower().replace(" ninety-two "," 92 ");
    essay = essay.toLower().replace(" ninety-two "," 91 ");
    essay = essay.toLower().replace(" ninety "," 90 ");
    essay = essay.toLower().replace(" eighty-nine "," 89 ");
    essay = essay.toLower().replace(" eighty-eight "," 88 ");
    essay = essay.toLower().replace(" eighty-seven "," 87 ");
    essay = essay.toLower().replace(" eighty-six "," 86 ");
    essay = essay.toLower().replace(" eighty-five "," 85 ");
    essay = essay.toLower().replace(" eighty-four "," 84 ");
    essay = essay.toLower().replace(" eighty-three "," 83 ");
    essay = essay.toLower().replace(" eighty-two "," 82 ");
    essay = essay.toLower().replace(" eighty-one "," 81 ");
    essay = essay.toLower().replace(" eighty "," 80 ");
    essay = essay.toLower().replace(" seventy-nine "," 79 ");
    essay = essay.toLower().replace(" seventy-eight "," 78 ");
    essay = essay.toLower().replace(" seventy-seven "," 77 ");
    essay = essay.toLower().replace(" seventy-seven "," 76 ");
    essay = essay.toLower().replace(" seventy-five "," 75 ");
    essay = essay.toLower().replace(" seventy-four "," 74 ");
    essay = essay.toLower().replace(" seventy-three "," 73 ");
    essay = essay.toLower().replace(" seventy-two "," 72 ");
    essay = essay.toLower().replace(" seventy-one "," 71 ");
    essay = essay.toLower().replace(" seventy "," 70 ");
    essay = essay.toLower().replace(" sixty-nine "," 69 ");
    essay = essay.toLower().replace(" sixty-eight "," 68 ");
    essay = essay.toLower().replace(" sixty-seven "," 67 ");
    essay = essay.toLower().replace(" sixty-six "," 66 ");
    essay = essay.toLower().replace(" sixty-five "," 65 ");
    essay = essay.toLower().replace(" sixty-four "," 64 ");
    essay = essay.toLower().replace(" sixty-three "," 63 ");
    essay = essay.toLower().replace(" sixty-two "," 62 ");
    essay = essay.toLower().replace(" sixty-one "," 61 ");
    essay = essay.toLower().replace(" sixty "," 60 ");
    essay = essay.toLower().replace(" fifty-nine "," 59 ");
    essay = essay.toLower().replace(" fifty-eight "," 58 ");
    essay = essay.toLower().replace(" fifty-seven "," 57 ");
    essay = essay.toLower().replace(" fifty-six "," 56 ");
    essay = essay.toLower().replace(" fifty-five "," 55 ");
    essay = essay.toLower().replace(" fifty-four "," 54");
    essay = essay.toLower().replace(" fifty-three "," 53 ");
    essay = essay.toLower().replace(" fifty-two "," 52 ");
    essay = essay.toLower().replace(" fifty-one "," 51 ");
    essay = essay.toLower().replace(" fifty "," 50 ");
    essay = essay.toLower().replace(" forty-nine "," 49 ");
    essay = essay.toLower().replace(" forty-eight "," 48 ");
    essay = essay.toLower().replace(" forty-seven "," 47 ");
    essay = essay.toLower().replace(" forty-six "," 46 ");
    essay = essay.toLower().replace(" forty-five "," 45 ");
    essay = essay.toLower().replace(" forty-four "," 44 ");
    essay = essay.toLower().replace(" forty-three "," 43 ");
    essay = essay.toLower().replace(" forty-two "," 42 ");
    essay = essay.toLower().replace(" forty-one "," 41 ");
    essay = essay.toLower().replace(" forty "," 40 ");
    essay = essay.toLower().replace(" thirty-nine "," 39 ");
    essay = essay.toLower().replace(" thirty-eight "," 38 ");
    essay = essay.toLower().replace(" thirty-seven "," 37 ");
    essay = essay.toLower().replace(" thirty-six "," 36 ");
    essay = essay.toLower().replace(" thirty-five "," 35 ");
    essay = essay.toLower().replace(" thirty-four "," 34 ");
    essay = essay.toLower().replace(" thirty-three "," 33 ");
    essay = essay.toLower().replace(" thirty-two "," 32 ");
    essay = essay.toLower().replace(" thirty-one "," 31 ");
    essay = essay.toLower().replace(" thirty "," 30 ");
    essay = essay.toLower().replace(" twenty-nine "," 29 ");
    essay = essay.toLower().replace(" twenty-eight "," 28 ");
    essay = essay.toLower().replace(" twenty-seven "," 27 ");
    essay = essay.toLower().replace(" twenty-six "," 26 ");
    essay = essay.toLower().replace(" twenty-five "," 25 ");
    essay = essay.toLower().replace(" twenty-four "," 24 ");
    essay = essay.toLower().replace(" twenty-three "," 23 ");
    essay = essay.toLower().replace(" twenty-two "," 22 ");
    essay = essay.toLower().replace(" twenty-one "," 21 ");
    essay = essay.toLower().replace(" twenty "," 20 ");
    essay = essay.toLower().replace(" nineteen "," 19 ");
    essay = essay.toLower().replace(" eighteen "," 18 ");
    essay = essay.toLower().replace(" seventeen "," 17 ");
    essay = essay.toLower().replace(" sixteen "," 16 ");
    essay = essay.toLower().replace(" fifteen "," 15 ");
    essay = essay.toLower().replace(" fourteen "," 14 ");
    essay = essay.toLower().replace(" thirteen "," 13 ");
    essay = essay.toLower().replace(" twelve "," 12 ");
    essay = essay.toLower().replace(" eleven "," 11 ");

    return essay
    
}
function shortenransition(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.toLower().replace("correspondingly","additionally");
        essay = essay.toLower().replace("one example that personifies this is","for example");
        essay = essay.toLower().replace("one instance that personifies this is","for instance");

    }
    if(random === 2) {
        essay = essay.toLower().replace("in addition","also");
        essay = essay.toLower().replace("in addition","and");
        essay = essay.toLower().replace("as a consequence","thus");
        essay = essay.toLower().replace("comparatively","additionally");
        essay = essay.toLower().replace("in the instance that","if");
        essay = essay.toLower().replace("one example that shows this is","for example");
        essay = essay.toLower().replace("one instance that shows this is","for instance");
        essay = essay.toLower().replace("last of all","last");
        


    }
    essay = essay.toLower().replace("for the reason that","because");
    essay = essay.toLower().replace("additionally","also");
    essay = essay.toLower().replace("additionally","and");
    essay = essay.toLower().replace("and so and so forth","etc");
    essay = essay.toLower().replace("extraordinarily","very");
    essay = essay.toLower().replace("obviously","clearly");
    essay = essay.toLower().replace("consequently","thus");
    essay = essay.toLower().replace("in the same fashion","additionally");
    essay = essay.toLower().replace("however","but");
    essay = essay.toLower().replace("in the event that","if");
    essay = essay.toLower().replace("one example that illustrates this is","for example");
    essay = essay.toLower().replace("one instance that illustrates this is","for instance");
    essay = essay.toLower().replace("ultimately","last");
    essay = essay.toLower().replace("first of all","first");
    essay = essay.toLower().replace("consequently","next");
    return essay;
}

function finalshorten(essay){
    essay = replacenumbers(essay);
    essay = replacemath(essay);
    essay = replacetransition(essay);
    var lowercase=[". a", ". b", ". c", ". d", ". e", ". f", ". g", ". h", ". i", ". j",
                   ". k", ". l", ". m", ". n", ". o", ". p", ". q", ". r", ". s", ". t",
                   ". u", ". v", ". x", ". y", ". z", ".  a", ". b", ".  c", ".  d", ".  e", 
                   ".  f", ".  g", ".  h", ".  i", ".  j", ".  k", ".  l", ".  m", ".  n", 
                   ".  o", ".  p", ".  q", ".  r", ".  s", ".  t", ".  u", ".  v", ".  x", 
                   ".  y", ".  z", "? a", "? b", "? c", "? d", "? e", "? f", "? g", "? h", 
                   "? i", "? j","? k", "? l", "? m", "? n", "? o", "? p", "? q", "? r", 
                   "? s", "? t","? u", "? v", "? x", "? y", "? z", "?  a", "? b", "?  c", 
                   "?  d", "?  e", "?  f", "?  g", "?  h", "?  i", "?  j", "?  k", "?  l", 
                   "?  m", "?  n", "?  o", "?  p", "?  q", "?  r", "?  s", "?  t", "?  u", 
                   "?  v", "?  x", "?  y", "?  z", "! a", "! b", "! c", "! d", "! e", "! f",
                   "! g", "! h", "! i", "! j", "! k", "! l", "! m", "! n", "! o", "! p", "! q",
                   "! r", "! s", "! t", "! u", "! v", "! x", "! y", "! z", "!  a", "! b", "!  c",
                   "!  d", "!  e", "!  f", "!  g", "!  h", "!  i", "!  j", "!  k", "!  l", "!  m",
                   "!  n", "!  o", "!  p", "!  q", "!  r", "!  s", "!  t", "!  u", "!  v", "!  x", 
                   "!  y", "!  z"];
    var uppercase = [". A", ". B", ". C", ". D", ". E", ". F", ". G", ". H", ". I", ". J",
                   ". K", ". L", ". M", ". N", ". O", ". P", ". Q", ". R", ". S", ". T",
                   ". U", ". V", ". X", ". Y", ". Z", ".  A", ". B", ".  C", ".  D", ".  E", 
                   ".  F", ".  G", ".  H", ".  I", ".  J", ".  K", ".  L", ".  M", ".  N", 
                   ".  O", ".  P", ".  Q", ".  R", ".  S", ".  T", ".  U", ".  V", ".  X", 
                   ".  Y", ".  Z", "? A", "? B", "? C", "? D", "? E", "? F", "? G", "? H", 
                   "? I", "? J","? K", "? L", "? M", "? N", "? O", "? P", "? Q", "? R", 
                   "? S", "? T","? U", "? V", "? X", "? Y", "? Z", "?  A", "? B", "?  C", 
                   "?  D", "?  E", "?  F", "?  G", "?  H", "?  I", "?  J", "?  K", "?  L", 
                   "?  M", "?  N", "?  O", "?  P", "?  Q", "?  R", "?  S", "?  T", "?  U", 
                   "?  V", "?  X", "?  Y", "?  Z", "! A", "! B", "! C", "! D", "! E", "! F",
                   "! G", "! H", "! I", "! J", "! K", "! L", "! M", "! N", "! O", "! P", "! Q",
                   "! R", "! S", "! T", "! U", "! V", "! X", "! Y", "! Z", "!  A", "! B", "!  C",
                   "!  D", "!  E", "!  F", "!  G", "!  H", "!  I", "!  J", "!  K", "!  L", "!  M",
                   "!  N", "!  O", "!  P", "!  Q", "!  R", "!  S", "!  T", "!  U", "!  V", "!  X", 
                   "!  Y", "!  Z"];
    for(x=0; x<lowercase.length;x++){
        essay=essay.replace(lowercase[x],uppercase[x]);
    }
    return essay;
}