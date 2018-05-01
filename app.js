const emojiFeed = [
  {
    "no": 1,
    "codes": "1F600",
    "char": "😀",
    "name": "grinning face",
    "keywords": "face | grin | grinning face"
  },
  {
    "no": 2,
    "codes": "1F601",
    "char": "😁",
    "name": "beaming face with smiling eyes",
    "keywords": "beaming face with smiling eyes | eye | face | grin | smile"
  },
  {
    "no": 3,
    "codes": "1F602",
    "char": "😂",
    "name": "face with tears of joy",
    "keywords": "face | face with tears of joy | joy | laugh | tear"
  },
  {
    "no": 4,
    "codes": "1F923",
    "char": "🤣",
    "name": "rolling on the floor laughing",
    "keywords": "face | floor | laugh | rolling | rolling on the floor laughing"
  },
  {
    "no": 5,
    "codes": "1F603",
    "char": "😃",
    "name": "grinning face with big eyes",
    "keywords": "face | grinning face with big eyes | mouth | open | smile"
  },
  {
    "no": 6,
    "codes": "1F604",
    "char": "😄",
    "name": "grinning face with smiling eyes",
    "keywords": "eye | face | grinning face with smiling eyes | mouth | open | smile"
  },
  {
    "no": 7,
    "codes": "1F605",
    "char": "😅",
    "name": "grinning face with sweat",
    "keywords": "cold | face | grinning face with sweat | open | smile | sweat"
  },
  {
    "no": 8,
    "codes": "1F606",
    "char": "😆",
    "name": "grinning squinting face",
    "keywords": "face | grinning squinting face | laugh | mouth | open | satisfied | smile"
  },
  {
    "no": 9,
    "codes": "1F609",
    "char": "😉",
    "name": "winking face",
    "keywords": "face | wink | winking face"
  },
  {
    "no": 10,
    "codes": "1F60A",
    "char": "😊",
    "name": "smiling face with smiling eyes",
    "keywords": "blush | eye | face | smile | smiling face with smiling eyes"
  },
  {
    "no": 11,
    "codes": "1F60B",
    "char": "😋",
    "name": "face savoring food",
    "keywords": "delicious | face | face savoring food | savouring | smile | um | yum"
  },
  {
    "no": 12,
    "codes": "1F60E",
    "char": "😎",
    "name": "smiling face with sunglasses",
    "keywords": "bright | cool | eye | eyewear | face | glasses | smile | smiling face with sunglasses | sun | sunglasses"
  },
  {
    "no": 13,
    "codes": "1F60D",
    "char": "😍",
    "name": "smiling face with heart-eyes",
    "keywords": "eye | face | love | smile | smiling face with heart-eyes"
  },
  {
    "no": 14,
    "codes": "1F618",
    "char": "😘",
    "name": "face blowing a kiss",
    "keywords": "face | face blowing a kiss | kiss"
  },
  {
    "no": 16,
    "codes": "1F617",
    "char": "😗",
    "name": "kissing face",
    "keywords": "face | kiss | kissing face"
  },
  {
    "no": 17,
    "codes": "1F619",
    "char": "😙",
    "name": "kissing face with smiling eyes",
    "keywords": "eye | face | kiss | kissing face with smiling eyes | smile"
  },
  {
    "no": 18,
    "codes": "1F61A",
    "char": "😚",
    "name": "kissing face with closed eyes",
    "keywords": "closed | eye | face | kiss | kissing face with closed eyes"
  },
  {
    "no": 19,
    "codes": "263A",
    "char": "☺",
    "name": "smiling face",
    "keywords": "face | outlined | relaxed | smile | smiling face"
  },
  {
    "no": 20,
    "codes": "1F642",
    "char": "🙂",
    "name": "slightly smiling face",
    "keywords": "face | slightly smiling face | smile"
  },
  {
    "no": 21,
    "codes": "1F917",
    "char": "🤗",
    "name": "hugging face",
    "keywords": "face | hug | hugging"
  },
  {
    "no": 22,
    "codes": "1F929",
    "char": "🤩",
    "name": "star-struck",
    "keywords": "eyes | face | grinning | star | star-struck | starry-eyed"
  },
  {
    "no": 23,
    "codes": "1F914",
    "char": "🤔",
    "name": "thinking face",
    "keywords": "face | thinking"
  },
  {
    "no": 24,
    "codes": "1F928",
    "char": "🤨",
    "name": "face with raised eyebrow",
    "keywords": "distrust | face with raised eyebrow | skeptic | disapproval | disbelief | mild surprise | scepticism"
  },
  {
    "no": 25,
    "codes": "1F610",
    "char": "😐",
    "name": "neutral face",
    "keywords": "deadpan | face | neutral"
  },
  {
    "no": 26,
    "codes": "1F611",
    "char": "😑",
    "name": "expressionless face",
    "keywords": "expressionless | face | inexpressive | unexpressive"
  },
  {
    "no": 27,
    "codes": "1F636",
    "char": "😶",
    "name": "face without mouth",
    "keywords": "face | face without mouth | mouth | quiet | silent"
  },
  {
    "no": 28,
    "codes": "1F644",
    "char": "🙄",
    "name": "face with rolling eyes",
    "keywords": "eyes | face | face with rolling eyes | rolling"
  },
  {
    "no": 29,
    "codes": "1F60F",
    "char": "😏",
    "name": "smirking face",
    "keywords": "face | smirk | smirking face"
  },
  {
    "no": 30,
    "codes": "1F623",
    "char": "😣",
    "name": "persevering face",
    "keywords": "face | persevere | persevering face"
  },
  {
    "no": 31,
    "codes": "1F625",
    "char": "😥",
    "name": "sad but relieved face",
    "keywords": "disappointed | face | relieved | sad but relieved face | whew"
  },
  {
    "no": 32,
    "codes": "1F62E",
    "char": "😮",
    "name": "face with open mouth",
    "keywords": "face | face with open mouth | mouth | open | sympathy"
  },
  {
    "no": 33,
    "codes": "1F910",
    "char": "🤐",
    "name": "zipper-mouth face",
    "keywords": "face | mouth | zipper | zipper-mouth face"
  },
  {
    "no": 34,
    "codes": "1F62F",
    "char": "😯",
    "name": "hushed face",
    "keywords": "face | hushed | stunned | surprised"
  },
  {
    "no": 35,
    "codes": "1F62A",
    "char": "😪",
    "name": "sleepy face",
    "keywords": "face | sleep | sleepy face"
  },
  {
    "no": 36,
    "codes": "1F62B",
    "char": "😫",
    "name": "tired face",
    "keywords": "face | tired"
  },
  {
    "no": 37,
    "codes": "1F634",
    "char": "😴",
    "name": "sleeping face",
    "keywords": "face | sleep | sleeping face | zzz"
  },
  {
    "no": 38,
    "codes": "1F60C",
    "char": "😌",
    "name": "relieved face",
    "keywords": "face | relieved"
  },
  {
    "no": 39,
    "codes": "1F61B",
    "char": "😛",
    "name": "face with tongue",
    "keywords": "face | face with tongue | tongue"
  },
  {
    "no": 40,
    "codes": "1F61C",
    "char": "😜",
    "name": "winking face with tongue",
    "keywords": "eye | face | joke | tongue | wink | winking face with tongue"
  },
  {
    "no": 41,
    "codes": "1F61D",
    "char": "😝",
    "name": "squinting face with tongue",
    "keywords": "eye | face | horrible | squinting face with tongue | taste | tongue"
  },
  {
    "no": 42,
    "codes": "1F924",
    "char": "🤤",
    "name": "drooling face",
    "keywords": "drooling | face"
  },
  {
    "no": 43,
    "codes": "1F612",
    "char": "😒",
    "name": "unamused face",
    "keywords": "face | unamused | unhappy"
  },
  {
    "no": 44,
    "codes": "1F613",
    "char": "😓",
    "name": "downcast face with sweat",
    "keywords": "cold | downcast face with sweat | face | sweat"
  },
  {
    "no": 45,
    "codes": "1F614",
    "char": "😔",
    "name": "pensive face",
    "keywords": "dejected | face | pensive"
  },
  {
    "no": 46,
    "codes": "1F615",
    "char": "😕",
    "name": "confused face",
    "keywords": "confused | face"
  },
  {
    "no": 47,
    "codes": "1F643",
    "char": "🙃",
    "name": "upside-down face",
    "keywords": "face | upside-down"
  },
  {
    "no": 48,
    "codes": "1F911",
    "char": "🤑",
    "name": "money-mouth face",
    "keywords": "face | money | money-mouth face | mouth"
  },
  {
    "no": 49,
    "codes": "1F632",
    "char": "😲",
    "name": "astonished face",
    "keywords": "astonished | face | shocked | totally"
  },
  {
    "no": 50,
    "codes": "2639",
    "char": "☹",
    "name": "frowning face",
    "keywords": "face | frown | frowning face"
  },
  {
    "no": 51,
    "codes": "1F641",
    "char": "🙁",
    "name": "slightly frowning face",
    "keywords": "face | frown | slightly frowning face"
  },
  {
    "no": 52,
    "codes": "1F616",
    "char": "😖",
    "name": "confounded face",
    "keywords": "confounded | face"
  },
  {
    "no": 53,
    "codes": "1F61E",
    "char": "😞",
    "name": "disappointed face",
    "keywords": "disappointed | face"
  },
  {
    "no": 54,
    "codes": "1F61F",
    "char": "😟",
    "name": "worried face",
    "keywords": "face | worried"
  },
  {
    "no": 55,
    "codes": "1F624",
    "char": "😤",
    "name": "face with steam from nose",
    "keywords": "face | face with steam from nose | triumph | won"
  },
  {
    "no": 56,
    "codes": "1F622",
    "char": "😢",
    "name": "crying face",
    "keywords": "cry | crying face | face | sad | tear"
  },
  {
    "no": 57,
    "codes": "1F62D",
    "char": "😭",
    "name": "loudly crying face",
    "keywords": "cry | face | loudly crying face | sad | sob | tear"
  },
  {
    "no": 58,
    "codes": "1F626",
    "char": "😦",
    "name": "frowning face with open mouth",
    "keywords": "face | frown | frowning face with open mouth | mouth | open"
  },
  {
    "no": 59,
    "codes": "1F627",
    "char": "😧",
    "name": "anguished face",
    "keywords": "anguished | face"
  },
  {
    "no": 60,
    "codes": "1F628",
    "char": "😨",
    "name": "fearful face",
    "keywords": "face | fear | fearful | scared"
  },
  {
    "no": 61,
    "codes": "1F629",
    "char": "😩",
    "name": "weary face",
    "keywords": "face | tired | weary"
  },
  {
    "no": 62,
    "codes": "1F92F",
    "char": "🤯",
    "name": "exploding head",
    "keywords": "exploding head | shocked"
  },
  {
    "no": 63,
    "codes": "1F62C",
    "char": "😬",
    "name": "grimacing face",
    "keywords": "face | grimace | grimacing face"
  },
  {
    "no": 64,
    "codes": "1F630",
    "char": "😰",
    "name": "anxious face with sweat",
    "keywords": "anxious face with sweat | blue | cold | face | mouth | open | rushed | sweat"
  },
  {
    "no": 65,
    "codes": "1F631",
    "char": "😱",
    "name": "face screaming in fear",
    "keywords": "face | face screaming in fear | fear | fearful | munch | scared | scream"
  },
  {
    "no": 68,
    "codes": "1F633",
    "char": "😳",
    "name": "flushed face",
    "keywords": "dazed | face | flushed"
  },
  {
    "no": 69,
    "codes": "1F92A",
    "char": "🤪",
    "name": "zany face",
    "keywords": "eye | goofy | large | small | zany face"
  },
  {
    "no": 70,
    "codes": "1F635",
    "char": "😵",
    "name": "dizzy face",
    "keywords": "dizzy | face"
  },
  {
    "no": 71,
    "codes": "1F621",
    "char": "😡",
    "name": "pouting face",
    "keywords": "angry | face | mad | pouting | rage | red"
  },
  {
    "no": 72,
    "codes": "1F620",
    "char": "😠",
    "name": "angry face",
    "keywords": "angry | face | mad"
  },
  {
    "no": 73,
    "codes": "1F92C",
    "char": "🤬",
    "name": "face with symbols on mouth",
    "keywords": "face with symbols on mouth | swearing | cursing"
  },
  {
    "no": 74,
    "codes": "1F637",
    "char": "😷",
    "name": "face with medical mask",
    "keywords": "cold | doctor | face | face with medical mask | mask | medicine | sick"
  },
  {
    "no": 75,
    "codes": "1F912",
    "char": "🤒",
    "name": "face with thermometer",
    "keywords": "face | face with thermometer | ill | sick | thermometer"
  },
  {
    "no": 76,
    "codes": "1F915",
    "char": "🤕",
    "name": "face with head-bandage",
    "keywords": "bandage | face | face with head-bandage | hurt | injury"
  },
  {
    "no": 77,
    "codes": "1F922",
    "char": "🤢",
    "name": "nauseated face",
    "keywords": "face | nauseated | vomit"
  },
  {
    "no": 78,
    "codes": "1F92E",
    "char": "🤮",
    "name": "face vomiting",
    "keywords": "face vomiting | sick | vomit"
  },
  {
    "no": 79,
    "codes": "1F927",
    "char": "🤧",
    "name": "sneezing face",
    "keywords": "face | gesundheit | sneeze | sneezing face"
  },
  {
    "no": 80,
    "codes": "1F607",
    "char": "😇",
    "name": "smiling face with halo",
    "keywords": "angel | face | fairy tale | fantasy | halo | innocent | smile | smiling face with halo"
  },
  {
    "no": 81,
    "codes": "1F920",
    "char": "🤠",
    "name": "cowboy hat face",
    "keywords": "cowboy | cowgirl | face | hat"
  },
  {
    "no": 85,
    "codes": "1F925",
    "char": "🤥",
    "name": "lying face",
    "keywords": "face | lie | lying face | pinocchio"
  },
  {
    "no": 86,
    "codes": "1F92B",
    "char": "🤫",
    "name": "shushing face",
    "keywords": "quiet | shush | shushing face"
  },
  {
    "no": 87,
    "codes": "1F92D",
    "char": "🤭",
    "name": "face with hand over mouth",
    "keywords": "face with hand over mouth | whoops | shock | sudden realization | surprise"
  },
  {
    "no": 88,
    "codes": "1F9D0",
    "char": "🧐",
    "name": "face with monocle",
    "keywords": "face with monocle | stuffy | wealthy"
  },
  {
    "no": 89,
    "codes": "1F913",
    "char": "🤓",
    "name": "nerd face",
    "keywords": "face | geek | nerd"
  },
  {
    "no": 90,
    "codes": "1F608",
    "char": "😈",
    "name": "smiling face with horns",
    "keywords": "face | fairy tale | fantasy | horns | smile | smiling face with horns"
  },
  {
    "no": 91,
    "codes": "1F47F",
    "char": "👿",
    "name": "angry face with horns",
    "keywords": "angry face with horns | demon | devil | face | fairy tale | fantasy | imp"
  },
  {
    "no": 92,
    "codes": "1F921",
    "char": "🤡",
    "name": "clown face",
    "keywords": "clown | face"
  },
  {
    "no": 93,
    "codes": "1F479",
    "char": "👹",
    "name": "ogre",
    "keywords": "creature | face | fairy tale | fantasy | monster | ogre | troll"
  },
  {
    "no": 94,
    "codes": "1F47A",
    "char": "👺",
    "name": "goblin",
    "keywords": "creature | face | fairy tale | fantasy | goblin | monster"
  },
  {
    "no": 95,
    "codes": "1F480",
    "char": "💀",
    "name": "skull",
    "keywords": "death | face | fairy tale | monster | skull"
  },
  {
    "no": 97,
    "codes": "1F47B",
    "char": "👻",
    "name": "ghost",
    "keywords": "creature | face | fairy tale | fantasy | ghost | monster"
  },
  {
    "no": 98,
    "codes": "1F47D",
    "char": "👽",
    "name": "alien",
    "keywords": "alien | creature | extraterrestrial | face | fairy tale | fantasy | monster | ufo"
  },
  {
    "no": 99,
    "codes": "1F47E",
    "char": "👾",
    "name": "alien monster",
    "keywords": "alien | creature | extraterrestrial | face | fairy tale | fantasy | monster | ufo"
  },
  {
    "no": 100,
    "codes": "1F916",
    "char": "🤖",
    "name": "robot face",
    "keywords": "face | monster | robot"
  },
  {
    "no": 101,
    "codes": "1F4A9",
    "char": "💩",
    "name": "pile of poo",
    "keywords": "comic | dung | face | monster | pile of poo | poo | poop"
  },
  {
    "no": 102,
    "codes": "1F63A",
    "char": "😺",
    "name": "grinning cat face",
    "keywords": "cat | face | grinning cat face | mouth | open | smile"
  },
  {
    "no": 103,
    "codes": "1F638",
    "char": "😸",
    "name": "grinning cat face with smiling eyes",
    "keywords": "cat | eye | face | grin | grinning cat face with smiling eyes | smile"
  },
  {
    "no": 104,
    "codes": "1F639",
    "char": "😹",
    "name": "cat face with tears of joy",
    "keywords": "cat | cat face with tears of joy | face | joy | tear"
  },
  {
    "no": 105,
    "codes": "1F63B",
    "char": "😻",
    "name": "smiling cat face with heart-eyes",
    "keywords": "cat | eye | face | love | smile | smiling cat face with heart-eyes"
  },
  {
    "no": 106,
    "codes": "1F63C",
    "char": "😼",
    "name": "cat face with wry smile",
    "keywords": "cat | cat face with wry smile | face | ironic | smile | wry"
  },
  {
    "no": 107,
    "codes": "1F63D",
    "char": "😽",
    "name": "kissing cat face",
    "keywords": "cat | eye | face | kiss | kissing cat face"
  },
  {
    "no": 108,
    "codes": "1F640",
    "char": "🙀",
    "name": "weary cat face",
    "keywords": "cat | face | oh | surprised | weary"
  },
  {
    "no": 109,
    "codes": "1F63F",
    "char": "😿",
    "name": "crying cat face",
    "keywords": "cat | cry | crying cat face | face | sad | tear"
  },
  {
    "no": 110,
    "codes": "1F63E",
    "char": "😾",
    "name": "pouting cat face",
    "keywords": "cat | face | pouting"
  },
  {
    "no": 111,
    "codes": "1F648",
    "char": "🙈",
    "name": "see-no-evil monkey",
    "keywords": "evil | face | forbidden | gesture | monkey | no | not | prohibited | see | see-no-evil monkey"
  },
  {
    "no": 112,
    "codes": "1F649",
    "char": "🙉",
    "name": "hear-no-evil monkey",
    "keywords": "evil | face | forbidden | gesture | hear | hear-no-evil monkey | monkey | no | not | prohibited"
  },
  {
    "no": 113,
    "codes": "1F64A",
    "char": "🙊",
    "name": "speak-no-evil monkey",
    "keywords": "evil | face | forbidden | gesture | monkey | no | not | prohibited | speak | speak-no-evil monkey"
  },
  {
    "no": 114,
    "codes": "1F476",
    "char": "👶",
    "name": "baby",
    "keywords": "baby | young"
  },
  {
    "no": 115,
    "codes": "1F9D2",
    "char": "🧒",
    "name": "child",
    "keywords": "child | gender-neutral | young | (no specific gender)"
  },
  {
    "no": 116,
    "codes": "1F466",
    "char": "👦",
    "name": "boy",
    "keywords": "boy | young"
  },
  {
    "no": 117,
    "codes": "1F467",
    "char": "👧",
    "name": "girl",
    "keywords": "girl | Virgo | young | zodiac"
  },
  {
    "no": 118,
    "codes": "1F9D1",
    "char": "🧑",
    "name": "adult",
    "keywords": "adult | gender-neutral | (no specific gender)"
  },
  {
    "no": 119,
    "codes": "1F468",
    "char": "👨",
    "name": "man",
    "keywords": "man"
  },
  {
    "no": 120,
    "codes": "1F469",
    "char": "👩",
    "name": "woman",
    "keywords": "woman"
  },
  {
    "no": 121,
    "codes": "1F9D3",
    "char": "🧓",
    "name": "older adult",
    "keywords": "gender-neutral | old | older adult | (no specific gender)"
  },
  {
    "no": 122,
    "codes": "1F474",
    "char": "👴",
    "name": "old man",
    "keywords": "man | old"
  },
  {
    "no": 123,
    "codes": "1F475",
    "char": "👵",
    "name": "old woman",
    "keywords": "old | woman"
  },
  {
    "no": 124,
    "codes": "1F468 200D 2695 FE0F",
    "char": "👨‍⚕️",
    "name": "man health worker",
    "keywords": "doctor | healthcare | man | man health worker | nurse | therapist"
  },
  {
    "no": 125,
    "codes": "1F469 200D 2695 FE0F",
    "char": "👩‍⚕️",
    "name": "woman health worker",
    "keywords": "doctor | healthcare | nurse | therapist | woman | woman health worker"
  },
  {
    "no": 126,
    "codes": "1F468 200D 1F393",
    "char": "👨‍🎓",
    "name": "man student",
    "keywords": "graduate | man | student"
  },
  {
    "no": 127,
    "codes": "1F469 200D 1F393",
    "char": "👩‍🎓",
    "name": "woman student",
    "keywords": "graduate | student | woman"
  },
  {
    "no": 128,
    "codes": "1F468 200D 1F3EB",
    "char": "👨‍🏫",
    "name": "man teacher",
    "keywords": "instructor | man | professor | teacher"
  },
  {
    "no": 129,
    "codes": "1F469 200D 1F3EB",
    "char": "👩‍🏫",
    "name": "woman teacher",
    "keywords": "instructor | professor | teacher | woman"
  },
  {
    "no": 130,
    "codes": "1F468 200D 2696 FE0F",
    "char": "👨‍⚖️",
    "name": "man judge",
    "keywords": "justice | man | man judge | scales"
  },
  {
    "no": 131,
    "codes": "1F469 200D 2696 FE0F",
    "char": "👩‍⚖️",
    "name": "woman judge",
    "keywords": "judge | scales | woman"
  },
  {
    "no": 132,
    "codes": "1F468 200D 1F33E",
    "char": "👨‍🌾",
    "name": "man farmer",
    "keywords": "farmer | gardener | man | rancher"
  },
  {
    "no": 133,
    "codes": "1F469 200D 1F33E",
    "char": "👩‍🌾",
    "name": "woman farmer",
    "keywords": "farmer | gardener | rancher | woman"
  },
  {
    "no": 134,
    "codes": "1F468 200D 1F373",
    "char": "👨‍🍳",
    "name": "man cook",
    "keywords": "chef | cook | man"
  },
  {
    "no": 135,
    "codes": "1F469 200D 1F373",
    "char": "👩‍🍳",
    "name": "woman cook",
    "keywords": "chef | cook | woman"
  },
  {
    "no": 136,
    "codes": "1F468 200D 1F527",
    "char": "👨‍🔧",
    "name": "man mechanic",
    "keywords": "electrician | man | mechanic | plumber | tradesperson"
  },
  {
    "no": 137,
    "codes": "1F469 200D 1F527",
    "char": "👩‍🔧",
    "name": "woman mechanic",
    "keywords": "electrician | mechanic | plumber | tradesperson | woman"
  },
  {
    "no": 138,
    "codes": "1F468 200D 1F3ED",
    "char": "👨‍🏭",
    "name": "man factory worker",
    "keywords": "assembly | factory | industrial | man | worker"
  },
  {
    "no": 139,
    "codes": "1F469 200D 1F3ED",
    "char": "👩‍🏭",
    "name": "woman factory worker",
    "keywords": "assembly | factory | industrial | woman | worker"
  },
  {
    "no": 140,
    "codes": "1F468 200D 1F4BC",
    "char": "👨‍💼",
    "name": "man office worker",
    "keywords": "architect | business | man | man office worker | manager | office | white-collar"
  },
  {
    "no": 141,
    "codes": "1F469 200D 1F4BC",
    "char": "👩‍💼",
    "name": "woman office worker",
    "keywords": "architect | business | manager | office | white-collar | woman | woman office worker"
  },
  {
    "no": 142,
    "codes": "1F468 200D 1F52C",
    "char": "👨‍🔬",
    "name": "man scientist",
    "keywords": "biologist | chemist | engineer | man | mathematician | physicist | scientist"
  },
  {
    "no": 143,
    "codes": "1F469 200D 1F52C",
    "char": "👩‍🔬",
    "name": "woman scientist",
    "keywords": "biologist | chemist | engineer | mathematician | physicist | scientist | woman"
  },
  {
    "no": 144,
    "codes": "1F468 200D 1F4BB",
    "char": "👨‍💻",
    "name": "man technologist",
    "keywords": "coder | developer | inventor | man | software | technologist"
  },
  {
    "no": 145,
    "codes": "1F469 200D 1F4BB",
    "char": "👩‍💻",
    "name": "woman technologist",
    "keywords": "coder | developer | inventor | software | technologist | woman"
  },
  {
    "no": 146,
    "codes": "1F468 200D 1F3A4",
    "char": "👨‍🎤",
    "name": "man singer",
    "keywords": "actor | entertainer | man | rock | singer | star"
  },
  {
    "no": 147,
    "codes": "1F469 200D 1F3A4",
    "char": "👩‍🎤",
    "name": "woman singer",
    "keywords": "actor | entertainer | rock | singer | star | woman"
  },
  {
    "no": 148,
    "codes": "1F468 200D 1F3A8",
    "char": "👨‍🎨",
    "name": "man artist",
    "keywords": "artist | man | palette"
  },
  {
    "no": 149,
    "codes": "1F469 200D 1F3A8",
    "char": "👩‍🎨",
    "name": "woman artist",
    "keywords": "artist | palette | woman"
  },
  {
    "no": 150,
    "codes": "1F468 200D 2708 FE0F",
    "char": "👨‍✈️",
    "name": "man pilot",
    "keywords": "man | pilot | plane"
  },
  {
    "no": 151,
    "codes": "1F469 200D 2708 FE0F",
    "char": "👩‍✈️",
    "name": "woman pilot",
    "keywords": "pilot | plane | woman"
  },
  {
    "no": 152,
    "codes": "1F468 200D 1F680",
    "char": "👨‍🚀",
    "name": "man astronaut",
    "keywords": "astronaut | man | rocket"
  },
  {
    "no": 153,
    "codes": "1F469 200D 1F680",
    "char": "👩‍🚀",
    "name": "woman astronaut",
    "keywords": "astronaut | rocket | woman"
  },
  {
    "no": 154,
    "codes": "1F468 200D 1F692",
    "char": "👨‍🚒",
    "name": "man firefighter",
    "keywords": "firefighter | firetruck | man"
  },
  {
    "no": 155,
    "codes": "1F469 200D 1F692",
    "char": "👩‍🚒",
    "name": "woman firefighter",
    "keywords": "firefighter | firetruck | woman"
  },
  {
    "no": 156,
    "codes": "1F46E",
    "char": "👮",
    "name": "police officer",
    "keywords": "cop | officer | police"
  },
  {
    "no": 159,
    "codes": "1F575",
    "char": "🕵",
    "name": "detective",
    "keywords": "detective | sleuth | spy"
  },
  {
    "no": 162,
    "codes": "1F482",
    "char": "💂",
    "name": "guard",
    "keywords": "guard"
  },
  {
    "no": 165,
    "codes": "1F477",
    "char": "👷",
    "name": "construction worker",
    "keywords": "construction | hat | worker"
  },
  {
    "no": 168,
    "codes": "1F934",
    "char": "🤴",
    "name": "prince",
    "keywords": "prince"
  },
  {
    "no": 169,
    "codes": "1F478",
    "char": "👸",
    "name": "princess",
    "keywords": "fairy tale | fantasy | princess"
  },
  {
    "no": 170,
    "codes": "1F473",
    "char": "👳",
    "name": "person wearing turban",
    "keywords": "person wearing turban | turban"
  },
  {
    "no": 171,
    "codes": "1F473 200D 2642 FE0F",
    "char": "👳‍",
    "name": "wearing turban",
    "keywords": "man | man wearing turban | turban"
  },
  {
    "no": 173,
    "codes": "1F472",
    "char": "👲",
    "name": "man with Chinese cap",
    "keywords": "gua pi mao | hat | man | man with Chinese cap"
  },
  {
    "no": 174,
    "codes": "1F9D5",
    "char": "🧕",
    "name": "woman with headscarf",
    "keywords": "headscarf | hijab | mantilla | tichel | woman with headscarf | bandana | head kerchief"
  },
  {
    "no": 175,
    "codes": "1F9D4",
    "char": "🧔",
    "name": "bearded person",
    "keywords": "beard | bearded person | bewhiskered"
  },
  {
    "no": 176,
    "codes": "1F471",
    "char": "👱",
    "name": "blond-haired person",
    "keywords": "blond | blond-haired person"
  },
  {
    "no": 187,
    "codes": "1F935",
    "char": "🤵",
    "name": "man in tuxedo",
    "keywords": "groom | man | man in tuxedo | tuxedo"
  },
  {
    "no": 188,
    "codes": "1F470",
    "char": "👰",
    "name": "bride with veil",
    "keywords": "bride | bride with veil | veil | wedding"
  },
  {
    "no": 189,
    "codes": "1F930",
    "char": "🤰",
    "name": "pregnant woman",
    "keywords": "pregnant | woman"
  },
  {
    "no": 190,
    "codes": "1F931",
    "char": "🤱",
    "name": "breast-feeding",
    "keywords": "baby | breast | breast-feeding | nursing"
  },
  {
    "no": 191,
    "codes": "1F47C",
    "char": "👼",
    "name": "baby angel",
    "keywords": "angel | baby | face | fairy tale | fantasy"
  },
  {
    "no": 192,
    "codes": "1F385",
    "char": "🎅",
    "name": "Santa Claus",
    "keywords": "celebration | Christmas | claus | father | santa | Santa Claus"
  },
  {
    "no": 193,
    "codes": "1F936",
    "char": "🤶",
    "name": "Mrs. Claus",
    "keywords": "celebration | Christmas | claus | mother | Mrs. | Mrs. Claus"
  },
  {
    "no": 200,
    "codes": "1F9D9",
    "char": "🧙",
    "name": "mage",
    "keywords": "mage | sorcerer | sorceress | witch | wizard"
  },
  {
    "no": 201,
    "codes": "1F9D9 200D 2640 FE0F",
    "char": "🧙‍",
    "name": "mage",
    "keywords": "sorceress | witch | woman mage"
  },
  {
    "no": 203,
    "codes": "1F9DA",
    "char": "🧚",
    "name": "fairy",
    "keywords": "fairy | Oberon | Puck | Titania"
  },
  {
    "no": 206,
    "codes": "1F9DB",
    "char": "🧛",
    "name": "vampire",
    "keywords": "Dracula | undead | vampire"
  },
  {
    "no": 207,
    "codes": "1F9DB 200D 2640 FE0F",
    "char": "🧛‍",
    "name": "vampire",
    "keywords": "undead | woman vampire"
  },
  {
    "no": 209,
    "codes": "1F9DC",
    "char": "🧜",
    "name": "merperson",
    "keywords": "mermaid | merman | merperson | merwoman"
  },
  {
    "no": 210,
    "codes": "1F9DC 200D 2640 FE0F",
    "char": "🧜‍",
    "name": "mermaid",
    "keywords": "mermaid | merwoman"
  },
  {
    "no": 212,
    "codes": "1F9DD",
    "char": "🧝",
    "name": "elf",
    "keywords": "elf | magical | LOTR style"
  },
  {
    "no": 215,
    "codes": "1F9DE",
    "char": "🧞",
    "name": "genie",
    "keywords": "djinn | genie | (non-human color)"
  },
  {
    "no": 218,
    "codes": "1F9DF",
    "char": "🧟",
    "name": "zombie",
    "keywords": "undead | walking dead | zombie | (non-human color)"
  },
  {
    "no": 221,
    "codes": "1F64D",
    "char": "🙍",
    "name": "person frowning",
    "keywords": "frown | gesture | person frowning"
  },
  {
    "no": 224,
    "codes": "1F64E",
    "char": "🙎",
    "name": "person pouting",
    "keywords": "gesture | person pouting | pouting"
  },
  {
    "no": 227,
    "codes": "1F645",
    "char": "🙅",
    "name": "person gesturing NO",
    "keywords": "forbidden | gesture | hand | no | not | person gesturing NO | prohibited"
  },
  {
    "no": 230,
    "codes": "1F646",
    "char": "🙆",
    "name": "person gesturing OK",
    "keywords": "gesture | hand | OK | person gesturing OK"
  },
  {
    "no": 233,
    "codes": "1F481",
    "char": "💁",
    "name": "person tipping hand",
    "keywords": "hand | help | information | person tipping hand | sassy | tipping"
  },
  {
    "no": 236,
    "codes": "1F64B",
    "char": "🙋",
    "name": "person raising hand",
    "keywords": "gesture | hand | happy | person raising hand | raised"
  },
  {
    "no": 239,
    "codes": "1F647",
    "char": "🙇",
    "name": "person bowing",
    "keywords": "apology | bow | gesture | person bowing | sorry"
  },
  {
    "no": 242,
    "codes": "1F926",
    "char": "🤦",
    "name": "person facepalming",
    "keywords": "disbelief | exasperation | face | palm | person facepalming"
  },
  {
    "no": 245,
    "codes": "1F937",
    "char": "🤷",
    "name": "person shrugging",
    "keywords": "doubt | ignorance | indifference | person shrugging | shrug"
  },
  {
    "no": 248,
    "codes": "1F486",
    "char": "💆",
    "name": "person getting massage",
    "keywords": "face | massage | person getting massage | salon"
  },
  {
    "no": 251,
    "codes": "1F487",
    "char": "💇",
    "name": "person getting haircut",
    "keywords": "barber | beauty | haircut | parlor | person getting haircut"
  }
];

//

const emojiButton = document.getElementById("random-emoji-button");

emojiButton.addEventListener("click", emojiRandomizer);

function emojiRandomizer() {

  const randomEmoji = emojiFeed[Math.floor(Math.random()*emojiFeed.length)];
  document.getElementById("emoji-char").innerHTML = randomEmoji.char;
  document.getElementById("emoji-definition").innerHTML = randomEmoji.name;
  document.getElementById("instructions").innerHTML = "";
}
