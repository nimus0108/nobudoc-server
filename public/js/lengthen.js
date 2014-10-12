//Essay Lenghtener!!!!!!!!!!!!
var sample = "Sample essay.";

function replacemath(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.toLower().replace("+", "added with");
    }
    else if(random === 2) {
        essay = essay.toLower().replace("+", "plus");
    }
    
    essay = essay.toLower().replace("%"," percent");
    essay = essay.toLower().replace(" ÷"," divided by");
    essay = essay.toLower().replace("=","equals");
    essay = essay.toLower().replace("&","and");
    essay = essay.toLower().replace("minus","subtracted by");
    essay = essay.toLower().replace(" -"," subtracted by");
    essay = essay.toLower().replace(" x "," multiplied by ");
    essay = essay.toLower().replace(" *"," multiplied by");
    essay = essay.toLower().replace(" /"," divided by");
    essay = essay.toLower().replace("^","raised to the power of");
    
    return essay;
}
function replacenumbers(essay){
    essay = essay.toLower().replace(" 100 "," one hundred ");
    essay = essay.toLower().replace(" 99 "," ninety-nine ");
    essay = essay.toLower().replace(" 98 "," ninety-eight ");
    essay = essay.toLower().replace(" 97 "," ninety-seven ");
    essay = essay.toLower().replace(" 96 "," ninety-six ");
    essay = essay.toLower().replace(" 95 "," ninety-five ");
    essay = essay.toLower().replace(" 94 "," ninety-four ");
    essay = essay.toLower().replace(" 93 "," ninety-three ");
    essay = essay.toLower().replace(" 92 "," ninety-two ");
    essay = essay.toLower().replace(" 91 "," ninety-one ");
    essay = essay.toLower().replace(" 90 "," ninety ");
    essay = essay.toLower().replace(" 89 "," eighty-nine ");
    essay = essay.toLower().replace(" 88 "," eighty-eight ");
    essay = essay.toLower().replace(" 87 "," eighty-seven ");
    essay = essay.toLower().replace(" 86 "," eighty-six ");
    essay = essay.toLower().replace(" 85 "," eighty-five ");
    essay = essay.toLower().replace(" 84 "," eighty-four ");
    essay = essay.toLower().replace(" 83 "," eighty-three ");
    essay = essay.toLower().replace(" 82 "," eighty-two ");
    essay = essay.toLower().replace(" 81 "," eighty-one ");
    essay = essay.toLower().replace(" 80 "," eighty ");
    essay = essay.toLower().replace(" 79 "," seventy-nine ");
    essay = essay.toLower().replace(" 78 "," seventy-eight ");
    essay = essay.toLower().replace(" 77 "," seventy-seven ");
    essay = essay.toLower().replace(" 76 "," seventy-six ");
    essay = essay.toLower().replace(" 75 "," seventy-five ");
    essay = essay.toLower().replace(" 74 "," seventy-four ");
    essay = essay.toLower().replace(" 73 "," seventy-three ");
    essay = essay.toLower().replace(" 72 "," seventy-two ");
    essay = essay.toLower().replace(" 71 "," seventy-one ");
    essay = essay.toLower().replace(" 70 "," seventy ");
    essay = essay.toLower().replace(" 69 "," sixty-nine ");
    essay = essay.toLower().replace(" 68 "," sixty-eight ");
    essay = essay.toLower().replace(" 67 "," sixty-seven ");
    essay = essay.toLower().replace(" 66 "," sixty-six ");
    essay = essay.toLower().replace(" 65 "," sixty-five ");
    essay = essay.toLower().replace(" 64 "," sixty-four ");
    essay = essay.toLower().replace(" 63 "," sixty-three ");
    essay = essay.toLower().replace(" 62 "," sixty-two ");
    essay = essay.toLower().replace(" 61 "," sixty-one ");
    essay = essay.toLower().replace(" 60 "," sixty ");
    essay = essay.toLower().replace(" 59 "," fifty-nine ");
    essay = essay.toLower().replace(" 58 "," fifty-eight ");
    essay = essay.toLower().replace(" 57 "," fifty-seven ");
    essay = essay.toLower().replace(" 56 "," fifty-six ");
    essay = essay.toLower().replace(" 55 "," fifty-five ");
    essay = essay.toLower().replace(" 54"," fifty-four ");
    essay = essay.toLower().replace(" 53 "," fifty-three ");
    essay = essay.toLower().replace(" 52 "," fifty-two ");
    essay = essay.toLower().replace(" 51 "," fifty-one ");
    essay = essay.toLower().replace(" 50 "," fifty ");
    essay = essay.toLower().replace(" 49 "," forty-nine ");
    essay = essay.toLower().replace(" 48 "," forty-eight ");
    essay = essay.toLower().replace(" 47 "," forty-seven ");
    essay = essay.toLower().replace(" 46 "," forty-six ");
    essay = essay.toLower().replace(" 45 "," forty-five ");
    essay = essay.toLower().replace(" 44 "," forty-four ");
    essay = essay.toLower().replace(" 43 "," forty-three ");
    essay = essay.toLower().replace(" 42 "," forty-two ");
    essay = essay.toLower().replace(" 41 "," forty-one ");
    essay = essay.toLower().replace(" 40 "," forty ");
    essay = essay.toLower().replace(" 39 "," thirty-nine ");
    essay = essay.toLower().replace(" 38 "," thirty-eight ");
    essay = essay.toLower().replace(" 37 "," thirty-seven ");
    essay = essay.toLower().replace(" 36 "," thirty-six ");
    essay = essay.toLower().replace(" 35 "," thirty-five ");
    essay = essay.toLower().replace(" 34 "," thirty-four ");
    essay = essay.toLower().replace(" 33 "," thirty-three ");
    essay = essay.toLower().replace(" 32 "," thirty-two ");
    essay = essay.toLower().replace(" 31 "," thirty-one ");
    essay = essay.toLower().replace(" 30 "," thirty ");
    essay = essay.toLower().replace(" 29 "," twenty-nine ");
    essay = essay.toLower().replace(" 28 "," twenty-eight ");
    essay = essay.toLower().replace(" 27 "," twenty-seven ");
    essay = essay.toLower().replace(" 26 "," twenty-six ");
    essay = essay.toLower().replace(" 25 "," twenty-five ");
    essay = essay.toLower().replace(" 24 "," twenty-four ");
    essay = essay.toLower().replace(" 23 "," twenty-three ");
    essay = essay.toLower().replace(" 22 "," twenty-two ");
    essay = essay.toLower().replace(" 21 "," twenty-one ");
    essay = essay.toLower().replace(" 20 "," twenty ");
    essay = essay.toLower().replace(" 19 "," nineteen ");
    essay = essay.toLower().replace(" 18 "," eighteen ");
    essay = essay.toLower().replace(" 17 "," seventeen ");
    essay = essay.toLower().replace(" 16 "," sixteen ");
    essay = essay.toLower().replace(" 15 "," fifteen ");
    essay = essay.toLower().replace(" 14 "," fourteen ");
    essay = essay.toLower().replace(" 13 "," thirteen ");
    essay = essay.toLower().replace(" 12 "," twelve ");
    essay = essay.toLower().replace(" 11 "," eleven ");
    essay = essay.toLower().replace(" 10 "," ten ");
    essay = essay.toLower().replace(" 9 " ," nine ");
    essay = essay.toLower().replace(" 8 "," eight ");
    essay = essay.toLower().replace(" 7 "," seven ");
    essay = essay.toLower().replace(" 6 "," six ");
    essay = essay.toLower().replace(" 5 "," five ");
    essay = essay.toLower().replace(" 4 "," four ");
    essay = essay.toLower().replace(" 3 "," three ");
    essay = essay.toLower().replace(" 2 "," two ");
    essay = essay.toLower().replace(" 1 "," one ");
    return essay
    
}
function replacetransition(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.toLower().replace("thus","therefore");
        essay = essay.toLower().replace("additionally","correspondingly");
        essay = essay.toLower().replace("for example","one example that personifies this is");
        essay = essay.toLower().replace("for instance","one instance that personifies this is");

    }
    if(random === 2) {
        essay = essay.toLower().replace("also","in addition");
        essay = essay.toLower().replace("and","in addition");
        essay = essay.toLower().replace("thus","as a consequence");
        essay = essay.toLower().replace("additionally","comparatively");
        essay = essay.toLower().replace("if","in the instance that");
        essay = essay.toLower().replace("for example","one example that shows this is");
        essay = essay.toLower().replace("for instance","one instance that shows this is");
        essay = essay.toLower().replace("last","last of all");


    }
    essay = essay.toLower().replace("because","for the reason that");
    essay = essay.toLower().replace("also","additionally");
    essay = essay.toLower().replace("and","additionally");
    essay = essay.toLower().replace("etc","and so and so forth");
    essay = essay.toLower().replace("very","extraordinarily");
    essay = essay.toLower().replace("clearly","obviously");
    essay = essay.toLower().replace("thus","consequently");
    essay = essay.toLower().replace("additionally","in the same fashion");
    essay = essay.toLower().replace("but","however");
    essay = essay.toLower().replace("if","in the event that");
    essay = essay.toLower().replace("for example","one example that illustrates this is");
    essay = essay.toLower().replace("for instance","one instance that illustrates this is");
    essay = essay.toLower().replace("last","ultimately");
    essay = essay.toLower().replace("first","first of all");
    essay = essay.toLower().replace("next","consequently");
    return essay;
}

