var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section. And a cd: def f(x): return x + x A one-line cd: something here A cd with some clines:  a line here  Another line    A simple program element:  import httpx import pandas  import httpx import pandas  import httpx import pandas  Line numbers makes the button visually disappear (but still interactable via keyboard)  import httpx import pandas print(\"with line numbers\")  import httpx import pandas  def f(): return \"this is activecode\"  Don't know how to generate proper codelens:  def f(): return \"this is codelens\"  A console:   Console input here  And console output here  More input  More output    A static Java program with highlighted lines   \"hi\" in Java  import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }    side-by-side     def f(): return \"side-by-side\"   And also ...   def f(): return \"side-by-side\"      A <program> and a <console>    n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means    gcc -o intAndFloat intAndFloat.c  .\/intAndFloat  19088743 (integer) and 19088.742188 (float)       A <program> and a <cd>    n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means    n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means     Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.    Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   "
},
{
  "id": "sec-section-name-15",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-15",
  "type": "Listing",
  "number": "1.1.1",
  "title": "A static Java program with highlighted lines",
  "body": " A static Java program with highlighted lines   \"hi\" in Java  import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }   "
},
{
  "id": "sec-section-name-18",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-18",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " A <program> and a <console>    n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means    gcc -o intAndFloat intAndFloat.c  .\/intAndFloat  19088743 (integer) and 19088.742188 (float)     "
},
{
  "id": "sec-section-name-19",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-19",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " A <program> and a <cd>    n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means    n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
