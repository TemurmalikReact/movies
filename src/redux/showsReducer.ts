import defaultShowsSelector from './selectors/defaultShowsSelector';
import { InitialShowType } from './types/showsTypes';

const SORT_BY_ALPHABET = 'shows/SORT_BY_ALPHABET';
const SORT_BY_DATE = 'shows/SORT_BY_DATE';
const SORT_BY_YOUR_FAVORITE = 'shows/SORT_BY_YOUR_FAVORITE';
const SORT_BY_YOUR_VIEWS = 'shows/SORT_BY_YOUR_VIEWS';
const SORT_BY_YOUR_RATING = 'shows/SORT_BY_YOUR_RATING';
const SORT_BY_YOUR_AVERAGE_RATING = 'shows/SORT_BY_YOUR_AVERAGE_RATING';

const initialState: Array<InitialShowType> = [
  {
    title: 'Attack on Titan',
    yourRating: 10,
    date: 8,
    yourViews: 6,
    content: [
      {
        seasonContent: [
          {
            title: 'To You, 2000 years later',
            yourRating: 10,
          },
          {
            title: 'That Day: The Fall of Shiganshina',
            yourRating: 9,
          },
          {
            title: 'A Dim Light Amid Despair:',
            yourRating: 9,
          },
          {
            title: 'The Night of the closing Ceremony',
            yourRating: 9,
          },
          {
            title: 'First Battle',
            yourRating: 10,
          },
          {
            title: 'The World the Girl saw',
            yourRating: 9,
          },
          {
            title: 'Small Blade',
            yourRating: 9, //
          },
          {
            title: 'I can hear his heartbeat',
            yourRating: 9, //
          },
          {
            title: 'Whereabouts of His Left Arm',
            yourRating: 9, //
          },
          {
            title: 'Response',
            yourRating: 7,
          },
          {
            title: 'Idol',
            yourRating: 8,
          },
          {
            title: 'Wound',
            yourRating: 8,
          },
          {
            title: 'Primal Desire',
            yourRating: 10,
          },
          {
            title: "Can't Look into His Eyes Yet",
            yourRating: 8,
          },
          {
            title: 'Special Operations Squad',
            yourRating: 9,
          },
          {
            title: "What's needed to be done now",
            yourRating: 8,
          },
          {
            title: 'Female Titan',
            yourRating: 10,
          },
          {
            title: 'Forest of Giant Trees',
            yourRating: 9,
          },
          {
            title: 'Bite',
            yourRating: 9,
          },
          {
            title: 'Erwin Smith',
            yourRating: 9,
          },
          {
            title: 'Crushing Blow',
            yourRating: 10,
          },
          {
            title: 'The Defeated',
            yourRating: 9,
          },
          {
            title: 'Smile',
            yourRating: 9,
          },
          {
            title: 'Mercy',
            yourRating: 9,
          },
          {
            title: 'Wall',
            yourRating: 10,
          },
        ],
      },
      {
        seasonContent: [
          {
            title: 'The Beast Titan',
            yourRating: 10,
          },
          {
            title: 'I am Home',
            yourRating: 9,
          },
          {
            title: 'Southwest Ward',
            yourRating: 9,
          },
          {
            title: 'Soldier',
            yourRating: 9,
          },
          {
            title: 'Historia',
            yourRating: 9,
          },
          {
            title: 'Warrior',
            yourRating: 10,
          },
          {
            title: 'Close Combat',
            yourRating: 10,
          },
          {
            title: 'The Hunters',
            yourRating: 8,
          },
          {
            title: 'Opening',
            yourRating: 9,
          },
          {
            title: 'Children',
            yourRating: 9,
          },
          {
            title: 'Charge',
            yourRating: 10,
          },
          {
            title: 'Scream',
            yourRating: 10,
          },
        ],
      },
      {
        seasonContent: [
          {
            title: 'Smoke Signal',
            yourRating: 9,
          },
          {
            title: 'Pain',
            yourRating: 10,
          },
          {
            title: 'Old Story',
            yourRating: 9,
          },
          {
            title: 'Trust',
            yourRating: 8, //
          },
          {
            title: 'Reply',
            yourRating: 9,
          },
          {
            title: 'Sin',
            yourRating: 10,
          },
          {
            title: 'Wish',
            yourRating: 10,
          },
          {
            title: 'Outside the Walls of Orvud District',
            yourRating: 9,
          },
          {
            title: 'Ruler of the Walls',
            yourRating: 9,
          },
          {
            title: 'Friends',
            yourRating: 10,
          },
          {
            title: 'Bystander',
            yourRating: 10,
          },
          {
            title: 'Night of the Battle to Retake the Wall',
            yourRating: 9,
          },
          {
            title: 'The town where everything began',
            yourRating: 10,
          },
          {
            title: 'Thunder Spears',
            yourRating: 9,
          },
          {
            title: 'Descent',
            yourRating: 10,
          },
          {
            title: 'Perfect Game',
            yourRating: 10,
          },
          {
            title: 'Hero',
            yourRating: 10,
          },
          {
            title: 'Midnight Sun',
            yourRating: 10,
          },
          {
            title: 'The Basement',
            yourRating: 9,
          },
          {
            title: 'That Day',
            yourRating: 10,
          },
          {
            title: 'Attack Titan',
            yourRating: 10,
          },
          {
            title: 'The Other Side of the Walls',
            yourRating: 10,
          },
        ],
      },
      {
        seasonContent: [
          {
            title: 'The Other Side of the Sea',
            yourRating: 9,
          },
          {
            title: 'Midnight Train',
            yourRating: 9,
          },
          {
            title: 'The Door of Hope',
            yourRating: 10,
          },
          {
            title: 'From one hand to another',
            yourRating: 9,
          },
          {
            title: 'Decloration of War',
            yourRating: 10,
          },
          {
            title: 'Warhammer Titan',
            yourRating: 10,
          },
          {
            title: 'Assault',
            yourRating: 10,
          },
          {
            title: "Assasin's Bullet",
            yourRating: 10,
          },
          {
            title: 'Brave Volunteers',
            yourRating: 9,
          },
          {
            title: 'A Sound Argument',
            yourRating: 9,
          },
          {
            title: 'Deceiver',
            yourRating: 9,
          },
          {
            title: 'Guides',
            yourRating: 9,
          },
          {
            title: 'Children of the Forest',
            yourRating: 9, 
          },
          {
            title: 'Saveragy',
            yourRating: 10,
          },
          {
            title: 'Sole Solvation',
            yourRating: 10,
          },
          {
            title: 'Above and Below',
            yourRating: 10,
          },
        ]
      },
    ],
  },
  {
    title: 'Gravity Falls',
    yourRating: 10,
    date: 3,
    yourViews: 16,
    content: [
      {
        seasonContent: [
          { title: 'Pilot', yourRating: 9 },
          { title: 'The Legend of the Gobblewonker', yourRating: 8 },
          { title: 'Headhunters', yourRating: 8 },
          { title: 'The Hand That Rocks the Mabel', yourRating: 8 },
          { title: 'The Inconviencing', yourRating: 10 },
          { title: 'Dipper vs Manliness', yourRating: 10 },
          { title: 'Double Dipper', yourRating: 9 },
          { title: 'Irrational Treasure', yourRating: 7 },
          { title: "The time traveler's Pig", yourRating: 9 },
          { title: 'Fight Fighters', yourRating: 10 },
          { title: 'Little Dipper', yourRating: 8 },
          { title: 'Summerween', yourRating: 9 },
          { title: 'Boss Mabel', yourRating: 8 },
          { title: 'The Bottomless Pitt', yourRating: 8 },
          { title: 'The Deep End', yourRating: 8 },
          { title: 'Carpet Diem', yourRating: 10 },
          { title: 'Boys Crazy', yourRating: 8 },
          { title: 'Land before Swine', yourRating: 8 },
          { title: 'Dreamscaperers', yourRating: 10 },
          { title: 'Gideon Rises', yourRating: 10 },
        ],
      },
      {
        seasonContent: [
          { title: 'Scary-Oke', yourRating: 10 },
          { title: 'Into the Bunker', yourRating: 10 },
          { title: 'The Golf War', yourRating: 9 },
          { title: 'Sock Opera', yourRating: 9 },
          { title: 'Soos and the real Girl', yourRating: 9 },
          { title: 'Little Gift shop of Horrors', yourRating: 8 },
          { title: 'Society of Blind Eye', yourRating: 9 },
          { title: "Blendin's Game", yourRating: 10 },
          { title: 'The God Love', yourRating: 7 },
          { title: 'The Northwest Mansion Mystery', yourRating: 10 },
          { title: 'Not what he seems', yourRating: 10 },
          { title: 'A tale of two Stans', yourRating: 10 },
          { title: 'Dungeons, Dungeons & more Dungeons', yourRating: 10 },
          { title: 'The Stanchurian Candidate', yourRating: 8 },
          { title: 'The Last Mabelcorn', yourRating: 9 },
          { title: 'Roadside Attraction', yourRating: 8 },
          { title: 'Dipper and Mabel vs the Future', yourRating: 10 },
          { title: 'Weirmaggedon. Part I', yourRating: 10 },
          { title: 'Weirmaggedon. Escape from Reality', yourRating: 10 },
          { title: 'Weirmaggedon. Take Back the Falls', yourRating: 10 },
        ],
      },
    ],
  },
  {
    title: 'Kuxnya',
    yourRating: 10,
    date: 1,
    yourViews: 10,
    content: [
      {
        seasonContent: [
          { title: 'Пилот', yourRating: 10 },
          { title: 'Episode #1.2', yourRating: 9 },
          { title: 'Episode #1.3', yourRating: 9 },
          { title: 'Кто ходил на собеседование?', yourRating: 10 },
          { title: 'Episode #1.5', yourRating: 9 },
          { title: 'Episode #1.6', yourRating: 9 },
          { title: 'Episode #1.7', yourRating: 9 },
          { title: 'Episode #1.8', yourRating: 9 },
          { title: 'Episode #1.9', yourRating: 9 },
          { title: 'Episode #1.10', yourRating: 9 },
          { title: 'Кто критик?', yourRating: 10 },
          { title: 'Episode #1.12', yourRating: 9 },
          { title: 'Сосульки машины не вставить!', yourRating: 8 },
          { title: 'Episode #1.14', yourRating: 10 },
          { title: 'Зайдет Макс или Нет?', yourRating: 8 },
          { title: 'Охотник на Гастербайдоров', yourRating: 10 },
          { title: 'Episode #1.17', yourRating: 9 },
          { title: 'А шеф?, мудак!', yourRating: 10 },
          { title: 'Что встали инвалиды, не видите? Профессионалы пришли', yourRating: 10 },
          { title: 'Санта Барбара: Начало', yourRating: 9 },
        ],
      },
      {
        seasonContent: [
          { title: 'Episode #2.1', yourRating: 9 },
          { title: 'Episode #2.2', yourRating: 10 },
          { title: 'Episode #2.3', yourRating: 9 },
          { title: 'Episode #2.4', yourRating: 9 },
          { title: 'Episode #2.5', yourRating: 9 },
          { title: 'Episode #2.6', yourRating: 10 },
          { title: 'Episode #2.7', yourRating: 9 },
          { title: 'Episode #2.8', yourRating: 9 },
          { title: 'Episode #2.9', yourRating: 10 },
          { title: 'Episode #2.10', yourRating: 8 },
          { title: 'Episode #2.11', yourRating: 9 },
          { title: 'Episode #2.12', yourRating: 9 },
          { title: 'Episode #2.13', yourRating: 9 },
          { title: 'Episode #2.14', yourRating: 9 },
          { title: 'Episode #2.15', yourRating: 9 },
          { title: 'Episode #2.16', yourRating: 9 },
          { title: 'Episode #2.17', yourRating: 9 },
          { title: 'Episode #2.18', yourRating: 9 },
          { title: 'Ты уволен, за предательтво', yourRating: 10 },
          { title: 'Нет, это значит спасибо, без возврашение. Уходи', yourRating: 10 },
        ],
      },
      {
        seasonContent: [
          { title: 'Episode #3.1', yourRating: 9 },
          { title: 'Episode #3.2', yourRating: 9 },
          { title: 'Episode #3.3', yourRating: 8 },
          { title: 'Episode #3.4', yourRating: 9 },
          { title: 'Episode #3.5', yourRating: 8 },
          { title: 'Episode #3.6', yourRating: 9 },
          { title: 'Episode #3.7', yourRating: 10 },
          { title: 'Episode #3.8', yourRating: 10 },
          { title: 'Episode #3.9', yourRating: 9 },
          { title: 'Episode #3.10', yourRating: 9 },
          { title: 'Episode #3.11', yourRating: 9 },
          { title: 'Episode #3.12', yourRating: 10 },
          { title: 'Episode #3.13', yourRating: 9 },
          { title: 'Episode #3.14', yourRating: 9 },
          { title: 'Episode #3.15', yourRating: 9 },
          { title: 'Episode #3.16', yourRating: 9 },
          { title: 'Episode #3.17', yourRating: 10 },
          { title: 'Episode #3.18', yourRating: 9 },
          { title: 'Episode #3.19', yourRating: 9 },
          { title: 'Episode #3.20', yourRating: 9 },
        ],
      },
      {
        seasonContent: [
          { title: 'Episode #4.1', yourRating: 9 },
          { title: 'Episode #4.2', yourRating: 9 },
          { title: 'Episode #4.3', yourRating: 9 },
          { title: 'Episode #4.4', yourRating: 9 },
          { title: 'Episode #4.5', yourRating: 9 },
          { title: 'Episode #4.6', yourRating: 8 },
          { title: 'Episode #4.7', yourRating: 9 },
          { title: 'Episode #4.8', yourRating: 8 },
          { title: 'Episode #4.9', yourRating: 9 },
          { title: 'Сам ты какое кино смотришь?', yourRating: 10 },
          { title: 'Episode #4.11', yourRating: 9 },
          { title: 'Episode #4.12', yourRating: 9 },
          { title: 'Episode #4.13', yourRating: 9 },
          { title: 'Episode #4.14', yourRating: 9 },
          { title: 'Episode #4.15', yourRating: 9 },
          { title: 'Episode #4.16', yourRating: 9 },
          { title: 'Episode #4.17', yourRating: 9 },
          { title: 'Episode #4.18', yourRating: 10 },
          { title: 'Episode #4.19', yourRating: 10 },
          { title: 'Episode #4.20', yourRating: 10 },
        ],
      },
      {
        seasonContent: [
          { title: 'Episode #5.1', yourRating: 8 },
          { title: 'Episode #5.2', yourRating: 9 },
          { title: 'Episode #5.3', yourRating: 8 },
          { title: 'Episode #5.4', yourRating: 9 },
          { title: 'Episode #5.5', yourRating: 9 },
          { title: 'Episode #5.6', yourRating: 9 },
          { title: 'Episode #5.7', yourRating: 9 },
          { title: 'Episode #5.8', yourRating: 9 },
          { title: 'Episode #5.9', yourRating: 8 },
          { title: 'Episode #5.10', yourRating: 9 },
          { title: 'Episode #5.11', yourRating: 9 },
          { title: 'Episode #5.12', yourRating: 9 },
          { title: 'Episode #5.13', yourRating: 10 },
          { title: 'Episode #5.14', yourRating: 8 },
          { title: 'Episode #5.15', yourRating: 9 },
          { title: 'Episode #5.16', yourRating: 9 },
          { title: 'Episode #5.17', yourRating: 9 },
          { title: 'Episode #5.18', yourRating: 8 },
          { title: 'Episode #5.19', yourRating: 10 },
          { title: 'Episode #5.20', yourRating: 10 },
        ],
      },
      {
        seasonContent: [
          { title: 'Episode #6.1', yourRating: 9 },
          { title: 'Episode #6.2', yourRating: 8 },
          { title: 'Episode #6.3', yourRating: 9 },
          { title: 'Episode #6.4', yourRating: 9 },
          { title: 'Episode #6.5', yourRating: 9 },
          { title: 'Episode #6.6', yourRating: 9 },
          { title: 'Episode #6.7', yourRating: 9 },
          { title: 'Episode #6.8', yourRating: 8 },
          { title: 'Episode #6.9', yourRating: 9 },
          { title: 'Episode #6.10', yourRating: 9 },
          { title: 'Episode #6.11', yourRating: 8 },
          { title: 'Episode #6.12', yourRating: 9 },
          { title: 'Episode #6.13', yourRating: 8 },
          { title: 'Episode #6.14', yourRating: 7 },
          { title: 'Episode #6.15', yourRating: 9 },
          { title: 'Episode #6.16', yourRating: 8 },
          { title: 'Episode #6.17', yourRating: 10 },
          { title: 'Episode #6.18', yourRating: 10 },
          { title: 'Episode #6.19', yourRating: 9 },
          { title: 'Episode #6.20', yourRating: 10 },
        ],
      },
    ],
  },
  {
    title: 'Rick & Morty',
    yourRating: 10,
    date: 5,
    yourViews: 8,
    content: [
      {
        seasonContent: [
          {
            title: 'Pilot',
            yourRating: 9,
          },
          {
            title: 'Lawnmower Dog',
            yourRating: 10,
          },
          {
            title: 'Anatomy Park',
            yourRating: 10,
          },
          {
            title: 'M.Night Shaym-Aliens',
            yourRating: 10,
          },
          {
            title: 'Meeseeks and Destroy',
            yourRating: 10,
          },
          {
            title: 'Rick Potion',
            yourRating: 10,
          },
          {
            title: 'Raising Gazorpazorp',
            yourRating: 8,
          },
          {
            title: 'Rixty Minutes',
            yourRating: 10,
          },
          {
            title: 'Something Ricked this way Comes',
            yourRating: 8,
          },
          {
            title: 'Close Rick-counters of the Rick Kind',
            yourRating: 10,
          },
          {
            title: 'Ricksy Business',
            yourRating: 10,
          },
        ],
      },
      {
        seasonContent: [
          {
            title: 'Rickle in Time',
            yourRating: 10,
          },
          {
            title: 'MortyNight Run',
            yourRating: 10,
          },
          {
            title: 'Authoerotic Simulation',
            yourRating: 10,
          },
          {
            title: 'Totall Rickall',
            yourRating: 10,
          },
          {
            title: 'Get Shwifty',
            yourRating: 8,
          },
          {
            title: 'The Ricks must be Crazy',
            yourRating: 10,
          },
          {
            title: 'Big Trouble in little Sanchez',
            yourRating: 9,
          },
          {
            title: 'International Cabel 2. Tempting Fate',
            yourRating: 9,
          },
          {
            title: "Look who's purging now",
            yourRating: 10,
          },
          {
            title: 'Wedding Squanchers',
            yourRating: 10,
          },
        ],
      },
      {
        seasonContent: [
          { 
            title: 'Rickshank Rickdemption', 
            yourRating: 10
          },
          { 
            title: 'Rickmancing the Stone', 
            yourRating: 8
          },
          { 
            title: 'Pickle Rick', 
            yourRating: 10
          },
          { 
            title: 'Vindicators-3. The Return of Worldender', 
            yourRating: 9
          },
          { 
            title: 'The Wirly-Dirly Concpirary', 
            yourRating: 9
          },
          { 
            title: 'Rest and Ricklaxation', 
            yourRating: 10
          },
          { 
            title: 'The Ricklantis Mixup', 
            yourRating: 10
          },
          { 
            title: 'Mortys Mindblowers', 
            yourRating: 10
          },
          { 
            title: 'The ABC of Beth', 
            yourRating: 7
          },
          { 
            title: 'The Rickchurian Mortydate', 
            yourRating: 7
          },
        ],
      },
      {
        seasonContent: [
          { 
            title: 'Edge of Tomorty: Rick Die Rickpeat', 
            yourRating: 10
          },
          { 
            title: 'The Old Man and the Seat', 
            yourRating: 8
          },
          { 
            title: "One Crew over the Crewcoo's Morty", 
            yourRating: 7
          },
          { 
            title: "Claw and Hoarder: Special Ricktim's Morty", 
            yourRating: 6
          },
          { 
            title: 'Rattlestar Ricklactica', 
            yourRating: 10
          },
          { 
            title: 'Never Ricking Morty', 
            yourRating: 9
          },
          { 
            title: 'Promortyus', 
            yourRating: 8
          },
          { 
            title: 'The Vat of Acid Episode', 
            yourRating: 10
          },
          { 
            title: 'Childrick of Mort', 
            yourRating: 9
          },
          { 
            title: 'Star Mort Rickturn of the Jerri', 
            yourRating: 10
          },
        ],
      },
      {
        seasonContent: [
          { 
            title: 'Mort Dinner Rick Andre', yourRating: 10 },
          { 
            title: 'Mortiplicity', yourRating: 9 },
          { 
            title: 'Rickconvenient Mort', yourRating: 8 },
          { 
            title: 'Rickdependence Spray', yourRating: 5 },
          { 
            title: 'Amortycan Grickfitti', yourRating: 7 },
          { 
            title: 'Rick and Mortys Thanksploitation Spectacular', yourRating: 7 },
          { 
            title: 'Gotron Jerrysis Rickvangelion', yourRating: 6 },
          { 
            title: 'Rickternal Friendshine of the Spotless Mort', yourRating: 9 },
          { 
            title: 'Forgetting Sarick Mortshall', yourRating: 9 },
          { 
            title: 'Rickmurai Jack', yourRating: 10 },
        ],
      },
    ],
  },
  {
    title: 'Avatar: The Last Airbender',
    yourRating: 10,
    date: 7,
    yourViews: 2,
    content: [
      {
        seasonContent: [
          { title: 'The Boy in the Iceberg', yourRating: 9 },
          { title: 'The Avatar Returns', yourRating: 8 },
          { title: 'The Southern Air Temple', yourRating: 8 },
          { title: 'The Warriors of Kyoshi', yourRating: 8 },
          { title: 'The King of Omashu', yourRating: 9 },
          { title: 'Imprisoned', yourRating: 7 }, 
          { title: 'The Spirit World. Winter Solstice, Part 1', yourRating: 9 }, 
          { title: 'Avatar Roku. Winter Solstice, Part 2', yourRating: 9 },
          { title: 'The Waterbending Scroll', yourRating: 8 },
          { title: 'Jet', yourRating: 8 },
          { title: 'The Great Divide', yourRating: 8 }, 
          { title: 'The Storm', yourRating: 10 }, 
          { title: 'The Blue Spirit', yourRating: 10 },
          { title: 'The Fortuneteller', yourRating: 8 },
          { title: 'Bato of the Water Tribe', yourRating: 7 },
          { title: 'The Deserter', yourRating: 8 },
          { title: 'The Northern Air Temple', yourRating: 9 },
          { title: 'The Waterbending Master', yourRating: 9 },
          { title: 'The Siege of the North, Part 1', yourRating: 9 },
          { title: 'The Siege of the North, Part 2', yourRating: 10 },
        ]
      },
      {
        seasonContent: [
          { title: 'The Avatar State', yourRating: 9 },
          { title: 'The Cave of two Lovers', yourRating: 8 },
          { title: 'Return to Omashu', yourRating: 8 },
          { title: 'The Swamp', yourRating: 8 },
          { title: 'Avatar Day', yourRating: 7 },
          { title: 'The Blind Bandit', yourRating: 10 },
          { title: 'Zuko Alone', yourRating: 10 },
          { title: 'The Chase', yourRating: 10 },
          { title: 'Bitter Work', yourRating: 10 },
          { title: 'The Library', yourRating: 9 }, 
          { title: 'The Desert', yourRating: 9 },
          { title: "The Serpent's Pass", yourRating: 8 }, 
          { title: 'The Drill', yourRating: 9 }, 
          { title: 'City of Walls and Secrets', yourRating: 9 },
          { title: 'The Tales of Ba Sing Se', yourRating: 10 },
          { title: "Appa's Lost Days", yourRating: 10 }, 
          { title: 'Lake Laogai', yourRating: 9 },
          { title: 'The Earth King', yourRating: 9 },
          { title: 'The Guru', yourRating: 10 },
          { title: 'The Crossroads of Destiny', yourRating: 10 },
        ],
      },
      {
        seasonContent: [
          { title: 'The Awakening', yourRating: 9 },
          { title: 'The Headband', yourRating: 8 },
          { title: 'The Painted Lady', yourRating: 8 },
          { title: "Sokka's Master", yourRating: 9 },
          { title: 'The Beach', yourRating: 10 },
          { title: 'The Avatar and The Fire Lord', yourRating: 10 },
          { title: 'The Runaway', yourRating: 9 },
          { title: 'The Puppetmaster', yourRating: 10 },
          { title: 'Nightmares and Daydreams', yourRating: 8 },
          { title: 'The Day of Black Sun, Part 1: The Invasion', yourRating: 10 },
          { title: 'The Day of Black Sun, Part 2: The Eclipse', yourRating: 10 },
          { title: 'The Western Air Temple', yourRating: 9 },
          { title: 'The Firebending Masters', yourRating: 10 },
          { title: 'The Boiling Rock, Part 1', yourRating: 9 }, // 
          { title: 'The Boiling Rock, Part 2', yourRating: 9 }, // 
          { title: 'The Southern Raiders', yourRating: 10 },
          { title: 'The Ember Islands and Players', yourRating: 10 },
          { title: "Sozin's Comet, Part 1: The Phoenix King", yourRating: 10 },
          { title: "Sozin's Comet, Part 2: The Old Master", yourRating: 10 },
          { title: "Sozin's Comet, Part 3: Into the Inferno", yourRating: 10 },
          { title: "Sozin's Comet, Part 4: Avatar Aang", yourRating: 10 },
        ],
      },
    ],
  },
  {
    title: 'Vinland Saga',
    yourRating: 10,
    date: 11,
    yourViews: 2,
    content: [
      {
        seasonContent: [
          { title: 'Somewhere Not Here', yourRating: 9 },
          { title: 'Sword', yourRating: 9 },
          { title: 'Troll', yourRating: 9 },
          { title: 'A True Warrior', yourRating: 10 },
          { title: "The Troll's Son", yourRating: 9 },
          { title: 'The Journey Begins', yourRating: 10 },
          { title: 'Normanni', yourRating: 10 },
          { title: 'Beyond the Edge of the Sea', yourRating: 9 },
          { title: 'The Battle of London Bridge', yourRating: 10 },
          { title: 'Ragnarok', yourRating: 9 },
          { title: 'A Gamble', yourRating: 9 },
          { title: 'The Land on the Far Bank', yourRating: 8 },
          { title: 'Child of a Hero', yourRating: 8 },
          { title: 'The Light of Dawn', yourRating: 10 },
          { title: 'After Yule', yourRating: 9 },
          { title: 'History of Beasts', yourRating: 9 },
          { title: 'Servant', yourRating: 10 },
          { title: 'Out of the Cradle', yourRating: 9 },
          { title: 'United Front', yourRating: 10 },
          { title: 'Crown', yourRating: 9 },
          { title: 'Reunion', yourRating: 10 },
          { title: 'Lone Wolf', yourRating: 10 },
          { title: 'Miscalculation', yourRating: 9 },
          { title: 'End of the Prologue', yourRating: 10 },
        ],
      },
    ],
  },
  {
    title: 'Bojack Horseman',
    yourRating: 10,
    date: 10,
    yourViews: 1,
    content: [
      {
        seasonContent: [
          { title: 'BoJack Horseman: The BoJack Horseman Story, Chapter One', yourRating: 7 },
          { title: 'BoJack Hates the Troops', yourRating: 8 },
          { title: 'Prickly Muffin', yourRating: 7 },
          { title: 'Zoës and Zeldas', yourRating: 8 },
          { title: 'Live Fast, Diane Nguyen', yourRating: 8 },
          { title: "Our A-Story Is a 'D' Story", yourRating: 8 },
          { title: 'Say Anything', yourRating: 9 },
          { title: 'The Telescope', yourRating: 9 },
          { title: 'Horse Majeure', yourRating: 7 },
          { title: 'One Trick Pony', yourRating: 9 },
          { title: 'Downer Ending', yourRating: 10 },
          { title: 'Later', yourRating: 9 },
        ],
      },
      {
        seasonContent: [
          { title: 'Brand New Couch', yourRating: 8 },
          { title: 'Yesterdayland', yourRating: 8 },
          { title: 'Still Broken', yourRating: 8 },
          { title: 'After the Party', yourRating: 8 },
          { title: 'Chickens', yourRating: 8 },
          { title: 'Higher Love', yourRating: 8 },
          { title: 'Hank After Dark', yourRating: 8 },
          { title: "Let's Find Out", yourRating: 10 },
          { title: 'The Shot', yourRating: 9 },
          { title: 'Yes And', yourRating: 9 },
          { title: 'Escape from L.A.', yourRating: 10 },
          { title: 'Out to Sea', yourRating: 9 },
        ],
      },
      {
        seasonContent: [
          { title: 'Start Spreading the News', yourRating: 8 },
          { title: 'The BoJack Horseman Show', yourRating: 8 },
          { title: 'BoJack Kills', yourRating: 8 },
          { title: 'Fish out of Water', yourRating: 10 },
          { title: 'Love And/Or Marriage', yourRating: 9 },
          { title: 'Brrap Brrap Pew Pew', yourRating: 9 },
          { title: 'Stop the Presses', yourRating: 8 },
          { title: 'Old Acquaintance', yourRating: 9 },
          { title: 'Best Thing That Ever Happened', yourRating: 9 },
          { title: "It's You", yourRating: 9 },
          { title: "That's Too Much, Man!", yourRating: 10 },
          { title: 'That Went Well', yourRating: 9 },
        ],
      },
      {
        seasonContent: [
          { title: 'See Mr. Peanutbutter Run', yourRating: 8 },
          { title: 'The Old Sugarman Place', yourRating: 10 },
          { title: 'Hooray! Todd Episode!', yourRating: 8 },
          { title: 'Commence Fracing', yourRating: 8 },
          { title: 'Thoughts and Prayers', yourRating: 8 },
          { title: 'Stupid piece of shit', yourRating: 10 },
          { title: 'Underground', yourRating: 9 },
          { title: 'The Judge', yourRating: 8 },
          { title: 'Ruthie', yourRating: 10 },
          { title: 'Lovin that cali lifestyle!!', yourRating: 9 },
          { title: "Time's arrow", yourRating: 10 },
          { title: 'What time is it right now', yourRating: 9 },
        ],
      },
      {
        seasonContent: [
          { title: 'The Light Bulb Scene', yourRating: 8 },
          { title: 'The Dog days are over', yourRating: 10 },
          { title: 'Planned Obsolescence', yourRating: 8 },
          { title: 'BoJack the Feminist', yourRating: 8 },
          { title: 'The Amelia Earhart Story', yourRating: 9 },
          { title: 'Free Churro', yourRating: 10 },
          { title: 'INT. SUB', yourRating: 9 },
          { title: "Mr. Peanutbutter's Boos", yourRating: 10 },
          { title: 'Ancient History', yourRating: 9 },
          { title: 'Head in the Clouds', yourRating: 9 },
          { title: 'The Showstopper', yourRating: 10 },
          { title: 'The Stopped Show', yourRating: 9 },
        ],
      },
      {
        seasonContent: [
          { title: 'A Horse Walks into a Rehab', yourRating: 10 },
          { title: 'The New Client', yourRating: 9 },
          { title: 'Feel-good story', yourRating: 8 },
          { title: 'Surprise!', yourRating: 10 },
          { title: 'A Little Uneven, Is All', yourRating: 8 },
          { title: 'The Kidney Stays in the Picture', yourRating: 8 },
          { title: 'The Face of Depression', yourRating: 10 },
          { title: "A Quick One, While He's Away", yourRating: 9 },
          { title: 'Intermediate Scene Study/ BoJack Horseman', yourRating: 9 },
          { title: 'Good Damage', yourRating: 9 },
          { title: 'Sunk Cost and All That', yourRating: 9 },
          { title: 'Xerox of a Xerox', yourRating: 10 },
          { title: 'The Horny Unicorn', yourRating: 9 },
          { title: 'Angela', yourRating: 9 },
          { title: 'The View from Halfway Down', yourRating: 10 },
          { title: 'Nice while it lasted', yourRating: 10 },
        ],
      },
    ],
  },
  {
    title: 'Breaking Bad', 
    // Rewatch
    yourRating: 10,
    date: 12,
    yourViews: 2,
    content: [
      {
        seasonContent: [
          { title: 'Pilot', yourRating: 9 },
          { title: "Cat's in the Bag", yourRating: 9 },
          { title: "And the Bag's in the River", yourRating: 10 },
          { title: 'Cancer Man', yourRating: 8 },
          { title: 'Gray Matter', yourRating: 10 },
          { title: 'Crazy handful of Nothing', yourRating: 9 },
          { title: 'A No-Rough-Stuff-Type Deal', yourRating: 9 },
        ],
      },
      {
        seasonContent: [
          { title: 'Seven Thirty-Seven', yourRating: 9 },
          { title: 'Grilled', yourRating: 10 },
          { title: 'Bit by a Dead Bee', yourRating: 9 },
          { title: 'Down', yourRating: 8 },
          { title: 'Breakage', yourRating: 9 },
          { title: 'Peekaboo', yourRating: 9 },
          { title: 'Negro y Azul', yourRating: 9 },
          { title: 'Better Call Saul', yourRating: 10 },
          { title: '4 Days Out', yourRating: 10 },
          { title: 'Over', yourRating: 9 },
          { title: 'Mandala', yourRating: 10 },
          { title: 'Phoenix', yourRating: 10 },
          { title: 'ABQ', yourRating: 9 },
        ],
      },
      {
        seasonContent: [
          { title: 'No Mas', yourRating: 9 },
          { title: 'Caballo sin Nombre', yourRating: 9 },
          { title: 'I.F.T', yourRating: 9 },
          { title: 'Green Light', yourRating: 9 },
          { title: 'Mas', yourRating: 9 },
          { title: 'Sunset', yourRating: 10 },
          { title: 'One minute', yourRating: 9 },
          { title: 'I see you', yourRating: 9 },
          { title: 'Kafkaesque', yourRating: 10 },
          { title: 'Fly', yourRating: 7 },
          { title: 'Abiquiu', yourRating: 9 },
          { title: 'Half Measures', yourRating: 10 },
          { title: 'Full Measure', yourRating: 10 },
        ],
      },
      {
        seasonContent: [
          { title: 'Box Cutter', yourRating: 10 },
          { title: 'Thirty-Eight Snub', yourRating: 9 },
          { title: 'Open House', yourRating: 8 },
          { title: 'Bullet Points', yourRating: 9 },
          { title: 'Shotgun', yourRating: 9 },
          { title: 'Cornered', yourRating: 9 },
          { title: 'Problem Dog', yourRating: 9 },
          { title: 'Hermanos', yourRating: 10 },
          { title: 'Bug', yourRating: 9 },
          { title: 'Salud', yourRating: 10 },
          { title: 'Crawl Space', yourRating: 10 },
          { title: 'End Times', yourRating: 10 },
          { title: 'Face-off', yourRating: 10 },
        ],
      },
      {
        seasonContent: [
          { title: 'Live Free or Die', yourRating: 9 },
          { title: 'Madrigal', yourRating: 9 },
          { title: 'Hazard Pay', yourRating: 9 },
          { title: 'Fifty-One', yourRating: 9 },
          { title: 'Dead Freight', yourRating: 10 },
          { title: 'Buyout', yourRating: 9 },
          { title: 'Say my name', yourRating: 10 },
          { title: 'Gliding Over All', yourRating: 9 },
          { title: 'Blood Money', yourRating: 9 },
          { title: 'Buried', yourRating: 9 },
          { title: 'Confessions', yourRating: 10 },
          { title: 'Rabid Dog', yourRating: 10 },
          { title: "To'hajiilee", yourRating: 10 },
          { title: 'Ozymandias', yourRating: 10 },
          { title: 'Granite State', yourRating: 10 },
          { title: 'Felina', yourRating: 10 },
        ],
      },
    ],
  },
  {
    title: 'Onepunchman',
    yourRating: 9,
    date: 4,
    yourViews: 2,
    content: [
      {
        seasonContent: [
          { title: 'The Strongest Man', yourRating: 9 },
          { title: 'The Lone Cyborg', yourRating: 9 },
          { title: 'The Obsessive Scientist', yourRating: 9 },
          { title: 'The Modern Ninja', yourRating: 9 },
          { title: 'The Ultimate Mentor', yourRating: 10 },
          { title: 'The Terrifying City', yourRating: 9 }, //
          { title: 'The Ultimate Disciple', yourRating: 9 },
          { title: 'The Deep Sea King', yourRating: 9 },
          { title: 'The Unyielding Justice', yourRating: 10 },
          { title: 'The Unparalleled Peril', yourRating: 8 }, //
          { title: 'The Dominator of the Universe', yourRating: 9 },
          { title: 'The Strongest Hero', yourRating: 10 },
        ],
      },
      {
        seasonContent: [
          { title: "The Hero's Return", yourRating: 8 },
          { title: 'The Human Monster', yourRating: 9 },
          { title: 'The Beginning of the Hunt', yourRating: 9 },
          { title: 'The Metal Bat', yourRating: 8 }, 
          { title: 'The Martial Arts Tournament', yourRating: 8 },
          { title: "The Monsters' Uprising", yourRating: 8 },
          { title: 'The Class S Heroes', yourRating: 8 },
          { title: 'The Resistance of Strong', yourRating: 9 },
          { title: 'The Troubles of the Strongest', yourRating: 9 },
          { title: 'The Under Siege Justice', yourRating: 8 },
          { title: 'The Varieties of Pride', yourRating: 10 },
          { title: "The Wiping of the Disciple's Butt", yourRating: 9 },
        ],
      },
    ],
  },
  {
    title: 'Death Note',
    yourRating: 9,
    date: 2,
    yourViews: 2,
    content: [
      {
        seasonContent: [
          { title: '', yourRating: 10 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 6 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 7 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 7 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 7 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 8 },
        ],
      },
    ],
  },
  {
    title: 'Fullmetal Alchemist: Brotherhood',
    yourRating: 10,
    date: 16,
    yourViews: 1,
    content: [
      {
        seasonContent: [
          { title: '', yourRating: 8 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
        ]
      }
    ]
  },
  {
    title: 'Over the Garden Wall',
    yourRating: 9,
    date: 6,
    yourViews: 1,
    content: [
      {
        seasonContent: [
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 7 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 10 },
        ],
      },
    ],
  },
  {
    title: 'Doctor Stone', // Raw
    yourRating: 9,
    date: 15,
    yourViews: 1,
    content: [
      {
        seasonContent: [
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: 'The Culmination of Two Million years', yourRating: 10 },
          { title: 'A Tale for the Ages', yourRating: 9 },
          { title: 'A Hundred Nights and a Thousand Skies', yourRating: 10 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
        ]
      },
      {
        seasonContent: [
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
        ]
      }
    ]
  },
  {
    title: 'To your eternity',
    yourRating: 8,
    date: 13,
    yourViews: 1,
    content: [
      {
        seasonContent: [
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 10 },
        ],
      },
    ],
  },
  {
    title: 'Cowboy Bebop',
    yourRating: 8,
    date: 9,
    yourViews: 1,
    content: [
      {
        seasonContent: [
          { title: 'Asteroid Blues', yourRating: 8 },
          { title: 'Stray Dog Strut', yourRating: 8 },
          { title: 'Honky Tonk Woman', yourRating: 8 },
          { title: 'Gateaway Shuffle', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 7 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 7 },
          { title: '', yourRating: 10 },
          { title: '', yourRating: 7 },
          { title: '', yourRating: 8 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 9 },
          { title: '', yourRating: 10 },
        ],
      },
    ],
  },
];

