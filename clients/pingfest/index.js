import objectFromStory from "../../src/functions/objectFromStory";

import flying from './flying.gif';
import ready from './ready.jpg';
import night from './night.png';
import mp3 from './april.mp3';
import astro from './astro.png';
import ldr from './Semnas.png';
import itv from './ITV.png';

const StoryObject = objectFromStory(`

SUBTITLE
1-3 __ eh sahabat,
3-5 __ pingwin sudah siap meluncur
7-9 __ now playing - april (fiersa besari)
10-12 __ sfx: nyoooomm
13-14 __ buwung apa tu man
18-19 __ LDR itu seminar kece
19-20 __ pembicaranya wow semua
20-21 __ ITV lombanya seru-seru
21-22 __ kamu harus coba
22-28 __ kuy lah join 🔥
30-31 __ semoga sayembaranya...
31-32 __ juara...
32-33 __ dua :)

FOCUS
1-3 __ picture __ ${astro}
3-9 __ picture __ ${ready}
5-6 __ button __ LUNCURKAN!
6-7 __ text __ 3 __ font-size: 2rem; margin: 1rem 0; font-weight: bold;
7-8 __ text __ 2 __ font-size: 2rem; margin: 1rem 0; font-weight: bold;
8-9 __ text __ 1 __ font-size: 2rem; margin: 1rem 0; font-weight: bold;
9-14 __ picture __ ${flying}
15-18 __ text __ Ayo ikuti festival teknologi P!NGFEST 2020! "Char-IT"
16-18 __ text __ “Creative Constraints”
18-20 __ picture __ ${ldr}
20-22 __ picture __ ${itv}
22-3600 __ link __ pingfest.com __ color: white; font-size: 1.5rem;

BACKGROUND
12-3600 __ ${night} __ background-size: cover; animation: bg0 30s;

MUSIC
7-3600 __ ${mp3}

`);
export default StoryObject;