function replacecontractions(essay) {
    essay = essay.toLower().replace("hadn't","had not");
    essay = essay.toLower().replace("hasn't","has not");
    essay = essay.toLower().replace("haven't","have not");
    essay = essay.toLower().replace("he'd","he would");
    essay = essay.toLower().replace("he'll","he will");
    essay = essay.toLower().replace("he's","he is");
    essay = essay.toLower().replace("I'd","I would");
    essay = essay.toLower().replace("I'll","I will");
    essay = essay.toLower().replace("I'm","I am");
    essay = essay.toLower().replace("I've","I have");
    essay = essay.toLower().replace("isn't","is not");
    essay = essay.toLower().replace("it'd","it would");
    essay = essay.toLower().replace("it'll","it will");
    essay = essay.toLower().replace("it's","it is");
    essay = essay.toLower().replace("let's","let us");
    essay = essay.toLower().replace("mightn't","might not");
    essay = essay.toLower().replace("might've","might have");
    essay = essay.toLower().replace("mustn't","must not");
    essay = essay.toLower().replace("must've","must have");
    essay = essay.toLower().replace("needn't","need not");
    essay = essay.toLower().replace("not've","not have");
    essay = essay.toLower().replace("she'd","she would");
    essay = essay.toLower().replace("she'll","she will");
    essay = essay.toLower().replace("she's","she is");
    essay = essay.toLower().replace("should've","should have");
    essay = essay.toLower().replace("shouldn't","shouldn't");
    essay = essay.toLower().replace("it'll","it will");
    essay = essay.toLower().replace("that's","that is");
    essay = essay.toLower().replace("there'd","there would");
    essay = essay.toLower().replace("there're","there are");
    essay = essay.toLower().replace("there's","there is");
    essay = essay.toLower().replace("they'd","should have");
    essay = essay.toLower().replace("they'll","they will");
    essay = essay.toLower().replace("they've","they have");
    essay = essay.toLower().replace("we'd","we would");
    essay = essay.toLower().replace("we'll","we will");
    essay = essay.toLower().replace("we're","we are");
    essay = essay.toLower().replace("we've","we have");
    essay = essay.toLower().replace("weren't","were not");
    essay = essay.toLower().replace("what'll","what will");
    essay = essay.toLower().replace("what're","what are");
    essay = essay.toLower().replace("what's","what is");
    essay = essay.toLower().replace("what've","what have");
    essay = essay.toLower().replace("when's","when is");
    essay = essay.toLower().replace("where'd","where did");
    essay = essay.toLower().replace("where's","where is");
    essay = essay.toLower().replace("where've","where have");
    essay = essay.toLower().replace("who'd","who would");
    essay = essay.toLower().replace("who'll","who will");
    essay = essay.toLower().replace("who're","who are");
    essay = essay.toLower().replace("who's","who is");
    essay = essay.toLower().replace("who've","who've");
    essay = essay.toLower().replace("won't","will not");
    essay = essay.toLower().replace("would've","would have");
    essay = essay.toLower().replace("wouldn't","would not");
    essay = essay.toLower().replace("you'd","you would");
    essay = essay.toLower().replace("you'll","who will");
    essay = essay.toLower().replace("you're","you are");
    essay = essay.toLower().replace("you've","you have");
    return essay;
}

function finalreplace(essay){
    //essay.replacenumbers or replacenumbers?
    essay = replacenumbers(essay);
    essay = replacemath(essay);
    essay = replacetransition(essay);
    essay = replacecontractions(essay);
    
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