const showsReducer = (state = initialState, action: any): Array<InitialShowType> => {
  switch (action.type) {
    default:
    case SORT_BY_YOUR_AVERAGE_RATING:
      return defaultShowsSelector(state).sort(
        (a, b) => b.yourAverageEpisode - a.yourAverageEpisode,
      );
    case SORT_BY_DATE:
      return [...state.sort((a, b) => a.date - b.date)];
      case SORT_BY_ALPHABET:
        return [...state.sort((a, b) => a.title.localeCompare(b.title))];
      case SORT_BY_YOUR_FAVORITE:
        return defaultShowsSelector(initialState);
      case SORT_BY_YOUR_VIEWS:
        return [
          ...state.sort((a, b) => {
            if (b.yourViews === a.yourViews) {
              return b.episodeLength - a.episodeLength
            } 
            return b.yourViews - a.yourViews 
          }
        )
      ];
      case SORT_BY_YOUR_RATING:
        return [
          ...state.sort((a, b) => {
            if (b.yourRating === a.yourRating) {
              return b.yourAverageEpisode - a.yourAverageEpisode
            } 
            return b.yourRating - a.yourRating 
          }
        )
      ];
  }
};

export type SortByAlphabetActionType = {
  type: typeof SORT_BY_ALPHABET;
};
export type SortByDateActionType = {
  type: typeof SORT_BY_DATE;
};
export type SortByYourRatingActionType = {
  type: typeof SORT_BY_YOUR_RATING;
};
export type SortByYourFavoriteActionType = {
  type: typeof SORT_BY_YOUR_FAVORITE;
};
export type SortByYourViewsActionType = {
  type: typeof SORT_BY_YOUR_VIEWS;
};
export type SortByYourAverageRatingActionType = {
  type: typeof SORT_BY_YOUR_AVERAGE_RATING;
};

export const sortByAlphabet = (): SortByAlphabetActionType => ({
  type: SORT_BY_ALPHABET,
});
export const sortByDate = (): SortByDateActionType => ({
  type: SORT_BY_DATE,
});
export const sortByYourRating = (): SortByYourRatingActionType => ({
  type: SORT_BY_YOUR_RATING,
});
export const SortByYourFavorite = (): SortByYourFavoriteActionType => ({
  type: SORT_BY_YOUR_FAVORITE,
});
export const SortByYourViews = (): SortByYourViewsActionType => ({
  type: SORT_BY_YOUR_VIEWS,
});
export const sortByYourAverageRating = (): SortByYourAverageRatingActionType => ({
  type: SORT_BY_YOUR_AVERAGE_RATING,
});

export default showsReducer;
