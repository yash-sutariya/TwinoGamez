"use client";
export const dynamic = "force-dynamic";
import React, { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

// import "../../css/landing.css";
import "../../css/bootstrap.css";
import "../../css/style.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function GamePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [iframeEnabled, setIframeEnabled] = useState(false);
  const [modalIframeEnabled, setModalIframeEnabled] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>(
    "/game-logo-webp/1.webp"
  );
  const searchParams = useSearchParams();
  const gameName = searchParams.get("gamename") || "";
  const [gameUrl, setGameUrl] = useState<string>("");
  const [gameDescription, setGameDescription] = useState<string>("");

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.classList.add("no-scroll");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };

  const handleFullscreen = () => {
    setIframeEnabled(true);
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen().catch((err) => {
          console.log("Fullscreen request failed:", err);
        });
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).mozRequestFullScreen) {
        (iframe as any).mozRequestFullScreen();
      } else if ((iframe as any).msRequestFullscreen) {
        (iframe as any).msRequestFullscreen();
      }
    }
  };

  const games = [
    {
      name: "Traffic Racer",
      url: "https://play2473.thopgames.com/games/2048/play",
      image: "/game-logo-webp/1.webp",
      description:
        "Traffic Racer – Online Highway Driving Game 🚗💨\n\nGet ready to test your reflexes and driving skills in this thrilling highway racing experience! Traffic Racer is an adrenaline-pumping game where you navigate through busy traffic at high speeds.\n\n🎮 GAMEPLAY:\n• Dodge incoming traffic while driving at extreme speeds\n• Collect power-ups to enhance your vehicle's performance\n• Unlock new cars with unique abilities\n• Drive through different environments and weather conditions\n• Compete for the highest score on global leaderboards\n\n⚡ FEATURES:\n✓ Multiple game modes (Endless, Time Trial, Survival)\n✓ Over 20 unique cars to unlock and customize\n✓ Dynamic traffic patterns that increase in difficulty\n✓ Power-ups: Shield, Speed Boost, Slow Motion\n✓ Beautiful graphics with smooth animations\n✓ Responsive controls optimized for all devices\n✓ Achievements and rewards system\n✓ Offline play available\n\n🏆 TIPS:\n• Stay focused on the road ahead\n• Use power-ups strategically\n• Practice makes perfect - improve your reflexes\n• Unlock cars to get better handling and speed\n\nReady to become a Traffic Racer champion? Start driving now! 🏁",
    },
    {
      name: "Brick Breaker Unicorn",
      url: "https://twinogamez.com/Game/02-Brick-Breaker-Unicorn",
      image: "/game-logo-webp/2.webp",
      description:
        "Brick Breaker Unicorn\n\nStep into a world of colors, magic, and fun with Brick Breaker Unicorn, the ultimate HTML5 arcade game that brings a new twist to the classic brick breaker gameplay. Your mission is simple yet exciting – destroy all the bricks, collect falling power-ups, and advance through challenging levels.\n\nWith 20 carefully designed levels (and the ability to add even more), this game promises hours of entertainment for casual players and arcade lovers alike. Each level brings new patterns, obstacles, and surprises to keep you hooked.\n\nThe magical unicorn theme adds a unique charm, making it perfect for both kids and adults who enjoy colorful and fast-paced action. Collect power-ups to boost your paddle, unleash special abilities, and clear the board faster than ever before.\n\nKey Features:\n\n🎮 Classic brick breaker gameplay with a magical unicorn twist\n\n🌈 20 challenging levels (expandable for endless fun)\n\n⚡ Falling power-ups to enhance your paddle and gameplay\n\n📱 Mobile-friendly HTML5 game – play anytime, anywhere\n\n⭐ Perfect for casual players, kids, and arcade game fans\n\nTest your reflexes, improve your strategy, and see how far you can go in Brick Breaker Unicorn. Play now and experience the magic of breaking bricks like never before!",
    },
    {
      name: "Air Warfare",
      url: "https://twinogamez.com/Game/03-Air-Warfare",
      image: "/game-logo-webp/3.webp",
      description:
        "Air Warfare – Rule the Skies in Epic Fighter Battles\n\nStep into the cockpit of a modern warplane and experience the thrill of intense air to air combat in Air Warfare! Armed with advanced weapons and smooth controls, your mission is clear – protect your territory, take down enemy aircraft, and dominate the skies like a true fighter ace.\n\nIn this action packed flying game, you'll face relentless enemies determined to capture your airspace. Use your reflexes and precision shooting to destroy them while collecting bonuses and power-ups to boost your score. With stunning visuals, engaging gameplay, and endless challenges, Air Warfare is the ultimate test of your flying skills.\n\nKey Features:\n\n🛩️ Fly a powerful modern combat aircraft\n\n🎮 Simple yet addictive one-tap touch controls\n\n💥 Shoot down waves of enemy planes in fast-paced battles\n\n⚡ Collect bonuses and upgrades to gain the edge\n\n🌌 Smooth gameplay with exciting obstacles and challenges\n\n🎶 Immersive sound effects and music for a realistic battle experience\n\n🚀 Compete for the highest score and prove your dominance\n\nTake off, engage in epic dogfights, and show the world your mastery of the skies. The war is raging—are you ready to rise as the ultimate air warrior?",
    },
    {
      name: "Ninja Run New",
      url: "https://twinogamez.com/Game/04-Ninja-Run-New",
      image: "/game-logo-webp/4.webp",
      description:
        "Ninja Run\n\nUnleash your inner warrior in Ninja Run, an endless running adventure game packed with action, speed, and challenges! Step into the shoes of a fearless ninja racing through dangerous paths filled with obstacles, traps, and enemies. Your goal is simple—run as far as possible, collect coins, and prove your agility while avoiding deadly hazards along the way.\n\nWith smooth controls and fast-paced gameplay, Ninja Run offers a thrilling experience for fans of runner and action games. Jump over barriers, slide under obstacles, and dash through levels with lightning reflexes. Every step you take tests your focus and timing, pushing you closer to becoming the ultimate ninja master.\n\nKey Features:\n\n🥷 Play as a swift and fearless ninja on the run\n\n🪙 Collect coins and rewards to increase your score\n\n⚡ Fast-paced endless running gameplay\n\n🎮 Simple one-touch controls for smooth action\n\n🔥 Avoid traps, enemies, and obstacles on your path\n\n🌌 Beautiful visuals with immersive sound effects\n\n🏆 Compete for the highest score and challenge your friends\n\nGet ready to test your reflexes, speed, and precision in this addictive endless runner. The road is full of dangers—only the sharpest ninja will survive!",
    },
    {
      name: "Gold Miner",
      url: "https://twinogamez.com/Game/05-Gold-Miner",
      image: "/game-logo-webp/5.webp",
      description:
        "Gold Miner Online – HTML5 Gold-Digging Puzzle Game ⛏️💰\n\nStrike it rich in Gold Miner Online, a fun HTML5 puzzle/arcade game where precision and timing are everything. Use your claw to snag gold nuggets and sparkling jewels, hit the target score, and clear each level—while avoiding explosive gunpowder barrels that can ruin your haul!\n\nHow to Play\n\nMouse or Touch: Tap/Click to drop the claw; tap again to use items (if available).\n\nAim for nuggets & gems to boost your score.\n\nAvoid barrels with gunpowder to stay safe.\n\nReach the level goal before time runs out to advance.\n\nFeatures\n\n🎯 Skill-based timing: simple to learn, satisfying to master\n\n💎 Nuggets, jewels & bonuses to maximize your score\n\n💥 Hazards (gunpowder barrels) add strategic challenge\n\n📱 Mobile & desktop ready (HTML5—no downloads)\n\n🕹️ Quick sessions perfect for casual play\n\n👨‍👩‍👧 All-ages fun from Ecaps Games\n\nCan you grab the biggest haul and become the ultimate online gold miner?",
    },
    {
      name: "Fruit Slasher",
      url: "https://twinogamez.com/Game/06-Fruit-Slasher",
      image: "/game-logo-webp/6.webp",
      description:
        "Fruit Slasher – Fun HTML5 Fruit Cutting Game 🍉🔪\n\nFruit Slasher is an addictive HTML5 arcade game where your goal is simple but thrilling – cut all the fruits on the screen without dropping them! Stay sharp, react fast, and avoid the dangerous bombs that can instantly end your run. The more fruits you slash, the higher your score climbs. Perfect for players of all ages, this juicy adventure will test your reflexes and focus.\n\nHow to Play\n\n🎮 Controls: Use Mouse or Touch to slash fruits.\n\n🍍 Cut every fruit that appears on screen.\n\n💣 Watch out for bombs—avoid them at all costs.\n\n⭐ Aim for combos to maximize your points.\n\nGame Features\n\n⚡ Fast-paced gameplay that keeps you hooked\n\n🍓 Bright, colorful fruits and smooth animations\n\n🎮 Simple controls easy to learn, fun to master\n\n📱 Cross-platform HTML5 game play on desktop & mobile\n\n👨‍👩‍👧 Suitable for players of all ages\n\n🕹️ Free to play, anytime, anywhere!\n\nWhether you're looking for a quick game to pass the time or a fun challenge to beat your high score, Fruit Slasher brings endless excitement right to your screen.",
    },
    {
      name: "Stick Monkey",
      url: "https://twinogamez.com/Game/07-Stick-Monkey",
      image: "/game-logo-webp/7.webp",
      description:
        "Stick Monkey – Fun Monkey Game with Addictive Stick Challenge\n\nStick Monkey is a fun and addictive HTML5 arcade game where quick thinking and precision are the keys to survival. Help the clever monkey cross from one platform to another by building bridges of just the right length. If your stick is too short, the monkey falls. If it's too long, he slips off the other side. How far can you go?\n\nHow to Play\n\n🐵 Tap and hold to make the stick grow.\n\n🌉 Release at the right time to create a bridge.\n\n⭐ Land safely on the next platform to continue.\n\n🎯 The farther you go, the higher your score!\n\nGame Features\n\n🎮 Simple one-tap controls – easy to learn, hard to master\n\n🐒 Cute monkey character and smooth animations\n\n⚡ Fast-paced, challenging gameplay\n\n📱 Cross-platform HTML5 game – play on desktop & mobile\n\n🕹️ Free to play anytime, anywhere\n\nStick Monkey is the perfect mix of fun, skill, and challenge. Test your timing, build the perfect bridges, and see how far your monkey can travel in this exciting arcade adventure!",
    },
    {
      name: "Space Purge",
      url: "https://twinogamez.com/Game/08-Space-Purge",
      image: "/game-logo-webp/8.webp",
      description:
        "Space Purge – Epic Space Shooter Game Online\n\nSpace Purge is an addictive HTML5 space shooting game where you must save Earth from waves of asteroids, comets, and cosmic debris. Equipped with powerful lasers and space upgrades, your mission is simple: survive as long as possible and keep the planet safe from destruction!\n\nHow to Play\n\n🖱️ Mouse / Touch control – move your spaceship to aim and shoot.\n\n💥 Blast asteroids and falling space objects before they hit Earth.\n\n⚡ Collect power-ups for ammo, shields, and extra points.\n\n🛡️ Upgrade your weapons to fight tougher waves.\n\nGame Features\n\n🌠 Fast-paced asteroid shooting action\n\n🚀 Easy controls – perfect for mobile & desktop play\n\n💎 Collect bonuses, ammo, and score multipliers\n\n🔫 Multiple weapon types with upgrades\n\n🎯 Endless survival gameplay – aim for the highest score\n\n🎵 Dynamic sound effects and immersive graphics\n\nAre you ready to test your reflexes and protect humanity from cosmic annihilation? Jump into Space Purge and see how long you can survive in the infinite galaxy!",
    },
    {
      name: "Shoot Robbers",
      url: "https://twinogamez.com/Game/09-Shoot-Robbers",
      image: "/game-logo-webp/9.webp",
      description:
        "Shoot Robbers 🚔🔫\n\nGet ready for nonstop action in Shoot Robbers, a thrilling HTML5 police shooting game where justice is in your hands. Step into the role of a fearless officer tasked with tracking down and stopping a dangerous criminal before chaos takes over the city.\n\nUse your sharp reflexes, quick decision-making, and precision shooting to survive intense gunfights. Each mission throws you into risky environments where only strategy and accuracy will keep you alive. Take cover, aim carefully, and show the robber that crime doesn't pay!\n\n🎮 How to Play:\n\nAim and shoot at the robber with precision\n\nUse cover to protect yourself from enemy fire\n\nPlan your moves to gain the upper hand\n\nClear each level by eliminating threats and completing objectives\n\n✨ Game Features:\n\n🚓 Action-packed gameplay with cops vs. robbers theme\n\n🔥 Intense gunfights across challenging environments\n\n🧠 Strategic shooting mechanics – use cover wisely\n\n🎯 Reflex-testing missions to improve aim & accuracy\n\n📱 Playable on desktop and mobile devices (HTML5)\n\nStep into the line of duty, stop the criminal mastermind, and prove your skills in Shoot Robbers – the ultimate police action shooter!",
    },
    {
      name: "Splishy Fish",
      url: "https://twinogamez.com/Game/10-Splishy-Fish",
      image: "/game-logo-webp/10.webp",
      description:
        "Splashy Fish 🐟💦\n\nTake a deep dive into Splashy Fish, the fun and fast-paced HTML5 arcade game that will keep you hooked for hours! With simple one-touch controls, your mission is to guide a tiny fish through endless underwater obstacles while collecting treasures and chasing the highest score.\n\nDon't be fooled by its simplicity—Splashy Fish is easy to play but incredibly hard to master. Only players with quick reflexes and perfect timing will be able to swim far enough to claim the top spot on the leaderboard.\n\n🎮 How to Play:\n\nTap anywhere on the screen to make your fish swim higher\n\nAvoid hitting obstacles and keep swimming forward\n\nCollect treasures to boost your score\n\nSwim as far as possible to beat your personal best\n\n✨ Game Features:\n\n🐠 Simple one-touch controls – tap to flap and swim\n\n🌊 Endless arcade adventure with tricky obstacles\n\n💎 Treasures to collect for extra points\n\n👨‍👩‍👧 Fun for all ages – quick, casual, and addictive\n\n🏆 Compete with friends for the highest score\n\nGet ready for a thrilling underwater challenge where precision, patience, and quick thinking are the keys to success. Play Splashy Fish now and see how far you can swim!",
    },
    {
      name: "Speed Racer",
      url: "https://twinogamez.com/Game/11-Speed-Racer",
      image: "/game-logo-webp/11.webp",
      description:
        "Buckle up and hit the highway in Speed Racer, a thrilling HTML5 arcade racing game designed for true speed enthusiasts! Your goal is simple yet addictive – race as fast as possible, dodge incoming traffic, and avoid collisions to climb the leaderboard with unbeatable scores.\n\nThe faster you go, the more points you earn—but with great speed comes great risk. Every second on the road tests your reflexes, timing, and focus. Can you handle the pressure and prove you're the ultimate racer?\n\n🎮 How to Play:\n\nTilt your device left or right to steer your car\n\nAvoid hitting traffic and obstacles\n\nKeep driving at top speed to rack up points\n\nStay focused as difficulty ramps up the longer you survive\n\n✨ Key Features:\n\n🚀 Fast-paced arcade racing with endless fun\n\n🎮 Intuitive tilt controls for immersive gameplay\n\n🏁 Endless challenge – the further you go, the higher your score\n\n🎧 Smooth gameplay with realistic sound effects\n\n📱 Mobile & desktop friendly – play anywhere, anytime\n\nIf you love racing games filled with adrenaline and challenge, Speed Racer delivers non-stop excitement. Put your reflexes to the test, chase high scores, and prove you're the fastest driver on the road!",
    },
    {
      name: "Duck Shooter",
      url: "https://twinogamez.com/Game/12-Duck-Shooter",
      image: "/game-logo-webp/12.webp",
      description:
        "Duck Shooter – Carnival Style Duck Shooting Game Online\n\nTest your aim and reflexes in Duck Shooter, a fun and addictive endless shooting gallery game inspired by classic carnival duck hunts! The rules are simple but the challenge never ends—shoot the yellow ducks to earn points while avoiding the red ducks, which will deduct from your score.\n\nAs your score climbs, the ducks move faster, pushing your accuracy and timing to the limit. Be careful—if you wait too long without shooting, the game ends instantly!\n\n🎮 How to Play:\n\nTap or click to shoot the yellow ducks\n\nAvoid red ducks to keep your score safe\n\nReact quickly as ducks speed up over time\n\nKeep shooting—don't let the game time out!\n\n✨ Key Features:\n\n🎯 Classic carnival shooting gallery gameplay\n\n🦆 Endless duck hunt challenge with increasing speed\n\n⭐ Score-based system – test your aim and reflexes\n\n⚡ Fast-paced, fun action for players of all ages\n\n📱 Play online on desktop & mobile devices\n\nEasy to pick up but hard to master, Duck Shooter is the perfect game for fans of carnival shooters, aim challenges, and fast reaction arcade games. How long can you keep shooting before time runs out?",
    },
    {
      name: "Traffic",
      url: "https://twinogamez.com/Game/13-Traffic",
      image: "/game-logo-webp/13.webp",
      description:
        "Traffic\n\nPlay Traffic for free now on Little Games! Test your reflexes and timing as you navigate through busy roads filled with speeding cars. The goal is simple—cross safely without crashing, but the challenge increases as traffic gets faster and more chaotic.\n\nEasy to play but hard to master, Traffic is a fun arcade game that keeps you hooked as you try to beat your high score.\n\n🎮 How to Play:\n\nUse arrow keys or tap controls to move your car\n\nAvoid traffic and keep driving to increase your score\n\nStay focused—the longer you last, the faster the game gets!\n\n✨ Game Features:\n\n🚦 Play Traffic online for free anytime\n\n🎮 Simple one-tap or arrow key controls\n\n🔥 Endless arcade gameplay with rising difficulty\n\n👨‍👩‍👧 Fun for all ages—perfect for quick play sessions\n\nCan you make it through the traffic without crashing? Play Traffic today for free and prove your skills!",
    },
    {
      name: "Kingdom Defense",
      url: "https://twinogamez.com/Game/14-Kingdom-Defense",
      image: "/game-logo-webp/14.webp",
      description:
        "Kingdom Defense – Epic Tower Defense Strategy Game\n\nPrepare for battle in Kingdom Defense, an exciting tower defense game where your mission is to protect your fortress against waves of powerful enemies. Strengthen your defenses, upgrade your heroes, and unleash devastating super powers and magic to stop the invasion. Only the bravest warriors can survive until the end!\n\nWith 30 challenging levels that gradually increase in difficulty, you'll need sharp strategy, quick decisions, and powerful upgrades to hold your ground. Defend your kingdom, pump up your tower, and lead your heroes to victory.\n\n✨ Game Features:\n\n🏹 Action-packed tower defense strategy gameplay\n\n💪 Upgrade your heroes, fortress, and magic powers\n\n⚔️ Face waves of hundreds of enemies\n\n🌍 30 levels with unique challenges\n\n📱 Optimized for smooth play on mobile & desktop\n\nIf you love strategy games, fantasy battles, and tower defense challenges, Kingdom Defense will keep you hooked for hours. Rally your heroes, defend your fortress, and prove you're the ultimate defender of the realm!",
    },
    {
      name: "Candy Super Lines",
      url: "https://twinogamez.com/Game/15-Candy-Super-Lines",
      image: "/game-logo-webp/15.webp",
      description:
        "Candy Super Lines – Fun and Addictive Puzzle Game\n\nIndulge your sweet tooth with Candy Super Lines, a colorful and fun puzzle game that's easy to play but hard to master! Simply tap, drag, and drop the jelly candies to match three or more in a row and score big points. The more matches you make, the higher your score climbs.\n\nWith its simple controls and vibrant candy graphics, this game is perfect for players of all ages. Challenge yourself to beat your own high scores and enjoy endless fun in this classic puzzle adventure.\n\n✨ Game Features:\n\n🍭 Classic match-3 puzzle gameplay\n\n🎮 Simple tap, drag, and drop controls\n\n🌈 Bright and colorful jelly candy graphics\n\n🧩 Easy to learn, fun to play, hard to master\n\n📱 Perfect for quick play sessions anywhere\n\nIf you enjoy candy games, jelly puzzles, or challenges, Candy Super Lines is the perfect choice for you. Play now and see how high you can score!",
    },
    {
      name: "Fruit Snake",
      url: "https://twinogamez.com/Game/16-Fruit-Snake",
      image: "/game-logo-webp/16.webp",
      description:
        "Fruit Snake – Classic Snake Game with a Fruity Twist\n\nRelive the nostalgia of the classic snake game in Fruit Snake, a colorful modern version packed with fun! Control your snake, eat delicious fruits, and grow longer with every bite. Each fruit you collect adds extra time, keeping the game alive as you race for the highest score.\n\nSimple yet addictive, Fruit Snake is easy to learn but challenging to master. The vibrant colors, smooth controls, and endless gameplay make it a perfect game for all ages.\n\n🎮 How to Play:\n\nUse arrow keys (desktop) or swipe (mobile) to control your snake\n\nEat fruits to grow longer and add extra time\n\nAvoid crashing into walls or yourself\n\nKeep going as long as you can to beat your high score\n\n✨ Game Features:\n\n🍎 Classic snake gameplay with a fun fruity theme\n\n⏳ Fruits add extra time for nonstop action\n\n🌈 Bright & colorful graphics with smooth gameplay\n\n🔥 Endless challenge with increasing difficulty\n\n📱 Perfect for casual play on desktop & mobile\n\n🐍 Can you become the ultimate Fruit Snake master and set a new high score? Dive in and find out! 🍓🍊🍇",
    },
    {
      name: "Super Color Lines",
      url: "https://twinogamez.com/Game/17-Super-Color-Lines-Match-5",
      image: "/game-logo-webp/17.webp",
      description:
        "Super Color Lines – Fun and Addictive Match 5 Puzzle Game\n\nTest your logic and puzzle-solving skills in Super Color Lines, a simple yet addictive match 5 game! Tap, drag, and drop the colorful jewels to align five or more in a row and score big points. The more matches you make, the higher your score grows!\n\nWith its easy-to-learn controls and bright jewel graphics, Super Color Lines is perfect for players of all ages. Challenge yourself to think ahead, plan your moves carefully, and create the highest-scoring combinations.\n\n✨ Game Features:\n\n💎 Classic match 5 puzzle gameplay\n\n🎨 Tap, drag, and drop jewels with simple controls\n\n🐍 Bright and colorful jewel graphics\n\n🎮 Easy to play but challenging to master\n\n👇 Endless fun for puzzle lovers of all ages\n\nIf you enjoy match 3 or jewel puzzle games, Super Color Lines takes the challenge even further with match 5 mechanics. Play now and aim for the highest score!",
    },
    {
      name: "Pool 8 Ball",
      url: "https://twinogamez.com/Game/18-Pool-8-Ball",
      image: "/game-logo-webp/18.webp",
      description:
        "Pool 8 Ball – Classic Billiards Game Online\n\nSometimes it’s best to take a break from fast-paced action and enjoy a classic game of skill. Pool 8 Ball is the perfect way to relax while sharpening your focus and strategy. Aim carefully, adjust the angle and force of your shot, and pocket all the balls to clear the table.\n\nView the table from above, evaluate your moves, and plan your strategy to outsmart your opponent. Avoid fouls, set clever traps, and use precision to sink your shots. Clearing the stage without mistakes is challenging, but with practice, you can become a true master of billiards.\n\n✨ Game Features:\n\n🎱 Classic 8 ball pool gameplay\n\n🎱 Easy-to-use controls for aiming and striking\n\n🎱 Realistic table view for better strategy\n\n🎱 Challenging yet relaxing gameplay\n\n🎱 Perfect for casual players and billiards fans alike\n\nWhether you’re a beginner or a seasoned player, Pool 8 Ball offers endless fun and a chance to test your precision skills. Play now and become the fastest billiards champion!",
    },
    {
      name: "Mummy Candies",
      url: "https://twinogamez.com/Game/19-Mummy-Candies",
      image: "/game-logo-webp/19.webp",
      description:
        "Mummy Candy – Fun Candy Collecting Arcade Game\n\nHelp the mummy on its sweet adventure in Mummy Candy, a fun and addictive arcade game where your goal is to collect as many candies and lollipops as possible! Guide the mummy carefully, grab tasty treats, and boost your score with every collection. But beware—the path is filled with explosive pumpkins that can ruin your journey in seconds.\n\nUse the in-game shop to upgrade your achievements, unlock boosts, and improve your chances of reaching higher scores. With simple controls, colorful graphics, and endless fun, Mummy Candy is the perfect game for players of all ages.\n\n✨ Game Features:\n\n🍭 Collect candies and lollipops to earn points\n\n🎃 Avoid explosive pumpkins and survive longer\n\n🛒 Upgrade achievements in the in-game shop\n\n🎮 Fun and addictive arcade gameplay\n\n🌈 Bright, colorful graphics and easy controls for all Gamers\n\nCan you help the mummy collect all the candies without getting caught by the pumpkins? Play Mummy Candy now and test your skills!",
    },
    {
      name: "Mad Fish",
      url: "https://twinogamez.com/Game/20-Mad-Fish",
      image: "/game-logo-webp/20.webp",
      description:
        "Mad Fish – Fun Survival Fish Game Online\n\nEnter the wild underwater world in Mad Fish, a thrilling survival game where it’s all about eating or being eaten! Start as a small fish and swim through the ocean, eating smaller fishes to grow stronger. But beware—larger predators are everywhere, and if you cross their path, you’ll be swallowed whole!\n\nWith simple controls, colorful graphics, and addictive gameplay, Mad Fish is perfect for quick play sessions and endless fun. The bigger you grow, the more dangerous the ocean becomes. Do you have the skills to survive and become the biggest fish in the sea?\n\n🌊 Game Features:\n\n🐠 Exciting fish survival gameplay\n\n🍴 Eat smaller fishes to grow bigger\n\n🦈 Avoid larger predators or risk being eaten\n\n🎮 Simple controls and smooth mechanics\n\nOnly the fastest and smartest can survive the deep sea. Play Mad Fish now and prove you’re the ultimate predator!",
    },
    {
      name: "Easter Memory",
      url: "https://twinogamez.com/Game/21-Easter-Memory",
      image: "/game-logo-webp/21.webp",
      description:
        "Easter Memory\n\nHop into the fun with Easter Memory, the perfect online memory game for kids and adults alike! Test your brainpower and sharpen your concentration skills by matching pairs of Easter-themed cards, including colorful eggs, cute bunnies, and spring flowers.\n\nThis classic memory challenge comes with a festive twist, offering relaxing yet engaging gameplay that’s great for boosting focus, training your brain, and celebrating the Easter spirit. Whether you’re playing solo or with family, Easter Memory delivers endless fun for all ages.\n\n✨ Game Features:\n\n🧩 Classic memory matching gameplay\n\n🐣 Easter-themed cards with bunnies, eggs & flowers\n\n🧠 Improves focus, memory, and concentration\n\n🎨 Bright, cheerful graphics with festive vibes\n\n👨‍👩‍👧 Fun for kids, adults, and families\n\nCelebrate springtime with Easter Memory and enjoy the ultimate holiday brain teaser!",
    },
    {
      name: "Forest Brothers",
      url: "https://twinogamez.com/Game/22-Forest-Brothers",
      image: "/game-logo-webp/22.webp",
      description:
        "Forest Brothers\n\nStep into the forest and take on a unique challenge in Forest Brothers, a fun and exciting platformer where you control two squirrels at the same time! Your goal? Help them race through tricky levels and reach the magical nut before the clock runs out.\n\nBut it’s not just about speed—collect shiny coins along the way to boost your score and prove your skills. The faster you move, the higher your chances of winning. Perfect for solo players or friends who love teamwork and quick thinking!\n\n✨ Game Features:\n\n🐿️ Unique gameplay – control two squirrels at once\n\n⏱️ Race against time to reach the magic nut\n\n💰 Collect coins to maximize your score\n\n🎮 Fun, fast-paced platforming adventure with clever mechanics",
    },
    {
      name: "Tank Defender",
      url: "https://twinogamez.com/Game/23-Tank-Defender",
      image: "/game-logo-webp/23.webp",
      description:
        "Tank Defender\n\nPrepare for battle in Tank Defender, an action-packed defense game where you command a powerful super tank to protect your territory from relentless enemy invaders. Your mission is simple—survive as long as possible while destroying enemy planes, dodging bombs, and collecting supply crates dropped by your allied cargo planes.\n\nThe longer you hold out, the higher your score climbs. Stay sharp, upgrade your strategy, and prove that you’re a true tank commander capable of defending your homeland against overwhelming odds.\n\n✨ Game Features:\n\n🎮 Action-packed tank defense gameplay\n\n🕹️ Smooth controls for easy play on mobile & desktop\n\n💣 Blast enemy planes while dodging deadly bombs\n\n📦 Collect supply crates to extend your survival\n\n🔥 Endless challenge to test your skills and reflexes\n\nShow your strength, hold the line, and become the ultimate tankman in Tank Defender!",
    },
    {
      name: "Angry Cat Shot",
      url: "https://twinogamez.com/Game/24-Angry-Cat-Shot",
      image: "/game-logo-webp/24.webp",
      description:
        "Angry Cat Shot – Addictive HTML5 Arcade Game (30 Levels)\n\nAngry Cat Shot is a fun and skill game that challenges your precision and timing! Your goal is simple: guide the angry cat to jump through all the rings without touching them. Each level gets harder, testing your reflexes and focus as you progress.\n\nWith 30 challenging levels and smooth one-touch controls, this game is designed to keep you entertained for hours. Whether you’re playing on desktop or mobile, Angry Cat Shot is the perfect quick arcade game for all ages.\n\n✨ Game Features:\n\n🎮 Fun & simple arcade gameplay\n\n🔥 30 levels with increasing difficulty\n\n🐾 Avoid touching the rings to clear each stage\n\n📱 Optimized for smooth play on mobile & desktop\n\n👆 Easy one-touch controls\n\nCan you master all the levels and help the cat pass every ring? Play Angry Cat Shot now and put your skills to the test!",
    },
    {
      name: "Balloon Paradise",
      url: "https://twinogamez.com/Game/25-Balloon-Paradise",
      image: "/game-logo-webp/25.webp",
      description:
        "Balloon Paradise – Match & Pop Balloon Puzzle Game 🎈✨\n\nStep into the colorful world of Balloon Paradise, a delightful balloon-popping puzzle game that’s fun for all ages! Match and pop vibrant balloons by forming groups of three or more. Use powerful boosters like arrows for line clears and bombs to blast entire zones, making every move exciting. With stunning visuals and smooth gameplay, this addictive match game will keep you entertained for hours.\n\n🎮 How to Play:\n\nTap and swap adjacent balloons to make matches\n\nPop groups of 3+ balloons to score points\n\nUse boosters (arrows & bombs) for bigger clears\n\nClear levels to unlock new colorful stages\n\nAim high and set unbeatable scores!\n\n✨ Game Features:\n\n🎈 Bright, colorful balloon-matching fun\n\n💥 Explosive boosters for powerful chain reactions\n\n🎮 Smooth, addictive gameplay for all ages\n\n🧩 Endless puzzles to keep you entertained\n\n📱 Optimized for desktop & mobile play",
    },
    {
      name: "Super PonGoal",
      url: "https://twinogamez.com/Game/26-Super-PonGoal",
      image: "/game-logo-webp/26.webp",
      description:
        "Super PonGoal – Soccer Pong Fun Online! ⚽🏓\n\nStep onto the field with Super PonGoal, the ultimate blend of classic Pong gameplay and thrilling soccer action! Perfect for quick matches or long sessions, this addictive game tests your reflexes, strategy, and precision.\n\n✨ Game Features:\n\n⚡ Arcade Soccer Action – A fresh twist on the legendary Pong, powered with a vibrant football theme.\n\n🎮 Single or Multiplayer Mode – Take on a smart AI opponent or challenge your friends in exciting 2-player matches.\n\n🕹️ Easy Controls – Slide your paddle up and down to block, deflect, and outsmart your rival.\n\n⚙️ Customizable Gameplay – Choose different balls, adjust difficulty, and set game duration to match your style.\n\n🏆 Score & Win – Outplay your opponent by scoring the most goals before time runs out.\n\n👨‍👩‍👧 Fun for All Ages – Simple to learn, tough to master, and endlessly replayable.\n\nIf you love soccer games, Pong classics, or competitive multiplayer challenges, Super PonGoal is your next favorite!",
    },
    {
      name: "Brick Out",
      url: "https://twinogamez.com/Game/27-Brick-Out",
      image: "/game-logo-webp/27.webp",
      description:
        "Brick Out – Classic Brick Breaker Challenge!\n\nThe aim of Brick Out is simple yet addictive – destroy all the bricks and collect falling power-ups to advance to the next level. With 20 exciting levels of increasing difficulty, this classic brick breaker arcade game will test your reflexes, timing, and precision.\n\nUse your paddle to bounce the ball, smash colorful bricks, and grab special bonuses that give you extra powers. Be careful – miss the ball and you’ll lose a life!\n\n✨ Key Features:\n\n🎮 Classic Arcade Gameplay – Break all the bricks to win each level.\n\n⚡ Power-Ups & Bonuses – Catch special items for extra points and abilities.\n\n🕹️ 20 Fun Levels – Progress through challenging stages with unique layouts.\n\n📱 Cross-Platform Play – Works perfectly on mobile, tablet, and desktop.\n\n🎵 Engaging Sounds & Graphics – Bright visuals and satisfying effects.",
    },
    {
      name: "Duck Hunter",
      url: "https://twinogamez.com/Game/28-Duck-Hunter",
      image: "/game-logo-webp/28.webp",
      description:
        "Duck Hunter – Classic Shooting Game\n\nTake aim and test your reflexes in Duck Hunter, the timeless shooting game! 🎯 Move the scope across the screen and shoot the ducks before they escape. With simple controls and smooth gameplay, this game is perfect for quick, action-packed fun anytime, anywhere.\n\nDesigned with mobile devices in mind, Duck Hunter delivers a responsive, exciting, and addictive experience that keeps you coming back for more.\n\n✨ Key Features:\n\n🦆 Classic Duck Shooting Action – Aim and shoot before the ducks fly away.\n\n🎯 Simple & Intuitive Controls – Just move the scope and tap to fire.\n\n📱 Mobile-Friendly Gameplay – Optimized for smartphones and tablets.\n\n🔊 Engaging Sounds & Graphics – Brings back retro shooting fun.\n\n⏱️ Fast-Paced Challenges – Test your speed and accuracy.",
    },
    {
      name: "Animal Crush",
      url: "https://twinogamez.com/Game/29-Animals-Crash-Match-3",
      image: "/game-logo-webp/29.webp",
      description:
        "Animals Crush\n\nAnimals Crush is a colorful and addictive match 3 puzzle game where your goal is to connect and crush adorable animals before the timer runs out. Tap and drag to match three or more animals in any direction — up, down, sideways, or diagonally. The longer the chain, the higher your score!\n\n🎮 How to Play:\n\nTap & drag to connect matching animals\n\nMatch 3 or more to crush them\n\nCreate long chains for bonus points\n\nBeat the clock before time runs out!\n\n✨ Game Features:\n\n🐾 Colorful, cute, and fun animal characters\n\n🔗 Drag-and-connect mechanics for unlimited matches\n\n⏱️ Time-based challenge for endless replay value\n\n💻 Play instantly on desktop & mobile browsers\n\n🎉 Easy to pick up, tricky to master!",
    },
    {
      name: "Happy Chef Bubble Shooter",
      url: "https://twinogamez.com/Game/30-Happy-Chef-Bubble-Shooter",
      image: "/game-logo-webp/30.webp",
      description:
        "Happy Chef Bubble Shooter – Fun Dessert-Themed Bubble Game\n\nHappy Chef Bubble Shooter is a fun and addictive bubble shooting game with a sweet dessert twist! Aim, adjust the angle, and shoot bubbles to match three or more of the same type. Pop them strategically to clear the board and unlock higher scores.\n\n✨ How to Play:\n\n🎉 Aim and shoot bubbles of the same type\n\n⚡ Match 3 or more to make them pop\n\n🍭 Use angles wisely for tricky shots\n\n🍬 Clear the board and progress to new challenges\n\n🍩 Pop, match, and satisfy your sweet tooth in Happy Chef Bubble Shooter! 🎉",
    },
    {
      name: "Great Air Battles",
      url: "https://twinogamez.com/Game/31-Great-Air-Battles",
      image: "/game-logo-webp/31.webp",
      description:
        "Great Air Battles – Exciting Fighter Jet Air Combat\n\nGreat Air Battles is an action-packed HTML5 air combat game where you take control of a powerful fighter jet! Dodge enemy missiles, engage waves of enemy aircraft, and unleash devastating firepower to dominate the skies.\n\n✨ How to Play:\n\n🎮 Pilot your jet and avoid enemy fire & guided missiles\n\n⚡ Shoot down enemy planes and destroy ground targets\n\n🚀 Progress through increasingly challenging levels\n\n🛡️ Use quick reflexes and sharp maneuvers to survive\n\n✈️ Take to the skies and prove your aerial combat skills in Great Air Battles! 🌌",
    },
    {
      name: "Plumber",
      url: "https://twinogamez.com/Game/32-Plumber",
      image: "/game-logo-webp/32.webp",
      description:
        "Plumber – Fun Pipe Connection Puzzle Game\n\nPlumber is an addictive HTML5 puzzle game where you rotate pipes to connect two water points before time runs out! Complete the path, let the water flow, and advance through increasingly challenging levels.\n\n✨ How to Play:\n\n🚰 Rotate the pipes to connect start and end points\n\n⏱️ Complete the pipeline before time runs out\n\n🧩 Progress through levels with growing difficulty\n\n💡 Test your logic and problem-solving skills in Plumber!",
    },
    {
      name: "Professor Bubble",
      url: "https://twinogamez.com/Game/33-Professor-Bubble",
      image: "/game-logo-webp/33.webp",
      description:
        "Professor Bubble – Classic Bubble Shooter Puzzle Game 🎯\n\nProfessor Bubble is a fun and addictive HTML5 bubble shooter game where you aim, match, and pop bubbles to score big! Use the viewfinder to shoot bubbles and match 3 or more of the same color to clear the board.\n\n✨ How to Play:\n\n🎯 Click or tap to aim and shoot bubbles\n\n⚡ Match 3+ bubbles of the same color to pop them\n\n🧩 Clear the board before your bubbles run out\n\n💡 Use skill and strategy to finish each level\n\n🎨 Enjoy colorful graphics and smooth gameplay while training your brain in Professor Bubble!",
    },
    {
      name: "Gold Miner Jack",
      url: "https://twinogamez.com/Game/34-Gold-Miner-Jack",
      image: "/game-logo-webp/34.webp",
      description:
        "Gold Miner Jack – Fun Gold Mining Adventure Game 💰⛏️\n\nJoin Jack the Gold Miner on his exciting quest to strike it rich! Aim carefully, drop the claw, and collect as much gold as possible while avoiding heavy stones that slow you down.\n\n✨ How to Play:\n\n⛏️ Tap to release the claw and catch gold\n\n💎 Avoid rocks and unwanted objects\n\n⏱️ Collect as much treasure as you can before time runs out\n\n🏆 Help Jack become the richest gold miner!\n\n💰 Enjoy classic gold mining gameplay with simple one-tap controls and fun, colorful graphics!",
    },
    {
      name: "Tank Wars",
      url: "https://twinogamez.com/Game/35-Tank-Wars",
      image: "/game-logo-webp/35.webp",
      description:
        "Tank Wars – Classic Arcade Tank Battle Game 🚀💣\n\nTank Wars is an action-packed arcade tank game where you control your tank to destroy enemies and defend your base! Choose your mode, battle across epic levels, and even create custom maps for endless fun.\n\n✨ How to Play:\n\n🛡️ Control your tank and dodge enemy fire\n\n💥 Destroy enemy tanks to clear each level\n\n🏰 Protect your base from being destroyed\n\n🎮 Play solo, co-op, or on custom maps\n\n🚀 Engage in fast-paced, strategic battles across 120+ battlefields!\n\n🔥 Enjoy classic arcade tank action with multiple modes, custom maps, and multiplayer fun!",
    },
    {
      name: "Stick Panda",
      url: "https://twinogamez.com/Game/36-Stick-Panda",
      image: "/game-logo-webp/36.webp",
      description:
        "Stick Panda – Fun & Addictive Balance Arcade Game 🐼\n\nStick Panda is a simple yet challenging arcade game where you help a cute panda cross platforms using a magic stick! Grow the stick, release at the right moment, and guide Panda safely to the next platform without falling.\n\n✨ How to Play:\n\n👆 Hold your finger to grow the stick\n\n🪵 Release to drop it across the platform\n\n🐼 Help Panda cross safely\n\n🏆 Beat your own high score with perfect timing\n\n🔥 Enjoy endless arcade fun with a cute panda, simple one-tap controls, and increasing challenge!",
    },
    {
      name: "Stack Jump",
      url: "https://twinogamez.com/Game/37-Stack-Jump",
      image: "/game-logo-webp/37.webp",
      description:
        "Stack Jump – Fun & Addictive Block Stacking Game 🏗️\n\nStack Jump is an exciting HTML5 arcade skill game where you jump at the right moment to stack moving blocks and build the tallest tower! Test your timing and reflexes in challenging levels or endless mode.\n\n✨ How to Play:\n\n🎮 Tap to jump and stack the blocks\n\n🏆 Build the tallest tower possible\n\n⚡ Progress through levels with increasing difficulty\n\n🔥 Try endless mode to beat your high score\n\n📱 Enjoy smooth graphics, one-tap controls, and addictive gameplay anywhere!",
    },
    {
      name: "Crazy Runner",
      url: "https://twinogamez.com/Game/38-Crazy-Runner",
      image: "/game-logo-webp/38.webp",
      description:
        "Crazy Runner – Endless Running Challenge 🏃‍♂️💨\n\nCrazy Runner is a fast-paced endless runner game where you dash as far as possible while avoiding obstacles! Jump over cars, bombs, and tires while collecting coins and food to boost your score.\n\n✨ How to Play:\n\n👆 Tap or click to jump over obstacles\n\n💰 Collect coins and food for bonus points\n\n🏆 Survive as long as you can to set a high score\n\n⚡ Enjoy smooth one-tap controls and exciting endless gameplay on mobile & desktop!",
    },
    {
      name: "Fashion Dress Up",
      url: "https://twinogamez.com/Game/39-Fashion-Dress-Up",
      image: "/game-logo-webp/39.webp",
      description:
        "Fashion Dress Up – The Ultimate Style Game 👗💄\n\nFashion Dress Up is a fun and creative game where you mix and match outfits, hairstyles, and accessories to create your perfect look! Style your character for parties, school, or any occasion.\n\n✨ How to Play:\n\n👚 Choose from 200+ fashion items across 18 categories\n\n💇 Customize hairstyles, clothes, shoes, and makeup\n\n🎉 Experiment with different themes: casual, party, classic, and more\n\n📸 Snap photos of your stylish creations\n\n🕹️ Enjoy endless fashion fun with simple, easy-to-use controls!",
    },
    {
      name: "Super Cowboy Run",
      url: "https://twinogamez.com/Game/40-Super-Cowboy-Run",
      image: "/game-logo-webp/40.webp",
      description:
        "Super Cowboy Run – Adventure Platformer Game 🤠🌵\n\nSuper Cowboy Run is a fast-paced platformer where you play as a cowboy on the run! Collect coins, grab extra lives, pick up ammo, and defeat monsters as you dash through exciting levels.\n\n✨ How to Play:\n\n🕹️ Desktop: Up Arrow to jump, Spacebar to shoot\n\n📱 Mobile: Tap the screen to jump and shoot\n\n💰 Collect coins, ammo, and lives along the way\n\n👾 Defeat enemies before they stop your run\n\n🚀 Enjoy endless platformer fun with smooth controls and a colorful western theme!",
    },
    {
      name: "Quick Dice",
      url: "https://twinogamez.com/Game/41-Quick-Dice",
      image: "/game-logo-webp/41.webp",
      description:
        "Quick Dice – Fast Reflex Color Matching Game 🎲⚡\n\nQuick Dice is a fun and addictive HTML5 game that tests your speed and reflexes! Choose the correct color and fire it before time runs out to score big.\n\n✨ How to Play:\n\n🎮 Tap or click to select the correct color\n\n⚡ React quickly to match colors before time runs out\n\n🏆 Aim for the highest score and challenge your reflexes\n\n📱 Enjoy fast-paced color-matching fun on mobile and desktop\n\n👨‍👩‍👧 Perfect for players of all ages!",
    },
    {
      name: "Stick Soldier",
      url: "https://twinogamez.com/Game/42-Stick-Soldier",
      image: "/game-logo-webp/42.webp",
      description:
        "Stick Soldier – Addictive Rope Bridge Challenge 🪢⚡\n\nStick Soldier is a fun and fast-paced HTML5 game where you build a rope bridge to help your soldier cross platforms! Tap and hold to extend the stick, release at the right time, and guide your soldier safely.\n\n✨ How to Play:\n\n👉 Tap or click to extend the stick bridge\n\n🪜 Release to drop the bridge across platforms\n\n⚡ Cross safely to keep moving forward\n\n💯 Score higher the longer you survive\n\n🔥 Enjoy endless gameplay, simple one-touch controls, and challenging reflex-based fun on mobile and desktop!",
    },
    {
      name: "Monster Match 3",
      url: "https://twinogamez.com/Game/43-Monster-Match-3",
      image: "/game-logo-webp/43.webp",
      description:
        "Monster Match 3 – Fun & Colorful Puzzle Game 👾🎨\n\nMonster Match 3 is an exciting HTML5 puzzle game where you swipe to connect monsters of the same type and clear the board! Advance through levels and test your strategy and reflexes.\n\n✨ How to Play:\n\n🔥 Swipe to match 3 or more monsters\n\n🚀 Clear the board to unlock the next level\n\n⚡ Levels start simple and get more challenging\n\n🎨 Enjoy bright, vibrant graphics with fun animations\n\n📱 Perfect for casual players and puzzle lovers of all ages!",
    },
    {
      name: "Flappy Ball",
      url: "https://twinogamez.com/Game/44-Flappy-Ball",
      image: "/game-logo-webp/44.webp",
      description:
        "Flappy Ball – Fun & Addictive HTML5 Game ⚽🎯\n\nFlappy Ball is a simple yet challenging arcade game where you keep the ball in the air and guide it through obstacles! Test your reflexes and see how far you can go.\n\n✨ How to Play:\n\n👆 Tap, click, or touch to keep the ball bouncing\n\n⚡ Avoid obstacles to stay in play\n\n🏆 Last as long as you can to achieve a high score\n\n📱 Enjoy lightweight, one-touch controls on desktop and mobile\n\n🔥 Quick, addictive gameplay perfect for short breaks or endless fun!",
    },
    {
      name: "Car Physics",
      url: "https://twinogamez.com/Game/45-Car-Physics",
      image: "/game-logo-webp/45.webp",
      description:
        "Car Physics – Exciting Eight-Wheeled Driving Game 🚙💨\n\nTake control of an eight-wheeled car and tackle steep hills, tricky obstacles, and rough terrains! Collect coins, balance your car, and race to the finish line as fast as you can.\n\n✨ How to Play:\n\n⬅️➡️ Use Arrow Keys to drive and balance\n\n⚡ Press Shift for a Nitro boost\n\n💰 Collect coins and overcome obstacles\n\n🏁 Complete each level with skill and precision\n\n🔥 Enjoy realistic car physics, thrilling uphill racing, and addictive gameplay on both desktop and mobile!",
    },
    {
      name: "Girl Dress Up",
      url: "https://twinogamez.com/Game/46-Girl-Dress-Up",
      image: "/game-logo-webp/46.webp",
      description:
        "Girl Dress Up – Fun & Creative Fashion Game 👗💄\n\nGirl Dress Up is an exciting fashion game where you help the girl find her perfect style! Customize hair, makeup, clothes, shoes, and accessories to create endless stylish looks.\n\n✨ How to Play:\n\n👗 Choose from 200+ fashion items across 12 categories\n\n💄 Mix and match outfits, hairstyles, and makeup\n\n🎨 Express your creativity and design dream looks\n\n🌟 Take photos in the disco studio to showcase your style\n\n📱 Enjoy lightweight HTML5 gameplay anywhere on mobile or desktop\n\nShow off your fashion sense and become a style star in Girl Dress Up!",
    },
    {
      name: "Viking Escape",
      url: "https://twinogamez.com/Game/47-Viking-Escape",
      image: "/game-logo-webp/47.webp",
      description:
        "Viking Escape – Dragon Rider Adventure 🐉⚔️\n\nViking Escape is an action-packed HTML5 game where you ride a mighty dragon through a dark forest! Avoid obstacles, defeat enemies, and survive the dangerous journey.\n\n✨ How to Play:\n\n🎮 Move your Viking and dragon to dodge obstacles\n\n🗡️ Attack enemies with weapons or the dragon’s fiery breath\n\n💰 Collect points, ammo, and power-ups along the way\n\n🏆 Survive the forest and escape to victory\n\n🔥 Enjoy stunning dark fantasy graphics and thrilling aerial combat on both mobile and desktop!",
    },
    {
      name: "Pops Billiards",
      url: "https://twinogamez.com/Game/48-Pops-Billiards",
      image: "/game-logo-webp/48.webp",
      description:
        "Pops Billiards – Classic Pool Game Online 🎱\n\nPops Billiards is a fun and challenging HTML5 pool game where you aim and pocket all the balls! Test your geometry, precision, and strategy to complete each challenge.\n\n✨ How to Play:\n\n🎯 Tap and hold (or click and hold) to aim the cue ball\n\n⚡ Adjust hitting force using the on-screen indicator\n\n🏆 Sink all 15 balls to complete the level\n\n🔥 Beat your high scores and improve your precision\n\n📱 Enjoy realistic billiards physics and addictive gameplay on desktop and mobile!",
    },
    {
      name: "Cars",
      url: "https://twinogamez.com/Game/49-Cars",
      image: "/game-logo-webp/49.webp",
      description:
        "Cars – Fast-Paced Racing Challenge 🏎️💨\n\nCars is an exciting HTML5 racing game where you dodge traffic, push your car to the limit, and aim for the highest score! Test your reflexes and driving skills in endless high-speed action.\n\n✨ How to Play:\n\n⬅️➡️ Use arrow keys to control your car\n\n⚡ Avoid crashes and obstacles while maintaining top speed\n\n🏁 Drive as far as you can to earn points and beat your records\n\n🔥 Enjoy smooth controls, addictive gameplay, and nonstop racing fun on desktop and mobile!",
    },
    {
      name: "Sahara Invasion",
      url: "https://twinogamez.com/Game/50-Sahara-Invasion",
      image: "/game-logo-webp/50.webp",
      description:
        "Sahara Invasion – Classic Tank Battle Action 🚜💥\n\nSahara Invasion is an exciting HTML5 tank game where you destroy enemy tanks, defend your base, and conquer the battlefield! Play solo or team up with a friend on the same device for endless action.\n\n✨ How to Play:\n\n🎮 Choose 1 or 2 player mode on one device\n\n⚡ Drive your tank, blast enemies, and protect your base\n\n🔧 Upgrade your tank with 4 modifications\n\n🌍 Use terrain strategically – mow trees, cross ice, and outsmart opponents\n\n🎯 Collect 10 different bonuses to power up weapons and defenses\n\n🔥 Enjoy 120 levels, custom maps, multiple difficulty levels, and addictive tank battles with smooth Full HD graphics!",
    },
  ];

  const relatedGames = [
    {
      title: "Traffic Racer",
      image: "/game-logo-webp/1.webp",
      link: "/game-page?gamename=traffic-racer",
    },
    {
      title: "Brick Breaker Unicorn",
      image: "/game-logo-webp/2.webp",
      link: "/game-page?gamename=brick-breaker-unicorn",
    },
    {
      title: "Air Warfare",
      image: "/game-logo-webp/3.webp",
      link: "/game-page?gamename=air-warfare",
    },
    {
      title: "Ninja Run",
      image: "/game-logo-webp/4.webp",
      link: "/game-page?gamename=ninja-run",
    },
    {
      title: "Gold Miner",
      image: "/game-logo-webp/5.webp",
      link: "/game-page?gamename=gold-miner",
    },
    {
      title: "Fruit Slasher",
      image: "/game-logo-webp/6.webp",
      link: "/game-page?gamename=fruit-slasher",
    },
    {
      title: "Stick Monkey",
      image: "/game-logo-webp/7.webp",
      link: "/game-page?gamename=stick-monkey",
    },
    {
      title: "Space Purge",
      image: "/game-logo-webp/8.webp",
      link: "/game-page?gamename=space-purge",
    },
    {
      title: "Shoot Robbers",
      image: "/game-logo-webp/9.webp",
      link: "/game-page?gamename=shoot-robbers",
    },
    {
      title: "Splishy Fish",
      image: "/game-logo-webp/10.webp",
      link: "/game-page?gamename=splishy-fish",
    },
    {
      title: "Speed Racer",
      image: "/game-logo-webp/11.webp",
      link: "/game-page?gamename=speed-racer",
    },
    {
      title: "Duck Shooter",
      image: "/game-logo-webp/12.webp",
      link: "/game-page?gamename=duck-shooter",
    },
    {
      title: "Traffic",
      image: "/game-logo-webp/13.webp",
      link: "/game-page?gamename=traffic",
    },
    {
      title: "Kingdom Defense",
      image: "/game-logo-webp/14.webp",
      link: "/game-page?gamename=kingdom-defense",
    },
    {
      title: "Candy Super Lines",
      image: "/game-logo-webp/15.webp",
      link: "/game-page?gamename=candy-super-lines",
    },
    {
      title: "Fruit Snake",
      image: "/game-logo-webp/16.webp",
      link: "/game-page?gamename=fruit-snake",
    },
    {
      title: "Super Color Lines",
      image: "/game-logo-webp/17.webp",
      link: "/game-page?gamename=super-color-lines",
    },
    {
      title: "Pool 8 Ball",
      image: "/game-logo-webp/18.webp",
      link: "/game-page?gamename=pool-8-ball",
    },
    {
      title: "Mummy Candies",
      image: "/game-logo-webp/19.webp",
      link: "/game-page?gamename=mummy-candies",
    },
    {
      title: "Mad Fish",
      image: "/game-logo-webp/20.webp",
      link: "/game-page?gamename=mad-fish",
    },
    {
      title: "Easter Memory",
      image: "/game-logo-webp/21.webp",
      link: "/game-page?gamename=easter-memory",
    },
    {
      title: "Forest Brothers",
      image: "/game-logo-webp/22.webp",
      link: "/game-page?gamename=forest-brothers",
    },
    {
      title: "Tank Defender",
      image: "/game-logo-webp/23.webp",
      link: "/game-page?gamename=tank-defender",
    },
    {
      title: "Angry Cats",
      image: "/game-logo-webp/24.webp",
      link: "/game-page?gamename=angry-cats",
    },
  ];

  useEffect(() => {
    if (gameName) {
      const formattedName = gameName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const foundGame = games.find(
        (g) => g.name.toLowerCase() === formattedName.toLowerCase()
      );

      if (foundGame) {
        setGameUrl(foundGame.url);
        if ((foundGame as any).image) setPreviewImage((foundGame as any).image);
        else {
          const related = relatedGames.find(
            (r) => r.link && gameName && r.link.includes(gameName)
          );
          if (related && related.image) setPreviewImage(related.image);
          else setPreviewImage("/game-logo-webp/1.webp");
        }
        if ((foundGame as any).description)
          setGameDescription((foundGame as any).description);
        else setGameDescription("");
      } else {
        setGameUrl("");
        setPreviewImage("/game-logo-webp/1.webp");
        setGameDescription("");
      }
    }
  }, [gameName]);

  useEffect(() => {
    const onFullscreenChange = () => {
      const isFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );

      // If we are no longer in fullscreen, disable the iframe and show the play overlay
      if (!isFullscreen) {
        setIframeEnabled(false);
        setModalIframeEnabled(false);
      }
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("mozfullscreenchange", onFullscreenChange);
    document.addEventListener("MSFullscreenChange", onFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        onFullscreenChange
      );
      document.removeEventListener("mozfullscreenchange", onFullscreenChange);
      document.removeEventListener("MSFullscreenChange", onFullscreenChange);
    };
  }, []);

  return (
    <div>
      <Header />

      <div className="background-wrapper">
        <img src="/images/background.png" alt="" className="background-image" />
      </div>

      <div className="container-fluid">
        <div className="background p-0 mx-auto">
          <div className=" text-white p-3 flex flex-col">
            <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center gap-2 py-2  bg-black">
              <div className="flex justify-center items-center p-3">
                <h1 className="text-lg sm:text-xl font-bold m-0">
                  <span className="text-white mr-2 border-l-4 border-yellow pl-2">
                    Play {gameName} Game !
                  </span>
                </h1>
              </div>
              <div className="flex justify-content-center gap-3">
                {!iframeEnabled && (
                  <button
                    className="bg-red-600 text-white p-2 mr-1 rounded-sm flex items-center gap-2 text-sm self-start sm:self-auto"
                    onClick={handleFullscreen}
                  >
                    <i className="fas fa-expand-arrows-alt"></i> PLAY FULL
                    SCREEN
                  </button>
                )}
              </div>
            </div>

            <div className="py-5 flex justify-center items-center h-screen">
              <div className="w-full h-full bg-black rounded overflow-hidden shadow-lg relative">
                <iframe
                  ref={iframeRef}
                  src={gameUrl}
                  className="w-full h-full border-none z-0"
                  style={{ overflow: "hidden" }}
                  title={gameName?.toString()}
                  allowFullScreen
                ></iframe>

                {!iframeEnabled && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: `url(${previewImage})` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <button
                      className="relative z-30 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full flex items-center justify-center transition-colors"
                      onClick={handleFullscreen}
                      title="Play Full Screen"
                    >
                      <i className="fas fa-play text-3xl"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {gameDescription && (
              <div className="py-6 px-4 bg-black text-white rounded mt-4">
                <div className="whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
                  {gameDescription}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-[#1a1a1a] w-full max-w-5xl rounded-lg overflow-hidden shadow-xl relative">
            <div className="flex justify-between items-center p-3 border-b border-gray-700">
              <h2 className="text-white text-lg font-semibold">
                {gameName?.toString().replace(/-/g, " ")} Game
              </h2>
              <button onClick={handleCloseModal} className="text-gray-400 ">
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="aspect-video w-full bg-black relative">
              <iframe
                src={gameUrl}
                className="w-full h-full border-none"
                title="Traffic Racer"
              ></iframe>

              {!modalIframeEnabled && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url(${previewImage})` }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <button
                    className="relative z-30 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full flex items-center justify-center transition-colors"
                    onClick={() => setModalIframeEnabled(true)}
                    title="Play"
                  >
                    <i className="fas fa-play text-3xl"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid">
        <div className="text-white background p-3 ">
          <div className="row border-b border-gray-700">
            {/* Related Games */}
            <div className="col-12">
              <div className="flex justify-between items-center mb-6 bg-black p-3">
                <h1 className="text-lg sm:text-xl font-bold m-0">
                  <span className="text-white mr-2 border-l-4 border-yellow pl-2 ">
                    Related Games
                  </span>
                </h1>
              </div>
              <div className="row g-3">
                {relatedGames.map((game, index) => (
                  <div
                    key={`${game}-${index}`}
                    className="col-6 col-sm-6 col-md-2 mb-4 cursor-pointer"
                  >
                    <Link href={game.link}>
                      <div className="game-card position-relative rounded overflow-hidden">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="img-fluid w-100 h-100 rounded"
                        />
                        <div className="game-title-overlay d-flex align-items-center justify-content-center text-white">
                          <h4 className="m-0">{game.title}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
