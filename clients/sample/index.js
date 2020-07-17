import objectFromStory from "../../src/functions/objectFromStory";

import kue from "./kue.png";
import mp3 from "./monokrom.mp3";
import kota from "./night.png";
import ciwiciwi from "./ciwiciwi.jpeg";
import cloud from "./cloud.jpg";
import bunga from "./ciwi.jpeg";
import cowociwi from "./cowociwi.jpeg";

const StoryObject = objectFromStory(`

SUBTITLE
3-4 __ oy
5-8 __ bunga
9-12 __ hbd bungg
13-15 __ sedih kita ga bisa ketemuan
17-19 __ jadi kita rayakan secara online aja
20-21 __ ya?
23-25 __ * tada *
25-27 __ ayok di tiup lilinnya
28-30 __ * sfx meniup *
45-48 __ anggap aja ini kata-kata doa
48-50 __ doa cetak tebal __ font-weight: bold;
50-53 __ doa cetak miring __ font-style: italic;
53-57 __ doa cetak ganti warna __ color: yellow;
58-60 __ ganti foto
60-61 __ 3
61-62 __ 2
62-63 __ 1
64-69 __ * cling *
74-3600 __ 2020

FOCUS
9-21 __ picture __ ${ciwiciwi}
23-27 __ picture __ ${kue}
26-27 __ button __ TIUP!
29-35 __ text __ HBD BUNGAAAAA __ color: yellow;
30-35 __ text __ HBD BUNGAAAAA __ color: yellow;
31-35 __ text __ HBD BUNGAAAAA __ color: yellow;
32-35 __ text __ HBD BUNGAAAAA __ color: yellow;
33-35 __ text __ HBD BUNGAAAAA __ color: yellow;
37-43 __ text __ BIRTHDAY GIRL __ font-size: 3rem; margin: 1rem 0; font-weight: bold;
37-63 __ picture __ ${bunga}
64-70 __ picture __ ${cowociwi}
72-3600 __ text __ mengucapkan.online __ font-size: 2rem; font-weight: bold;

BACKGROUND
9-27 __ ${kota} __ background-size: cover;
27-30 __ . __ background-color: black;
30-3600 __ ${cloud} __ animation: bg1 24s linear infinite;

MUSIC
27-3600 __ ${mp3}

`);
export default StoryObject;